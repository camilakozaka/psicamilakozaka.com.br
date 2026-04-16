import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

const services = [
  {
    title: 'Ansiedade e Estresse',
    desc: 'Técnicas baseadas em evidências para identificar e reestruturar padrões de pensamento que alimentam a ansiedade.',
  },
  {
    title: 'Depressão',
    desc: 'Acompanhamento humanizado para superar períodos de tristeza profunda, desmotivação e baixa autoestima.',
  },
  {
    title: 'Relacionamentos',
    desc: 'Trabalho terapêutico para comunicação assertiva, limites saudáveis e vínculos mais seguros.',
  },
  {
    title: 'Autoconhecimento',
    desc: 'Espaço seguro para explorar crenças, valores e comportamentos que moldam quem você é.',
  },
]

function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        id="inicio"
        className="page-wrap px-4 pb-8 pt-14"
      >
        <div className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.28),transparent_66%)]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.16),transparent_66%)]" />

          <p className="island-kicker mb-3">Psicóloga Clínica · CRP 08/XXXXX</p>
          <h1 className="display-title mb-5 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-[var(--sea-ink)] sm:text-5xl lg:text-6xl">
            Um espaço seguro para cuidar da sua saúde mental.
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-[var(--sea-ink-soft)] sm:text-lg">
            Sou Camila Kozaka, psicóloga especialista em Terapia
            Cognitivo-Comportamental. Atendo adultos presencialmente e online,
            ajudando você a entender seus pensamentos e construir uma vida com
            mais equilíbrio.
          </p>
          <a
            href="#contato"
            className="inline-block rounded-full bg-[var(--lagoon-deep)] px-7 py-3 text-sm font-semibold text-white no-underline shadow-[0_4px_18px_rgba(50,143,151,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(50,143,151,0.45)]"
          >
            Agendar consulta
          </a>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="page-wrap px-4 pt-16">
        <div className="island-shell rounded-2xl p-6 sm:p-10">
          <p className="island-kicker mb-2">Sobre mim</p>
          <h2 className="display-title mb-4 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
            Conhecendo a Camila
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
            Graduada em Psicologia e especialista em Terapia
            Cognitivo-Comportamental (TCC), acredito que cada pessoa carrega
            recursos únicos para superar seus desafios. Minha abordagem é
            colaborativa, baseada em evidências científicas e adaptada à
            realidade de cada paciente. Atendo presencialmente em Curitiba/PR e
            online para todo o Brasil.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="page-wrap px-4 pt-12">
        <p className="island-kicker mb-2">Especialidades</p>
        <h2 className="display-title mb-6 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
          Como posso ajudar
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map(({ title, desc }, i) => (
            <article
              key={title}
              className="island-shell feature-card rise-in rounded-2xl p-6"
              style={{ animationDelay: `${i * 80 + 60}ms` }}
            >
              <h3 className="mb-2 text-base font-semibold text-[var(--sea-ink)]">
                {title}
              </h3>
              <p className="m-0 text-sm leading-6 text-[var(--sea-ink-soft)]">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="page-wrap px-4 pb-8 pt-12">
        <div className="island-shell rounded-2xl p-6 sm:p-10">
          <p className="island-kicker mb-2">Contato</p>
          <h2 className="display-title mb-3 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
            Vamos conversar?
          </h2>
          <p className="mb-6 max-w-lg text-base leading-7 text-[var(--sea-ink-soft)]">
            O primeiro passo é o mais importante. Entre em contato pelo WhatsApp
            e agende sua sessão inicial.
          </p>
          <a
            href="https://wa.me/5541999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-7 py-3 text-sm font-semibold text-white no-underline shadow-[0_4px_18px_rgba(37,211,102,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(37,211,102,0.4)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
