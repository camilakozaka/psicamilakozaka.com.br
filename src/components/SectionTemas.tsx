const temas = [
  { emoji: '💖 ', label: 'Autoestima e amor próprio', desc: '' },
  { emoji: '🤝', label: 'Comunicação, limtes e habilidades sociais', desc: ' ' },
  { emoji: '✍️', label: 'Autocobrança e perfeccionismo', desc: ' ' },
  { emoji: '🫂', label: 'Relacionamentos', desc: ' ' },
  { emoji: '😶‍🌫️', label: 'Timidez / Ansiedade social', desc: '' },
  { emoji: '🌀', label: 'Ansiedade e Transtornos de ansiedade', desc: '' },
  { emoji: '🌧', label: 'Depressão', desc: '' },
  { emoji: '🩹', label: 'Experiências traumáticas', desc: '' },
  { emoji: '👩🏻', label: 'Violência contra a mulher', desc: ' ' },
]

export default function SectionTemas() {
  return (
    <section id="temas" className="bg-[#40A5F2] py-16 sm:py-20">
      <div className="page-wrap px-4">
        <div className="rounded-[3rem] bg-[var(--sky-pale)] px-6 py-16 sm:rounded-[4rem] sm:px-12 sm:py-20">
        <div className="mb-14 text-center">
          <p className="island-kicker mb-4 text-[var(--sky-deep)]">minha experiência
          
          </p>
          <h2 className="display-title mx-auto max-w-2xl text-3xl font-medium leading-[1.1] text-[var(--ink)] sm:text-4xl lg:text-5xl">
            Temas presentes em minha jornada de estudos
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {temas.map(({ emoji, label, desc }, i) => (
            <div
              key={label}
              className="rise-in flex gap-4 rounded-2xl border border-[var(--sky-line)] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(64,165,242,0.1)]"
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
