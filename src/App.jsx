import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import VideoSection from './components/VideoSection.jsx'
import Hierarchy from './components/Hierarchy.jsx'
import SectionHeader from './components/SectionHeader.jsx'
import LeadershipCard from './components/LeadershipCard.jsx'
import ManagementCard from './components/ManagementCard.jsx'
import RoleCard from './components/RoleCard.jsx'
import LocationsSection from './components/LocationsSection.jsx'
import EventsSection from './components/EventsSection.jsx'
import RulesSection from './components/RulesSection.jsx'
import NewcomerGuide from './components/NewcomerGuide.jsx'
import { leadership, management, roles } from './data/content.js'

export default function App() {
  return (
    <div className="min-h-screen">
      <Sidebar />

      {/* Conteúdo principal */}
      <main className="lg:ml-72 px-6 md:px-12 lg:px-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <Hero />
          <VideoSection />
          <Hierarchy />

          {/* Liderança (Zeros) — foto + nome */}
          <section id="lideranca" className="py-20 scroll-mt-16">
            <SectionHeader
              eyebrow="Os Zeros"
              title="Liderança"
              subtitle="Quem segura a ponta da família. Acima das cobranças, abaixo de ninguém."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((member) => (
                <LeadershipCard key={member.id} member={member} />
              ))}
            </div>
          </section>

          {/* Gerência — só descrição */}
          <section id="gerencia" className="py-20 scroll-mt-16">
            <SectionHeader
              eyebrow="A ponte"
              title="Gerência"
              subtitle="Executa a operação e garante que a roda gira todos os dias."
            />
            <div className="grid md:grid-cols-3 gap-6">
              {management.map((m) => (
                <ManagementCard key={m.id} role={m} />
              ))}
            </div>
          </section>

          {/* Cargos — mantém metas e premiações */}
          <section id="cargos" className="py-20 scroll-mt-16">
            <SectionHeader
              eyebrow="A base"
              title="Cargos"
              subtitle="O chão de fábrica da família. Onde o trabalho vira resultado."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((r) => (
                <RoleCard key={r.id} role={r} />
              ))}
            </div>
          </section>

          {/* Dia a dia */}
          <LocationsSection />
          <EventsSection />
          <RulesSection />

          {/* Guia do novato — carta da família */}
          <NewcomerGuide />

          {/* Rodapé */}
          <footer className="pt-16 pb-4 text-center text-xs text-parchment-400 tracking-[0.2em] uppercase">
            <p className="mb-2">“No fucking fighting” — Peaky Blinders</p>
            <p className="text-brass-500/60">
              Livro da Família · Documento interno
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}
