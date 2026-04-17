const temas = [
  { emoji: '🌀', label: 'Ansiedade', desc: 'Padrões de pensamento, ruminação e medo antecipatório.' },
  { emoji: '🌧', label: 'Depressão', desc: 'Tristeza profunda, perda de sentido e desmotivação.' },
  { emoji: '🤝', label: 'Relacionamentos', desc: 'Vínculos, comunicação, limites e apego.' },
  { emoji: '🪞', label: 'Autoestima', desc: 'Crenças limitantes, autocrítica e autoimagem.' },
  { emoji: '🔄', label: 'TOC e Fobias', desc: 'Pensamentos intrusivos, rituais e medos específicos.' },
  { emoji: '🧭', label: 'Autoconhecimento', desc: 'Identidade, valores e propósito de vida.' },
]

export default function SectionTemas() {
  return (
    <section id="temas" className="bg-white py-16 sm:py-20">
      <div className="page-wrap px-4">
        <div className="rounded-[3rem] bg-[var(--sky-pale)] px-6 py-16 sm:rounded-[4rem] sm:px-12 sm:py-20">
        <div className="mb-14 text-center">
          <p className="island-kicker mb-4 text-[var(--sky-deep)]">O que me move</p>
          <h2 className="display-title mx-auto max-w-2xl text-3xl font-medium leading-[1.1] text-[var(--ink)] sm:text-4xl lg:text-5xl">
            Temas que marcaram minha jornada
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {temas.map(({ emoji, label, desc }, i) => (
            <div
              key={label}
              className="rise-in flex gap-4 rounded-2xl border border-[var(--sky-line)] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(46,157,228,0.1)]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="text-2xl leading-none">{emoji}</span>
              <div>
                <p className="mb-1 font-bold text-[var(--ink)]">{label}</p>
                <p className="m-0 text-sm leading-6 text-[var(--ink-soft)]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
