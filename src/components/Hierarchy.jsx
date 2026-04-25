import SectionHeader from './SectionHeader.jsx'

/**
 * Visão rápida da pirâmide hierárquica.
 * Ajuda o leitor a entender a estrutura antes de mergulhar em cada cargo.
 */
export default function Hierarchy() {
  const tiers = [
    { label: 'Liderança', entries: ['00', '01', '02', '03'], accent: 'blood' },
    { label: 'Gerência', entries: ['Gerente Geral', 'Farm', 'Recrutamento'], accent: 'brass' },
    { label: 'Operação', entries: ['Supervisor', 'Recrutador', 'Membro'], accent: 'parchment' },
  ]

  const accentFor = (accent) => {
    if (accent === 'blood') return 'border-blood-500/40 text-blood-400'
    if (accent === 'brass') return 'border-brass-500/40 text-brass-300'
    return 'border-parchment-300/30 text-parchment-200'
  }

  return (
    <section id="hierarquia" className="py-20 scroll-mt-16">
      <SectionHeader
        eyebrow="A estrutura"
        title="A hierarquia"
        subtitle="Cada cargo tem sua função. Cada função sustenta a família."
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {tiers.map((tier) => (
          <div
            key={tier.label}
            className="relative card-ornate p-5 flex items-center gap-6"
          >
            <div className="w-24 shrink-0 text-right">
              <p className="text-[10px] tracking-[0.3em] text-brass-500 uppercase">
                Nível
              </p>
              <p className="font-display text-xl text-parchment-100">{tier.label}</p>
            </div>
            <div className="h-12 w-px bg-brass-500/20" />
            <div className="flex flex-wrap gap-2">
              {tier.entries.map((entry) => (
                <span
                  key={entry}
                  className={`px-3 py-1 text-xs tracking-[0.15em] uppercase border ${accentFor(tier.accent)}`}
                >
                  {entry}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
