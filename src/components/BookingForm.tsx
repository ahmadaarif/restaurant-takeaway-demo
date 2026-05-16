"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Calendar,
  Clock,
  Users,
  User,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { UK_PHONE_REGEX } from "@/lib/order-utils";
import { cn } from "@/lib/utils";

const TIME_SLOTS_LUNCH = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
];

const TIME_SLOTS_DINNER = [
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
];

const PARTY_SIZES = [1, 2, 3, 4, 5, 6, 7, 8] as const;

const schema = z.object({
  date: z.string().min(1, "Please choose a date"),
  time: z.string().min(1, "Please pick a time"),
  partySize: z.coerce.number().min(1).max(20),
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(1, "Phone is required")
    .regex(UK_PHONE_REGEX, "Enter a valid UK number, e.g. 07700 900123"),
  email: z.string().email("Enter a valid email"),
  occasion: z.string().optional(),
  notes: z.string().max(280).optional(),
});

type FormData = z.infer<typeof schema>;

const OCCASIONS = [
  "Just dining",
  "Birthday",
  "Anniversary",
  "Family gathering",
  "Business",
  "Other",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState<FormData | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { partySize: 2 },
  });

  const selectedDate = watch("date");
  const selectedTime = watch("time");
  const selectedPartySize = watch("partySize");

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Determine if selected date is a Monday (closed)
  const isMondaySelected = selectedDate
    ? new Date(selectedDate).getDay() === 1
    : false;

  // Show lunch slots only on Fri/Sat/Sun
  const showLunch =
    selectedDate &&
    [0, 5, 6].includes(new Date(selectedDate).getDay());

  if (submitted) {
    return (
      <div className="bg-card border border-cream-dark rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 border-2 border-green-700 mb-5">
          <CheckCircle2 size={32} className="text-green-700" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-3">
          Booking Requested!
        </h2>
        <p className="text-ink-muted mb-8 max-w-md mx-auto">
          Thanks {submitted.name.split(" ")[0]} — we&apos;ve received your
          request. We&apos;ll text you on{" "}
          <span className="text-ink font-medium">{submitted.phone}</span> within
          30 minutes to confirm.
        </p>

        {/* Booking summary */}
        <div className="bg-cream-dark/40 rounded-xl p-6 text-left max-w-md mx-auto space-y-3 text-sm mb-8">
          <SummaryRow
            icon={<Calendar size={16} />}
            label="Date"
            value={new Date(submitted.date).toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          />
          <SummaryRow
            icon={<Clock size={16} />}
            label="Time"
            value={submitted.time}
          />
          <SummaryRow
            icon={<Users size={16} />}
            label="Party Size"
            value={`${submitted.partySize} ${submitted.partySize === 1 ? "guest" : "guests"}`}
          />
          {submitted.occasion && submitted.occasion !== "Just dining" && (
            <SummaryRow
              icon="✦"
              label="Occasion"
              value={submitted.occasion}
            />
          )}
          {submitted.notes && (
            <div className="pt-3 border-t border-cream-dark">
              <p className="text-xs text-ink-muted uppercase tracking-wider mb-1">
                Special Requests
              </p>
              <p className="text-sm text-ink italic">
                &ldquo;{submitted.notes}&rdquo;
              </p>
            </div>
          )}
        </div>

        <p className="text-xs text-ink-muted mb-6">
          A confirmation has been emailed to {submitted.email}. Bookings are
          held for 15 minutes past the reservation time.
        </p>

        <button
          onClick={() => {
            setSubmitted(null);
            reset();
          }}
          className="text-sm text-maroon hover:text-maroon-dark font-medium underline"
        >
          Make another booking
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Step 1: Date */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-maroon mb-3 flex items-center gap-2">
          <Calendar size={18} /> Choose a date
        </h3>
        <input
          {...register("date")}
          type="date"
          min={today}
          max={maxDate}
          className="form-input w-full md:w-auto"
        />
        {errors.date && (
          <p className="text-xs text-red-600 mt-1">{errors.date.message}</p>
        )}
        {isMondaySelected && (
          <p className="text-xs text-red-600 mt-2 bg-red-50 border border-red-200 rounded px-3 py-2">
            We&apos;re closed on Mondays. Please choose another day.
          </p>
        )}
      </div>

      {/* Step 2: Party Size */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-maroon mb-3 flex items-center gap-2">
          <Users size={18} /> Party size
        </h3>
        <div className="flex flex-wrap gap-2">
          {PARTY_SIZES.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setValue("partySize", size, { shouldValidate: true })}
              className={cn(
                "w-12 h-12 rounded-full border-2 font-heading font-bold transition-all",
                selectedPartySize === size
                  ? "border-maroon bg-maroon text-cream"
                  : "border-cream-dark bg-card text-ink hover:border-maroon/50"
              )}
            >
              {size}
            </button>
          ))}
        </div>
        <p className="text-xs text-ink-muted mt-2">
          Larger party? Call us on{" "}
          <a href="tel:+441612345678" className="text-maroon font-medium">
            0161 234 5678
          </a>
        </p>
        <input type="hidden" {...register("partySize")} />
      </div>

      {/* Step 3: Time */}
      {selectedDate && !isMondaySelected && (
        <div>
          <h3 className="font-heading text-lg font-semibold text-maroon mb-3 flex items-center gap-2">
            <Clock size={18} /> Pick a time
          </h3>

          {showLunch && (
            <div className="mb-5">
              <p className="text-xs uppercase tracking-wider text-ink-muted mb-2 font-semibold">
                Lunch
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {TIME_SLOTS_LUNCH.map((slot) => (
                  <TimeSlotButton
                    key={slot}
                    time={slot}
                    selected={selectedTime === slot}
                    onClick={() => setValue("time", slot, { shouldValidate: true })}
                  />
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="text-xs uppercase tracking-wider text-ink-muted mb-2 font-semibold">
              Dinner
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {TIME_SLOTS_DINNER.map((slot) => (
                <TimeSlotButton
                  key={slot}
                  time={slot}
                  selected={selectedTime === slot}
                  onClick={() => setValue("time", slot, { shouldValidate: true })}
                />
              ))}
            </div>
          </div>

          {errors.time && (
            <p className="text-xs text-red-600 mt-2">{errors.time.message}</p>
          )}
          <input type="hidden" {...register("time")} />
        </div>
      )}

      {/* Step 4: Contact */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-maroon mb-3">
          Your details
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
              type="tel"
              autoComplete="tel"
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
                type="email"
                autoComplete="email"
              />
            </Field>
          </div>
        </div>
      </div>

      {/* Step 5: Occasion + Notes */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-maroon mb-3">
          Anything else? <span className="text-ink-muted text-sm font-normal">(optional)</span>
        </h3>

        <div className="space-y-4">
          <Field label="Occasion">
            <select {...register("occasion")} className="form-input">
              {OCCASIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </Field>

          <Field icon={<MessageSquare size={16} />} label="Special requests">
            <textarea
              {...register("notes")}
              rows={3}
              placeholder="Allergies, accessibility needs, high chairs, window seat…"
              className="form-input resize-none"
            />
          </Field>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting || isMondaySelected}
        className="w-full bg-maroon text-cream py-4 rounded-full text-base font-semibold hover:bg-maroon-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending request…
          </>
        ) : (
          "Request Booking →"
        )}
      </button>

      <p className="text-xs text-ink-muted/70 text-center">
        Bookings are confirmed by text or email within 30 minutes during opening
        hours.
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

function TimeSlotButton({
  time,
  selected,
  onClick,
}: {
  time: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "py-2.5 rounded-lg text-sm font-medium border-2 transition-all",
        selected
          ? "border-maroon bg-maroon text-cream"
          : "border-cream-dark bg-card text-ink hover:border-maroon/50"
      )}
    >
      {time}
    </button>
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

function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-gold-dark mt-0.5 shrink-0">{icon}</span>
      <div className="flex-1 flex justify-between gap-3">
        <span className="text-ink-muted">{label}</span>
        <span className="text-ink font-medium text-right">{value}</span>
      </div>
    </div>
  );
}
