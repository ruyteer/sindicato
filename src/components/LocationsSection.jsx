import { useState } from 'react'
import { locations } from '../data/content.js'
import SectionHeader from './SectionHeader.jsx'
import { CornerFlourish } from './Ornament.jsx'

/**
 * Locais importantes da fac — P1 e Quadra de Farm.
 * Layout texto + imagem alternado (texto à esquerda/direita pra ter ritmo visual).
 */
export default function LocationsSection() {
  return (
    <section id="locais" className="py-20 scroll-mt-16">
      <SectionHeader
        eyebrow="O território"
        title="Locais da família"
        subtitle="Saiba onde a gente se reúne e onde o trabalho acontece."
      />

      <div className="space-y-10">
        {locations.map((loc, idx) => (
          <LocationRow key={loc.id} location={loc} reverse={idx % 2 === 1} />
        ))}
      </div>
    </section>
  )
}

function LocationRow({ location, reverse }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article
      className={`relative card-ornate p-6 md:p-8 grid md:grid-cols-2 gap-6 md:gap-10 items-center ${
        reverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <CornerFlourish />

      {/* Texto */}
      <div>
        <p className="text-[10px] tracking-[0.35em] text-brass-500 uppercase mb-2">
          {location.tagline}
        </p>
        <h3 className="font-display text-3xl text-brass-200 tracking-wide mb-4">
          {location.name}
        </h3>
        <p className="text-parchment-200 leading-relaxed">
          {location.description}
        </p>
      </div>

      {/* Imagem */}
      <div className="relative aspect-video overflow-hidden border border-brass-500/30 bg-coal-900">
        {!imgError ? (
          <img
            src={location.image}
            alt={location.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-parchment-400 text-center p-4">
            <svg
              viewBox="0 0 24 24"
              className="w-10 h-10 text-brass-500/40 mb-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="5" width="18" height="14" rx="1" />
              <circle cx="9" cy="11" r="2" />
              <path d="M3 17l5-5 4 4 3-3 6 6" />
            </svg>
            <p className="text-xs italic font-serif">
              Coloque sua imagem em
            </p>
            <code className="text-[10px] text-brass-400 mt-1">
              public{location.image}
            </code>
          </div>
        )}
        {/* Gradiente pra dar clima */}
        <div className="absolute inset-0 bg-gradient-to-t from-coal-900/60 via-transparent to-transparent pointer-events-none" />
      </div>
    </article>
  )
}
