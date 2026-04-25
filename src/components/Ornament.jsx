// Pequenos ornamentos SVG estilo Art Déco / Peaky Blinders

export function DividerOrnament({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-4 my-10 ${className}`}>
      <span className="flex-1 h-px bg-gradient-to-r from-transparent via-brass-500/50 to-brass-500/50" />
      <svg viewBox="0 0 40 20" className="w-10 h-5 text-brass-500/80" fill="currentColor">
        <path d="M20 0 L24 8 L32 10 L24 12 L20 20 L16 12 L8 10 L16 8 Z" />
      </svg>
      <span className="flex-1 h-px bg-gradient-to-l from-transparent via-brass-500/50 to-brass-500/50" />
    </div>
  )
}

export function CornerFlourish() {
  return (
    <>
      <span className="absolute top-0 left-0 w-5 h-5 border-t border-l border-brass-500/60" />
      <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-brass-500/60" />
      <span className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-brass-500/60" />
      <span className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-brass-500/60" />
    </>
  )
}

export function FlatCap({ className = '' }) {
  // Silhueta simplificada de um flat cap (boina)
  return (
    <svg viewBox="0 0 80 40" className={className} fill="currentColor">
      <path d="M8 30 Q 10 18 28 14 Q 44 10 60 14 Q 70 17 74 22 L 72 28 Q 68 30 60 30 L 20 30 Q 12 30 8 30 Z" />
      <rect x="8" y="30" width="66" height="3" rx="1" />
    </svg>
  )
}

export function RazorIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12 L21 12" />
      <path d="M3 12 L6 9 L21 9 L21 12" />
      <circle cx="4" cy="12" r="1" fill="currentColor" />
    </svg>
  )
}
