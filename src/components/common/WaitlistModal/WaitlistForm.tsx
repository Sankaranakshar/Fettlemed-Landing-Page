import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/common/Button";
import { UiverseLoader } from "@/components/common/Loader";

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const schema = z.object({
  name:       z.string().min(2, "Name must be at least 2 characters"),
  email:      z.string().email("Please enter a valid email address"),
  phone:      z.string().optional(),
  context:    z.string().optional(), // city / specialty / clinic name — label changes per role
  comments:   z.string().optional(),
  mathAnswer: z.string().min(1, "Please solve the math problem"),
});

type FormValues = z.infer<typeof schema>;

// ---------------------------------------------------------------------------
// FloatingInput
// ---------------------------------------------------------------------------

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ id, label, error, className = "", ...props }, ref) => (
    <div className="relative">
      <input
        ref={ref}
        id={id}
        placeholder=" "
        {...props}
        className={[
          "peer w-full h-14 px-4 pt-5 pb-1 rounded-xl border bg-white text-pine-900",
          "text-sm transition-[border-color,box-shadow] duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-500 focus-visible:border-pine-500",
          error
            ? "border-red-400 focus-visible:ring-red-400 focus-visible:border-red-400"
            : "border-stone-300",
          className,
        ].join(" ")}
      />
      <label
        htmlFor={id}
        className={[
          "absolute left-4 top-1/2 -translate-y-1/2 text-sm pointer-events-none",
          "transition-[font-size,top,color] duration-150 origin-left",
          "peer-focus:top-3.5 peer-focus:text-[10px] peer-focus:font-semibold",
          "peer-not-placeholder-shown:top-3.5 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:font-semibold",
          error
            ? "text-red-400 peer-focus:text-red-400"
            : "text-stone-400 peer-focus:text-pine-600 peer-not-placeholder-shown:text-stone-500",
        ].join(" ")}
      >
        {label}
      </label>
      {error && <p className="mt-1.5 text-xs text-red-500 font-medium px-1">{error}</p>}
    </div>
  )
);
FloatingInput.displayName = "FloatingInput";

// ---------------------------------------------------------------------------
// FloatingTextarea
// ---------------------------------------------------------------------------

interface FloatingTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  error?: string;
}

const FloatingTextarea = React.forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
  ({ id, label, error, className = "", ...props }, ref) => (
    <div className="relative">
      <textarea
        ref={ref}
        id={id}
        placeholder=" "
        {...props}
        className={[
          "peer w-full px-4 pt-6 pb-2 rounded-xl border bg-white text-pine-900",
          "text-sm transition-[border-color,box-shadow] duration-150 resize-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-500 focus-visible:border-pine-500",
          error
            ? "border-red-400 focus-visible:ring-red-400 focus-visible:border-red-400"
            : "border-stone-300",
          className,
        ].join(" ")}
      />
      <label
        htmlFor={id}
        className={[
          "absolute left-4 top-4 text-sm pointer-events-none",
          "transition-[font-size,top,color] duration-150 origin-left",
          "peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-semibold",
          "peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:font-semibold",
          error
            ? "text-red-400 peer-focus:text-red-400"
            : "text-stone-400 peer-focus:text-pine-600 peer-not-placeholder-shown:text-stone-500",
        ].join(" ")}
      >
        {label}
      </label>
      {error && <p className="mt-1.5 text-xs text-red-500 font-medium px-1">{error}</p>}
    </div>
  )
);
FloatingTextarea.displayName = "FloatingTextarea";

// ---------------------------------------------------------------------------
// WaitlistForm
// ---------------------------------------------------------------------------

interface WaitlistFormProps {
  onSuccess?: () => void;
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [submitted, setSubmitted]   = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [role, setRole]             = useState("Individual");
  const [honeypot, setHoneypot]     = useState("");
  const [loadTime]                  = useState(Date.now());

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const mathAnswerValue = watch("mathAnswer", "");
  const isHumanVerified =
    mathAnswerValue !== "" && parseInt(mathAnswerValue, 10) === num1 + num2;

  useEffect(() => {
    const now = new Date();
    const n1 = (now.getMinutes() % 9) + 1;
    const n2 = (now.getSeconds() % 9) + 1;
    setNum1(n1);
    setNum2(n2);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.setTransform(2, 0, 0, 2, 0, 0);
    ctx.clearRect(0, 0, 150, 48);
    ctx.fillStyle = "#fafaf9";
    ctx.fillRect(0, 0, 150, 48);
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.05})`;
      ctx.beginPath();
      ctx.arc(Math.random() * 150, Math.random() * 48, Math.random() * 2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.font = "bold 24px monospace";
    ctx.fillStyle = "#292524";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(`${n1} + ${n2}`, 75, 24);
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * 150, Math.random() * 48);
      ctx.lineTo(Math.random() * 150, Math.random() * 48);
      ctx.strokeStyle = `rgba(0,0,0,${0.1 + Math.random() * 0.15})`;
      ctx.lineWidth = 1 + Math.random() * 1.5;
      ctx.stroke();
    }
  }, []);

  const FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSd_Gd_OmWQGHLY_gF_q3Xuj9kATD3cEXkjaym5pQFN7JyjSWw/formResponse";

  const finalRole = role === "Clinic" ? "Clinic / Practice Owner" : role;

  const contextLabel =
    role === "Doctor"
      ? "Specialty Field (optional)"
      : role === "Clinic"
      ? "Clinic Name & Size (optional)"
      : "City / Age (optional)";

  const onValid = async (values: FormValues) => {
    // Spam guard: honeypot filled or submitted too fast
    if (honeypot || Date.now() - loadTime < 3000) {
      setIsSubmitting(true);
      setTimeout(() => { setIsSubmitting(false); setSubmitted(true); onSuccess?.(); }, 1200);
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();
    data.append("entry.1983186495", finalRole);
    data.append("entry.177738397",  values.name);
    data.append("entry.1945336821", values.email);
    data.append("entry.764661147",  values.phone ?? "");
    data.append("entry.1761616143", values.context ?? "");
    data.append("entry.838799959",  values.comments ?? "");

    try {
      await fetch(FORM_URL, { method: "POST", mode: "no-cors", body: data });
    } catch {
      // no-cors — response is opaque by design
    }

    setIsSubmitting(false);
    setSubmitted(true);
    onSuccess?.();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 className="w-16 h-16 text-pine-500 mb-6" />
        <h2 className="text-2xl font-bold text-pine-900 mb-3 tracking-tight">
          You're on the list.
        </h2>
        <p className="text-stone-600 leading-relaxed font-medium max-w-sm">
          Thank you for your interest in Fettlemed. We will be in touch shortly with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onValid)} className="space-y-5" noValidate>
      {/* Honeypot — invisible to real users */}
      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
        <input
          type="text"
          name="b_name"
          tabIndex={-1}
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Role selector */}
      <div className="flex flex-col space-y-3 pb-1">
        <label className="text-sm font-semibold text-stone-700">I am a:</label>
        <div className="grid grid-cols-3 gap-3">
          {["Individual", "Doctor", "Clinic"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`py-3 px-2 rounded-xl border text-sm font-bold transition-[background-color,border-color,color,box-shadow] duration-150 ease-out active:scale-[0.97] ${
                role === r
                  ? "bg-pine-900 border-pine-900 text-white shadow-md"
                  : "bg-white border-stone-200 text-stone-600 hover:border-pine-300 hover:bg-stone-50"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Fields */}
      <FloatingInput
        id="wl-name"
        label="Full Name"
        type="text"
        autoComplete="name"
        error={errors.name?.message}
        {...register("name")}
      />
      <FloatingInput
        id="wl-email"
        label="Email Address"
        type="email"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />
      <FloatingInput
        id="wl-phone"
        label="Phone Number (optional)"
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        {...register("phone")}
      />
      <FloatingInput
        id="wl-context"
        label={contextLabel}
        type="text"
        {...register("context")}
      />
      <FloatingTextarea
        id="wl-comments"
        label="Comments / Questions (optional)"
        rows={3}
        {...register("comments")}
      />

      {/* Human verification */}
      <div className="flex flex-col space-y-4 pt-4 border-t border-stone-200">
        <div>
          <label className="text-sm font-semibold text-stone-700 mb-1 block">
            Human Verification
          </label>
          <p id="wl-math-desc" className="text-xs text-stone-500 mb-3">
            Please solve the math problem below to submit.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <div className="rounded-xl border border-stone-200 overflow-hidden shadow-sm inline-block">
            <canvas
              ref={canvasRef}
              width={300}
              height={96}
              style={{ width: "150px", height: "48px" }}
              className="bg-stone-50 mix-blend-multiply"
              role="img"
              aria-label="Math addition problem"
            />
          </div>
          <label htmlFor="wl-math" className="sr-only">
            Answer to the math problem shown above
          </label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            id="wl-math"
            aria-describedby="wl-math-desc"
            placeholder="Your answer"
            {...register("mathAnswer")}
            className={`w-full sm:w-32 h-12 px-4 rounded-xl border ${
              isHumanVerified
                ? "border-green-500 ring-2 ring-green-500/20 bg-green-50"
                : "border-stone-300 focus-visible:ring-pine-500 focus-visible:border-pine-500"
            } focus-visible:outline-none focus-visible:ring-2 transition-[border-color,box-shadow,background-color] duration-150 text-pine-900 placeholder:text-stone-400 font-medium`}
          />
          {isHumanVerified && (
            <span className="text-green-600 font-bold text-sm">Verified! ✓</span>
          )}
        </div>
        {errors.mathAnswer && (
          <p className="text-xs text-red-500 font-medium">{errors.mathAnswer.message}</p>
        )}
      </div>

      {/* Submit — loader overlays text so button width never shifts */}
      <Button
        variant="animated"
        disabled={isSubmitting || !isHumanVerified}
        type="submit"
        size="lg"
        className="relative w-full h-14 text-lg bg-accent-600 hover:bg-accent-700 text-white rounded-xl shadow-lg shadow-accent-600/20 font-bold disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span className={`transition-opacity duration-150 ${isSubmitting ? "opacity-0" : "opacity-100"}`}>
          Request Access
        </span>
        {isSubmitting && (
          <span className="absolute inset-0 flex items-center justify-center">
            <UiverseLoader />
          </span>
        )}
      </Button>
    </form>
  );
}
