import { events } from '../data/content.js'
import SectionHeader from './SectionHeader.jsx'
import { CornerFlourish } from './Ornament.jsx'

/**
 * Seção de eventos — explica que a fac se reúne todo dia às 19h.
 */
export default function EventsSection() {
  return (
    <section id="eventos" className="py-20 scroll-mt-16">
      <SectionHeader
        eyebrow={events.tagline}
        title={events.title}
        subtitle="Aqui a rotina nunca é igual."
      />

      <div className="relative card-ornate p-8 md:p-12 max-w-4xl mx-auto">
        <CornerFlourish />

        <p className="text-lg md:text-xl text-parchment-100 leading-relaxed font-serif text-center">
          {events.description}
        </p>

        {/* Highlights */}
        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          {events.highlights.map((h) => (
            <div
              key={h.label}
              className="text-center border border-brass-500/20 bg-coal-900/40 p-5"
            >
              <p className="font-display text-2xl text-brass-300 tracking-wide">
                {h.time}
              </p>
              <p className="mt-2 text-xs tracking-[0.2em] text-parchment-200 uppercase">
                {h.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
