export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="mb-12 text-center">
      {eyebrow && (
        <p className="text-[10px] tracking-[0.35em] text-brass-500 uppercase mb-3 font-semibold">
          {eyebrow}
        </p>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle mt-3 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="flex items-center justify-center gap-3 mt-5">
        <span className="h-px w-12 bg-brass-500/50" />
        <span className="w-1.5 h-1.5 rotate-45 bg-brass-500" />
        <span className="h-px w-12 bg-brass-500/50" />
      </div>
    </header>
  )
}
