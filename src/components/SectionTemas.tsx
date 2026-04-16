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
    <section id="temas" className="py-20 sm:py-24">
      <div className="page-wrap px-4">
        <span className="accent-line" />
        <p className="island-kicker mb-3">O que me move</p>
        <h2 className="display-title mb-4 text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          Temas que marcaram<br className="hidden sm:block" /> minha jornada
        </h2>
        <p className="mb-12 max-w-xl text-base leading-7 text-[var(--ink-soft)]">
          Esses temas aparecem com frequência no consultório — e cada um deles me faz crescer
          junto com quem os traz.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {temas.map(({ emoji, label, desc }, i) => (
            <div
              key={label}
              className="rise-in flex gap-4 rounded-2xl border border-[var(--line)] bg-[var(--white)] p-5 transition hover:border-[var(--sky-line)] hover:bg-[var(--sky-pale)]"
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
    </section>
  )
}
