"use client"

import { useRef } from "react"
import { WavingFlag } from "@/components/waving-flag"
import { Nav } from "@/components/nav"
import { EmailSignup } from "@/components/email-signup"
import { ChevronDown } from "lucide-react"

const issues = [
  {
    title: "Healthcare",
    body: "The wealthiest nation in history leaves millions one diagnosis away from bankruptcy. Every other peer country solved this. We decided the problem was unsolvable.",
  },
  {
    title: "Housing",
    body: "A generation is being priced out of the cities their parents built. Zoning codes written for 1955 are quietly strangling 2025. We call it the market. It's a policy choice.",
  },
  {
    title: "Education",
    body: "We know more about how children learn than we ever have. Our schools largely ignore it. The gap between what the research says and what we practice is a form of negligence.",
  },
  {
    title: "Governance",
    body: "Congress hasn't passed a budget on time in decades. Infrastructure crumbles while money sits unspent. We've normalized institutional failure so completely we've stopped noticing it.",
  },
]

function Divider() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-12 lg:px-16">
      <div className="border-t border-white/[0.08]" />
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] sm:text-xs tracking-[0.35em] uppercase text-white/35 mb-8 sm:mb-10">
      {children}
    </p>
  )
}

export default function Home() {
  const problemRef = useRef<HTMLElement>(null)
  const joinRef = useRef<HTMLElement>(null)

  return (
    <div className="min-h-screen bg-[#0A0A12] text-white">
      <Nav onJoinClick={() => joinRef.current?.scrollIntoView({ behavior: "smooth" })} />

      {/* ─── Hero ─── */}
      <section className="relative h-screen overflow-hidden">
        <WavingFlag className="absolute inset-0 w-full h-full" />

        {/* Overlay: dark top/middle, fades to site bg at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 50%, #0A0A12 100%)",
          }}
        />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-[5.25rem] font-normal tracking-tight leading-[1.05] mb-8 text-white drop-shadow-2xl">
            America Can Be<br className="hidden sm:block" /> Better Than This.
          </h1>
          <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-xl">
            We&apos;ve accepted dysfunction as destiny.
            <br />
            We&apos;ve mistaken learned helplessness for wisdom.
          </p>

          <button
            onClick={() => problemRef.current?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Scroll to content"
            className="mt-14 self-start group focus:outline-none"
          >
            <ChevronDown className="w-7 h-7 text-white/30 group-hover:text-white/60 transition-colors animate-bounce" />
          </button>
        </div>
      </section>

      {/* ─── The Problem ─── */}
      <section ref={problemRef} className="py-28 sm:py-36 px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Label>The Problem</Label>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-12 text-white">
            We&apos;ve accepted dysfunction as destiny.
          </h2>
          <div className="space-y-6 text-base sm:text-lg text-white/55 leading-relaxed font-light">
            <p>
              Every generation of Americans inherited problems — and solved them. Child labor laws. Rural electrification. The interstate highway system. Social Security. None of it was inevitable. None of it happened because society was simple. It happened because people decided the status quo was unacceptable, and then did the work.
            </p>
            <p>
              Somewhere along the way, we stopped expecting our institutions to work. We started treating broken systems as permanent features rather than temporary failures. We developed a kind of learned helplessness about our collective capacity to change things.
            </p>
            <p>
              This is the soft bigotry of low expectations — applied not to any group of people, but to ourselves, to our institutions, and to our shared future.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ─── Where We've Given Up ─── */}
      <section className="py-28 sm:py-36 px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Label>Where We&apos;ve Given Up</Label>
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-14">
            {issues.map((issue) => (
              <div key={issue.title}>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white mb-4">
                  {issue.title}
                </h3>
                <p className="text-sm sm:text-base text-white/50 leading-relaxed font-light">
                  {issue.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ─── The Conviction ─── */}
      <section className="py-28 sm:py-36 px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Label>The Conviction</Label>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-12 text-white">
            Nothing about this is inevitable.
          </h2>
          <div className="space-y-6 text-base sm:text-lg text-white/55 leading-relaxed font-light">
            <p>
              Other countries — with less wealth, shorter histories, and far fewer resources — have built healthcare systems that don&apos;t bankrupt their citizens. Cities people can afford to live in. Schools that actually prepare children for the world. Governments that pass budgets.
            </p>
            <p>
              The knowledge exists. The money exists. What&apos;s been missing is the will to believe that trying is worth it.
            </p>
            <p>
              Re-Open is about rebuilding that belief. About refusing the low expectations we&apos;ve quietly set for ourselves. About looking at American society not as it is, but as it could be — and having the audacity to take that seriously.
            </p>
            <p>
              This country has opened before. It can open again.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ─── Join ─── */}
      <section ref={joinRef} className="py-28 sm:py-36 px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Label>Join the Conversation</Label>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-white mb-5">
            Be part of what comes next.
          </h2>
          <p className="text-base sm:text-lg text-white/50 leading-relaxed font-light mb-10 max-w-xl">
            We&apos;re building a community of people who believe American society is worth taking seriously — and who are willing to think hard about how to fix it.
          </p>
          <EmailSignup />
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-10 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/25 select-none">
            Re-Open.US
          </span>
          <span className="text-xs text-white/20 font-light">
            &copy; {new Date().getFullYear()} Re-Open
          </span>
        </div>
      </footer>
    </div>
  )
}
