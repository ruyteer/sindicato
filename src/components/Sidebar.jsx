import { useEffect, useState } from 'react'
import { navSections, faction } from '../data/content.js'
import { FlatCap } from './Ornament.jsx'

export default function Sidebar() {
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const ids = navSections.flatMap((s) => s.items.map((i) => i.id))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="hidden lg:flex flex-col fixed top-0 left-0 w-72 h-screen border-r border-brass-500/15 bg-coal-900/80 backdrop-blur-md z-20">
      {/* Brasão topo */}
      <div className="px-6 pt-8 pb-6 border-b border-brass-500/15">
        <div className="flex items-center gap-3 mb-2">
          <FlatCap className="w-10 h-5 text-brass-400" />
          <span className="text-[10px] tracking-[0.3em] text-brass-400 font-semibold uppercase">
            By order of the
          </span>
        </div>
        <h1 className="font-display text-2xl text-brass-200 leading-tight tracking-wider">
          {faction.name}
        </h1>
        <p className="mt-1 text-xs text-parchment-400 italic font-serif">
          Livro da Família
        </p>
      </div>

      {/* Navegação */}
      <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {navSections.map((section) => (
          <div key={section.heading}>
            <p className="text-[10px] tracking-[0.25em] text-brass-500/70 font-semibold uppercase mb-2 px-3">
              {section.heading}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${active === item.id ? 'nav-link-active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Rodapé */}
      <div className="px-6 py-4 border-t border-brass-500/15 text-[10px] text-parchment-400 tracking-wider uppercase">
        Documento interno — v0.1
      </div>
    </aside>
  )
}
