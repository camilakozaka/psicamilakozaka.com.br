import ImagePlaceholder from './ImagePlaceholder'

const etapas = [
  { year: '2018–2023', title: 'Graduação em Psicologia', place: 'UFJF — Universidade Federal de Juiz de Fora' },
  { year: '2023–2024', title: 'Especialização em TCC', place: 'Instituto de TCC — Curitiba/PR' },
]

export default function SectionFormacao() {
  return (
    <section id="formacao" className="bg-white py-16 sm:py-20">
      <div className="page-wrap px-4">
        <div className="grid items-center gap-12 rounded-[3rem] bg-[var(--sky-pale)] px-6 py-16 sm:rounded-[4rem] sm:px-12 sm:py-20 lg:grid-cols-2">
          <ImagePlaceholder
            label="Formação"
            rounded="arch"
            className="aspect-[4/5] w-full max-w-[420px] mx-auto lg:mx-0"
          />

          <div>
            <p className="island-kicker mb-4 text-[var(--sky-deep)]">Trajetória</p>
            <h2 className="display-title mb-6 text-3xl font-medium leading-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">
              Formada pela UFJF
            </h2>
            <p className="mb-10 text-base leading-8 text-[var(--ink-soft)]">
              Minha formação em Psicologia pela Universidade Federal de Juiz de Fora me deu
              uma base sólida — científica, ética e humanista. A saúde mental é um direito, não privilégio.
            </p>

            <div className="space-y-4">
              {etapas.map(({ year, title, place }) => (
                <div
                  key={title}
                  className="flex gap-5 rounded-2xl border border-[var(--sky-line)] bg-white p-5"
                >
                  <div className="pt-0.5">
                    <span className="island-kicker text-[var(--ink-muted)]">{year}</span>
                  </div>
                  <div>
                    <p className="mb-0.5 font-bold text-[var(--ink)]">{title}</p>
                    <p className="m-0 text-sm text-[var(--ink-soft)]">{place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
