"use client"

interface NavProps {
  onJoinClick: () => void
}

export function Nav({ onJoinClick }: NavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="px-6 sm:px-12 lg:px-16 py-5 flex items-center justify-between">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.35em] uppercase text-white/40 select-none">
          re-open.us
        </span>
        <button
          onClick={onJoinClick}
          className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/40 hover:text-white/80 transition-colors duration-200"
        >
          Join
        </button>
      </div>
    </nav>
  )
}
