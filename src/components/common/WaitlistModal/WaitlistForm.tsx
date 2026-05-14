import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/common/Button";
import { UiverseLoader } from "@/components/common/Loader";

interface WaitlistFormProps {
  onSuccess?: () => void;
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Individual");
  const [city, setCity] = useState("");
  const [comments, setComments] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loadTime] = useState(Date.now());

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [mathAnswer, setMathAnswer] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isHumanVerified = mathAnswer !== "" && parseInt(mathAnswer, 10) === num1 + num2;

  useEffect(() => {
    const now = new Date();
    const n1 = (now.getMinutes() % 9) + 1;
    const n2 = (now.getSeconds() % 9) + 1;
    setNum1(n1);
    setNum2(n2);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
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
          ctx.strokeStyle = `rgba(0, 0, 0, ${0.1 + Math.random() * 0.15})`;
          ctx.lineWidth = 1 + Math.random() * 1.5;
          ctx.stroke();
        }
      }
    }
  }, []);

  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd_Gd_OmWQGHLY_gF_q3Xuj9kATD3cEXkjaym5pQFN7JyjSWw/formResponse";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot || Date.now() - loadTime < 3000) {
      setIsSubmitting(true);
      setTimeout(() => { setIsSubmitting(false); setSubmitted(true); onSuccess?.(); }, 1200);
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();
    data.append("entry.1983186495", finalRole);
    data.append("entry.177738397",  name);
    data.append("entry.1945336821", email);
    data.append("entry.764661147",  phone);
    data.append("entry.1761616143", city);
    data.append("entry.838799959",  comments);

    try {
      await fetch(FORM_URL, { method: "POST", mode: "no-cors", body: data });
    } catch {
      // no-cors means we can't read the response — failure is silent by design
    }

    setIsSubmitting(false);
    setSubmitted(true);
    onSuccess?.();
  };

  const finalRole = role === "Clinic" ? "Clinic / Practice Owner" : role;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 className="w-16 h-16 text-pine-500 mb-6" />
        <h2 className="text-2xl font-bold text-pine-900 mb-3 tracking-tight">You're on the list.</h2>
        <p className="text-stone-600 leading-relaxed font-medium max-w-sm">
          Thank you for your interest in Fettlemed. We will be in touch shortly with next steps.
        </p>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <input type="hidden" name="entry.1983186495" value={finalRole} />
        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
          <input type="text" name="b_name" tabIndex={-1} value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </div>

        <div className="flex flex-col space-y-3 pb-2">
          <label className="text-sm font-semibold text-stone-700">I am a:</label>
          <div className="grid grid-cols-3 gap-3">
            {["Individual", "Doctor", "Clinic"].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`py-3 px-2 rounded-xl border text-sm font-bold transition-all ${
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

        <div className="flex flex-col space-y-2">
          <label htmlFor="wl-name" className="text-sm font-semibold text-stone-700">Full Name</label>
          <input name="entry.177738397" required type="text" id="wl-name" value={name} onChange={(e) => setName(e.target.value)} className="w-full h-12 px-4 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-pine-500 transition-all text-pine-900 placeholder:text-stone-400" />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="wl-email" className="text-sm font-semibold text-stone-700">Email Address</label>
          <input name="entry.1945336821" required type="email" id="wl-email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-12 px-4 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-pine-500 transition-all text-pine-900 placeholder:text-stone-400" />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="wl-phone" className="text-sm font-semibold text-stone-700">Phone Number (optional)</label>
          <input name="entry.764661147" type="tel" id="wl-phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full h-12 px-4 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-pine-500 transition-all text-pine-900 placeholder:text-stone-400" />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="wl-city" className="text-sm font-semibold text-stone-700">
            {role === "Individual" && "City / Age (optional)"}
            {role === "Doctor" && "Specialty Field (optional)"}
            {role === "Clinic" && "Clinic Name & Size (optional)"}
          </label>
          <input name="entry.1761616143" type="text" id="wl-city" value={city} onChange={(e) => setCity(e.target.value)} className="w-full h-12 px-4 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-pine-500 transition-all text-pine-900 placeholder:text-stone-400" />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="wl-comments" className="text-sm font-semibold text-stone-700">Comments / Questions (optional)</label>
          <textarea name="entry.838799959" id="wl-comments" rows={3} value={comments} onChange={(e) => setComments(e.target.value)} className="w-full p-4 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-pine-500 transition-all text-pine-900 placeholder:text-stone-400 resize-none" />
        </div>

        <div className="flex flex-col space-y-4 pt-4 border-t border-stone-200">
          <div>
            <label className="text-sm font-semibold text-stone-700 mb-1 block">Human Verification</label>
            <p className="text-xs text-stone-500 mb-3">Please solve the math problem below to submit.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="rounded-xl border border-stone-200 overflow-hidden shadow-sm inline-block">
              <canvas ref={canvasRef} width={300} height={96} style={{ width: "150px", height: "48px" }} className="bg-stone-50 mix-blend-multiply" title="Math challenge" />
            </div>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              id="wl-math"
              placeholder="Your answer"
              value={mathAnswer}
              onChange={(e) => setMathAnswer(e.target.value.replace(/[^0-9]/g, ""))}
              className={`w-full sm:w-32 h-12 px-4 rounded-xl border ${isHumanVerified ? "border-green-500 ring-2 ring-green-500/20 bg-green-50" : "border-stone-300 focus:ring-pine-500 focus:border-pine-500"} focus:outline-none focus:ring-2 transition-all text-pine-900 placeholder:text-stone-400 font-medium`}
            />
            {isHumanVerified && <span className="text-green-600 font-bold text-sm flex items-center">Verified! ✓</span>}
          </div>
        </div>

        <Button variant="animated" disabled={isSubmitting || !isHumanVerified} type="submit" size="lg" className="w-full h-14 text-lg bg-accent-600 hover:bg-accent-700 text-white rounded-xl shadow-lg shadow-accent-600/20 font-bold disabled:opacity-70 disabled:cursor-not-allowed transition-all">
          {isSubmitting ? <UiverseLoader /> : "Request Access"}
        </Button>
      </form>
    </>
  );
}
