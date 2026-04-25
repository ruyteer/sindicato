import { rules } from '../data/content.js'
import SectionHeader from './SectionHeader.jsx'

/**
 * Regras gerais da fac — lista numerada estilo decreto.
 */
export default function RulesSection() {
  return (
    <section id="regras" className="py-20 scroll-mt-16">
      <SectionHeader
        eyebrow="Os mandamentos"
        title="Regras gerais"
        subtitle="Quem carrega o nome da família, carrega essas regras junto."
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {rules.map((rule, idx) => (
          <article
            key={rule.id}
            className="relative card-ornate p-6 md:p-7 flex gap-5 md:gap-7 items-start hover:border-brass-500/50 transition-all"
          >
            {/* Número da regra */}
            <div className="shrink-0">
              <div className="w-12 h-12 border border-brass-500/40 bg-coal-900/60 flex items-center justify-center">
                <span className="font-display text-xl text-brass-300 font-bold">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg md:text-xl text-parchment-100 tracking-wide mb-2">
                {rule.title}
              </h3>
              <p className="text-sm md:text-base text-parchment-200 leading-relaxed">
                {rule.text}
              </p>
            </div>
          </article>
        ))}

        {/* Selo final */}
        <div className="text-center pt-6">
          <span className="stamp-blood">By order of the Peaky Blinders</span>
        </div>
      </div>
    </section>
  )
}
