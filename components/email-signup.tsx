"use client"

import { useState } from "react"

type Status = "idle" | "loading" | "submitted" | "error"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || status === "loading") return

    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      })

      if (res.ok) {
        setStatus("submitted")
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data.error ?? "Something went wrong. Please try again.")
        setStatus("error")
      }
    } catch {
      setErrorMsg("Network error. Please try again.")
      setStatus("error")
    }
  }

  if (status === "submitted") {
    return (
      <p className="text-white/50 text-base font-light">
        You&apos;re in. We&apos;ll be in touch.
      </p>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className="
            flex-1 bg-white/[0.06] border border-white/[0.12] rounded
            px-4 py-3 text-white placeholder:text-white/25
            focus:outline-none focus:border-white/30
            transition-colors text-sm font-light
            disabled:opacity-50
          "
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="
            px-7 py-3 bg-white text-[#0A0A12] rounded
            text-[11px] font-medium tracking-[0.18em] uppercase
            hover:bg-white/90 transition-colors
            disabled:opacity-60 disabled:cursor-not-allowed
          "
        >
          {status === "loading" ? "…" : "Join"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-400/80 font-light">{errorMsg}</p>
      )}
    </div>
  )
}
