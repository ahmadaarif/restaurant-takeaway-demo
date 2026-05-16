"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Truck,
  ShoppingBag,
  User,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  CreditCard,
  Loader2,
} from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import {
  generateOrderNumber,
  UK_POSTCODE_REGEX,
  UK_PHONE_REGEX,
} from "@/lib/order-utils";
import { cn } from "@/lib/utils";

const baseSchema = {
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(1, "Phone is required")
    .regex(UK_PHONE_REGEX, "Enter a valid UK number, e.g. 07700 900123"),
  email: z.string().email("Enter a valid email"),
  notes: z.string().max(280).optional(),
};

const deliverySchema = z.object({
  ...baseSchema,
  mode: z.literal("delivery"),
  postcode: z
    .string()
    .min(1, "Postcode required")
    .regex(UK_POSTCODE_REGEX, "Enter a valid UK postcode, e.g. M14 5AN"),
  addressLine1: z.string().min(3, "Please enter your street address"),
  addressLine2: z.string().optional(),
  city: z.string().min(2, "City required"),
});

const collectionSchema = z.object({
  ...baseSchema,
  mode: z.literal("collection"),
});

const schema = z.discriminatedUnion("mode", [deliverySchema, collectionSchema]);

type FormData = z.infer<typeof schema>;

export default function OrderForm() {
  const router = useRouter();
  const [mode, setMode] = useState<"delivery" | "collection">("delivery");
  const [submitting, setSubmitting] = useState(false);
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { mode: "delivery", city: "Manchester" } as FormData,
  });

  const switchMode = (newMode: "delivery" | "collection") => {
    setMode(newMode);
    setValue("mode", newMode);
  };

  const onSubmit = async (data: FormData) => {
    if (items.length === 0) return;
    setSubmitting(true);

    // Simulate network call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const orderNumber = generateOrderNumber();
    const orderSnapshot = {
      orderNumber,
      mode: data.mode,
      items,
      customer: data,
      placedAt: new Date().toISOString(),
    };

    sessionStorage.setItem("kk-last-order", JSON.stringify(orderSnapshot));
    clearCart();
    router.push(`/order/confirmation?id=${orderNumber}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Mode Toggle */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-maroon mb-3">
          1. How would you like your order?
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {(["delivery", "collection"] as const).map((m) => {
            const Icon = m === "delivery" ? Truck : ShoppingBag;
            const active = mode === m;
            return (
              <button
                key={m}
                type="button"
                onClick={() => switchMode(m)}
                className={cn(
                  "relative p-4 rounded-xl border-2 transition-all text-left",
                  active
                    ? "border-maroon bg-maroon text-cream shadow-md"
                    : "border-cream-dark bg-card hover:border-maroon/50"
                )}
              >
                <Icon size={22} className={active ? "text-gold" : "text-maroon"} />
                <p
                  className={cn(
                    "font-heading font-semibold mt-2 capitalize",
                    active ? "text-cream" : "text-ink"
                  )}
                >
                  {m}
                </p>
                <p
                  className={cn(
                    "text-xs mt-0.5",
                    active ? "text-cream/70" : "text-ink-muted"
                  )}
                >
                  {m === "delivery" ? "~ 45 min · Free over £20" : "~ 25 min · Save £2.50"}
                </p>
              </button>
            );
          })}
        </div>
        <input type="hidden" {...register("mode")} value={mode} />
      </div>

      {/* Contact Details */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-maroon mb-3">
          2. Your details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            icon={<User size={16} />}
            label="Full name"
            error={errors.name?.message}
          >
            <input
              {...register("name")}
              placeholder="Jane Smith"
              className="form-input"
              autoComplete="name"
            />
          </Field>

          <Field
            icon={<Phone size={16} />}
            label="Phone"
            error={errors.phone?.message}
          >
            <input
              {...register("phone")}
              placeholder="07700 900123"
              className="form-input"
              autoComplete="tel"
              type="tel"
            />
          </Field>

          <div className="sm:col-span-2">
            <Field
              icon={<Mail size={16} />}
              label="Email"
              error={errors.email?.message}
            >
              <input
                {...register("email")}
                placeholder="you@example.com"
                className="form-input"
                autoComplete="email"
                type="email"
              />
            </Field>
            <p className="text-xs text-ink-muted mt-1.5">
              We&apos;ll send your order confirmation here.
            </p>
          </div>
        </div>
      </div>

      {/* Delivery Address */}
      {mode === "delivery" && (
        <div>
          <h3 className="font-heading text-lg font-semibold text-maroon mb-3">
            3. Delivery address
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field
              icon={<MapPin size={16} />}
              label="Postcode"
              error={(errors as Record<string, { message?: string }>).postcode?.message}
            >
              <input
                {...register("postcode" as never)}
                placeholder="M14 5AN"
                className="form-input uppercase"
                autoComplete="postal-code"
              />
            </Field>

            <Field label="City" error={(errors as Record<string, { message?: string }>).city?.message}>
              <input
                {...register("city" as never)}
                className="form-input"
                autoComplete="address-level2"
              />
            </Field>

            <div className="sm:col-span-2">
              <Field
                label="Address line 1"
                error={(errors as Record<string, { message?: string }>).addressLine1?.message}
              >
                <input
                  {...register("addressLine1" as never)}
                  placeholder="142 Wilmslow Road"
                  className="form-input"
                  autoComplete="address-line1"
                />
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Field label="Address line 2 (optional)">
                <input
                  {...register("addressLine2" as never)}
                  placeholder="Flat number, building, etc."
                  className="form-input"
                  autoComplete="address-line2"
                />
              </Field>
            </div>
          </div>

          <p className="text-xs text-ink-muted mt-3 bg-gold/10 border border-gold/20 rounded-lg px-3 py-2">
            We deliver within a 3-mile radius of M14 5AN. Free delivery on
            orders over £20, otherwise £2.50.
          </p>
        </div>
      )}

      {/* Order Notes */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-maroon mb-3">
          {mode === "delivery" ? "4." : "3."} Special requests <span className="text-ink-muted text-sm font-normal">(optional)</span>
        </h3>
        <Field icon={<MessageSquare size={16} />} label="">
          <textarea
            {...register("notes")}
            rows={3}
            placeholder="Allergies, spice preferences, delivery instructions…"
            className="form-input resize-none"
          />
        </Field>
      </div>

      {/* Payment placeholder */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-maroon mb-3">
          {mode === "delivery" ? "5." : "4."} Payment
        </h3>
        <div className="bg-card border-2 border-dashed border-cream-dark rounded-xl p-5 text-center">
          <CreditCard size={28} className="text-maroon/40 mx-auto mb-2" />
          <p className="font-heading text-maroon text-sm font-semibold">
            Card payment placeholder
          </p>
          <p className="text-xs text-ink-muted mt-1 max-w-xs mx-auto">
            In the live site this would be a Stripe checkout. For this demo
            tap &ldquo;Place Order&rdquo; to skip to confirmation.
          </p>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting || items.length === 0}
        className="w-full bg-maroon text-cream py-4 rounded-full text-base font-semibold hover:bg-maroon-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Placing your order…
          </>
        ) : items.length === 0 ? (
          "Add items to continue"
        ) : (
          <>Place Order →</>
        )}
      </button>

      <p className="text-xs text-ink-muted/70 text-center">
        By placing this order you agree to our terms. We&apos;ll text you when
        your order is on its way.
      </p>

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          padding: 0.625rem 0.875rem;
          background: #fffdf9;
          border: 1px solid #e2d5be;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          color: #2c1810;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        :global(.form-input:focus) {
          outline: none;
          border-color: #c9a961;
          box-shadow: 0 0 0 3px rgba(201, 169, 97, 0.15);
        }
        :global(.form-input::placeholder) {
          color: #b09a85;
        }
      `}</style>
    </form>
  );
}

function Field({
  icon,
  label,
  error,
  children,
}: {
  icon?: React.ReactNode;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      {label && (
        <span className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1.5">
          {icon}
          {label}
        </span>
      )}
      {children}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </label>
  );
}
