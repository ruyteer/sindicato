import { newcomerGuide } from '../data/content.js'
import SectionHeader from './SectionHeader.jsx'
import { CornerFlourish, DividerOrnament } from './Ornament.jsx'

/**
 * Guia do novato — apresentado como uma carta da família.
 * Editar o texto em src/data/content.js (export newcomerGuide).
 */
export default function NewcomerGuide() {
  return (
    <section id="novatos" className="py-20 scroll-mt-16">
      <SectionHeader
        eyebrow={newcomerGuide.eyebrow}
        title={newcomerGuide.title}
        subtitle={newcomerGuide.subtitle}
      />

      <div className="relative card-ornate p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
        <CornerFlourish />

        {/* Saudação */}
        <p className="font-display text-xl md:text-2xl text-brass-200 tracking-wide mb-6">
          {newcomerGuide.salutation}
        </p>

        {/* Abertura */}
        <p className="text-base md:text-lg text-parchment-100 leading-relaxed font-serif mb-8">
          {newcomerGuide.opening}
        </p>

        <DividerOrnament />

        {/* Seções da carta */}
        <div className="space-y-8">
          {newcomerGuide.sections.map((section) => (
            <article key={section.id}>
              <h3 className="font-display text-lg md:text-xl text-brass-300 tracking-wide mb-3 uppercase">
                {section.heading}
              </h3>
              <p className="text-sm md:text-base text-parchment-200 leading-relaxed font-serif">
                {section.text}
              </p>
            </article>
          ))}
        </div>

        <DividerOrnament />

        {/* Fechamento */}
        <p className="text-base md:text-lg text-parchment-100 leading-relaxed font-serif mb-6">
          {newcomerGuide.closing}
        </p>

        <p className="font-display text-xl md:text-2xl text-brass-200 tracking-wide text-center mb-8">
          {newcomerGuide.welcome}
        </p>

        {/* Assinatura */}
        <div className="flex flex-col items-center pt-4 border-t border-brass-500/20">
          <span className="text-[10px] tracking-[0.35em] text-parchment-400 uppercase mb-3">
            Assinado,
          </span>
          <span className="stamp-blood">{newcomerGuide.signature}</span>
        </div>
      </div>
    </section>
  )
}
