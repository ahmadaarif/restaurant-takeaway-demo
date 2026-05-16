"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, User, Mail, Phone, MessageSquare } from "lucide-react";

const TOPICS = [
  "General enquiry",
  "Large group booking",
  "Private hire / events",
  "Catering",
  "Feedback",
  "Press",
  "Careers",
];

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  topic: z.string(),
  message: z.string().min(10, "A bit more detail please (at least 10 chars)"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState<FormData | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { topic: TOPICS[0] },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(data);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 border-2 border-green-700 mb-4">
          <CheckCircle2 size={26} className="text-green-700" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-maroon mb-2">
          Message sent!
        </h3>
        <p className="text-ink-muted text-sm mb-6 max-w-md mx-auto">
          Thanks {submitted.name.split(" ")[0]} — we&apos;ll come back to you at{" "}
          <span className="text-ink font-medium">{submitted.email}</span>{" "}
          within one working day.
        </p>
        <button
          onClick={() => {
            setSubmitted(null);
            reset();
          }}
          className="text-sm text-maroon hover:text-maroon-dark font-medium underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field icon={<User size={16} />} label="Name" error={errors.name?.message}>
          <input
            {...register("name")}
            placeholder="Jane Smith"
            className="form-input"
            autoComplete="name"
          />
        </Field>

        <Field icon={<Mail size={16} />} label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className="form-input"
            autoComplete="email"
          />
        </Field>
      </div>

      <Field
        icon={<Phone size={16} />}
        label="Phone (optional)"
        error={errors.phone?.message}
      >
        <input
          {...register("phone")}
          type="tel"
          placeholder="07700 900123"
          className="form-input"
          autoComplete="tel"
        />
      </Field>

      <Field label="What's this about?">
        <select {...register("topic")} className="form-input">
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field
        icon={<MessageSquare size={16} />}
        label="Message"
        error={errors.message?.message}
      >
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us a bit about what you need…"
          className="form-input resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-maroon text-cream py-3.5 rounded-full text-base font-semibold hover:bg-maroon-dark disabled:opacity-50 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        ) : (
          "Send Message →"
        )}
      </button>

      <p className="text-xs text-ink-muted/70 text-center">
        We aim to reply within one working day. For urgent matters, please
        call us directly.
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
      <span className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1.5">
        {icon}
        {label}
      </span>
      {children}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </label>
  );
}
