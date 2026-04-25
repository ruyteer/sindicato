import { CornerFlourish } from './Ornament.jsx'

/**
 * Card simplificado da gerência — só título, nome e descrição curta.
 * Sem metas e sem premiações (ficam implícitos no livro da família).
 */
export default function ManagementCard({ role }) {
  return (
    <article className="relative card-ornate p-7 group hover:border-brass-500/50 transition-all h-full">
      <CornerFlourish />

      <p className="text-[10px] tracking-[0.3em] text-brass-500 uppercase mb-2">
        Gerência
      </p>
      <h3 className="font-display text-2xl text-brass-200 tracking-wide mb-1">
        {role.title}
      </h3>
      {role.placeholder && (
        <p className="text-xs text-parchment-400 italic font-serif mb-4">
          — {role.placeholder}
        </p>
      )}

      <div className="flex items-center gap-3 my-4">
        <span className="h-px w-8 bg-brass-500/40" />
        <span className="w-1 h-1 rotate-45 bg-brass-500/60" />
        <span className="h-px flex-1 bg-brass-500/10" />
      </div>

      <p className="text-sm text-parchment-200 leading-relaxed">
        {role.description}
      </p>
    </article>
  )
}
