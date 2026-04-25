import { CornerFlourish } from './Ornament.jsx'

/**
 * Card genérico pra gerentes e cargos.
 * Exibe título, descrição, metas e premiações.
 */
export default function RoleCard({ role, showPlaceholder = false }) {
  return (
    <article className="relative card-ornate p-7 group hover:border-brass-500/50 transition-all h-full flex flex-col">
      <CornerFlourish />

      {/* Cabeçalho */}
      <div className="mb-5 pb-5 border-b border-brass-500/15">
        <h3 className="font-display text-2xl text-brass-200 tracking-wide mb-1">
          {role.title}
        </h3>
        {showPlaceholder && role.placeholder && (
          <p className="text-xs text-parchment-400 italic font-serif">
            — {role.placeholder}
          </p>
        )}
        {role.description && (
          <p className="mt-3 text-sm text-parchment-200 leading-relaxed">
            {role.description}
          </p>
        )}
      </div>

      {/* Metas */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="stamp-brass">Meta</span>
        </div>
        <ul className="space-y-2">
          {role.goals.map((goal) => (
            <li key={goal} className="flex gap-2 text-sm text-parchment-100">
              <span className="text-brass-400 shrink-0 mt-1">▸</span>
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Premiações */}
      <div className="mt-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="stamp-blood">Premiação</span>
        </div>
        <ul className="space-y-2">
          {role.rewards.map((reward) => (
            <li
              key={reward}
              className="flex gap-2 text-sm text-parchment-100 bg-blood-700/10 border border-blood-500/20 px-3 py-2"
            >
              <span className="text-blood-400 shrink-0 mt-0.5">♦</span>
              <span>{reward}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
