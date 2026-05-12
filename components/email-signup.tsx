"use client"

import { useState } from "react"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "submitted">("idle")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    // TODO: wire up to email service (Resend, Mailchimp, etc.)
    setStatus("submitted")
  }

  if (status === "submitted") {
    return (
      <p className="text-white/50 text-base font-light">
        You&apos;re in. We&apos;ll be in touch.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="
          flex-1 bg-white/[0.06] border border-white/[0.12] rounded
          px-4 py-3 text-white placeholder:text-white/25
          focus:outline-none focus:border-white/30
          transition-colors text-sm font-light
        "
      />
      <button
        type="submit"
        className="
          px-7 py-3 bg-white text-[#0A0A12] rounded
          text-[11px] font-medium tracking-[0.18em] uppercase
          hover:bg-white/90 transition-colors
        "
      >
        Join
      </button>
    </form>
  )
}
