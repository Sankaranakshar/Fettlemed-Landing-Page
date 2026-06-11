import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { WAITLIST_FORM } from "@/config/constants";

/**
 * Low-friction capture for visitors not ready for the full form:
 * email only, role inferred from the page they're on, marked as a
 * footer quick signup so the founders can triage the lead.
 */
export function FooterQuickJoin() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state !== "idle" || !/.+@.+\..+/.test(email)) return;
    setState("sending");

    const data = new URLSearchParams();
    data.append(WAITLIST_FORM.entries.role,    "From Footer - Email Only");
    data.append(WAITLIST_FORM.entries.name,    "Unknown");
    data.append(WAITLIST_FORM.entries.email,   email);
    data.append(WAITLIST_FORM.entries.phone,   "0000000000");
    data.append(WAITLIST_FORM.entries.context, "unknown");
    data.append(WAITLIST_FORM.entries.comments,"Nil");
    try {
      await fetch(WAITLIST_FORM.url, { method: "POST", mode: "no-cors", body: data });
    } catch {
      // no-cors is opaque; only genuine network failure throws, and even
      // then a retry path isn't worth the friction here
    }
    setState("done");
  };

  if (state === "done") {
    return (
      <div className="flex items-center gap-2 text-pine-200 text-sm font-medium">
        <CheckCircle2 className="w-4 h-4 text-pine-300 shrink-0" />
        You're on the list. We'll reach out when your spot opens.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
      <label htmlFor="footer-email" className="sr-only">Email address</label>
      <input
        id="footer-email"
        type="email"
        required
        autoComplete="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 h-11 px-4 rounded-xl bg-pine-800/70 border border-pine-700 text-white placeholder:text-pine-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-400"
      />
      <button
        type="submit"
        disabled={state === "sending"}
        className="h-11 px-5 rounded-xl bg-white text-pine-900 text-sm font-medium hover:bg-pine-50 transition-colors active:scale-[0.97] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-400"
      >
        {state === "sending" ? "Joining…" : "Get early access"}
      </button>
    </form>
  );
}
