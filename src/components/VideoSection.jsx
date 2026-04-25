import { vsl } from '../data/content.js'
import SectionHeader from './SectionHeader.jsx'
import { CornerFlourish } from './Ornament.jsx'

/**
 * VSL — Vídeo de boas-vindas da fac.
 * Embed do YouTube dentro de uma moldura ornamentada.
 */
export default function VideoSection() {
  return (
    <section id="video" className="py-20 scroll-mt-16">
      <SectionHeader
        eyebrow="Antes de qualquer coisa"
        title={vsl.title}
        subtitle={vsl.subtitle}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Moldura ornamentada */}
        <div className="relative card-ornate p-3 md:p-4 shadow-brass-lg">
          <CornerFlourish />
          <div className="relative aspect-video overflow-hidden bg-coal-900">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${vsl.youtubeId}?rel=0&modestbranding=1`}
              title="Vídeo de boas-vindas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Legenda abaixo do vídeo */}
        <p className="mt-6 text-center text-sm text-parchment-300 italic font-serif">
          “Assiste com atenção — tudo que você precisa saber começa aqui.”
        </p>
      </div>
    </section>
  )
}
