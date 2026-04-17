import ImagePlaceholder from './ImagePlaceholder'

const valores = [
  {
    label: 'Escuta ativa',
    desc: 'Presença total em cada sessão. Sem julgamentos, sem pressa — só o que você traz.',
  },
  {
    label: 'Evidência científica',
    desc: 'Técnicas com respaldo em pesquisa, adaptadas à sua realidade e ao seu ritmo.',
  },
  {
    label: 'Vínculo de confiança',
    desc: 'A relação terapêutica é o coração do processo. Construímos isso juntos, com cuidado.',
  },
]

export default function SectionValores() {
  return (
    <section id="valores" className="bg-white pb-8 pt-0">
      <div className="page-wrap px-4">
        <div className="rounded-b-[3rem] bg-[var(--sky-pale)] px-6 pb-16 pt-4 sm:rounded-b-[5rem] sm:px-12 sm:pb-20">
          {/* Arched image row */}
          <div className="mb-10 grid gap-6 sm:grid-cols-3">
            {valores.map(({ label }, i) => (
              <ImagePlaceholder
                key={label}
                label={label}
                rounded="arch"
                className={`aspect-[3/4] w-full rise-in ${i === 1 ? 'sm:mt-8' : ''}`}
              />
            ))}
          </div>

          {/* Cards row */}
          <div className="grid gap-6 sm:grid-cols-3">
            {valores.map(({ label, desc }, i) => (
              <div
                key={label}
                className="rise-in flex flex-col rounded-2xl border border-[var(--sky-line)] bg-white p-6 text-center shadow-[0_8px_24px_rgba(46,157,228,0.08)]"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <p className="island-kicker mb-3 text-[var(--sky-deep)]">{label}</p>
                <p className="mb-6 flex-1 text-sm leading-6 text-[var(--ink-soft)]">{desc}</p>
                <a
                  href="#contato"
                  className="mx-auto inline-block rounded-full bg-[var(--sky-deep)] px-6 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[var(--sky)]"
                >
                  Saber mais
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
