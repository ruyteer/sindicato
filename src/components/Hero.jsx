import { faction } from '../data/content.js'
import { DividerOrnament, FlatCap } from './Ornament.jsx'

export default function Hero() {
  return (
    <section id="inicio" className="relative py-24 md:py-32 text-center">
      {/* Gradiente decorativo atrás */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blood-700/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brass-500/5 blur-3xl" />
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        <FlatCap className="w-14 h-7 text-brass-400" />
      </div>

      <p className="text-xs tracking-[0.4em] text-brass-400 uppercase mb-4">
        {faction.tagline}
      </p>

      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-brass-200 tracking-wider uppercase">
        {faction.name}
      </h1>

      <DividerOrnament />

      <p className="max-w-2xl mx-auto text-lg md:text-xl text-parchment-200 font-serif italic leading-relaxed px-4">
        “{faction.welcome}”
      </p>

      <div className="mt-10 flex items-center justify-center gap-3">
        <a
          href="#hierarquia"
          className="stamp-brass hover:bg-brass-500/10 transition-colors cursor-pointer"
        >
          Explorar a família
        </a>
        <a
          href="#cargos"
          className="stamp hover:text-brass-300 text-parchment-300 border border-parchment-300/30 hover:border-brass-500/40 transition-colors cursor-pointer"
        >
          Ver cargos
        </a>
      </div>
    </section>
  )
}
