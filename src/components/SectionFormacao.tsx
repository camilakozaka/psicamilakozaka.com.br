export default function SectionFormacao() {
  return (
    <section id="formacao" className="section-alt py-20 sm:py-24">
      <div className="page-wrap px-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <span className="accent-line" />
            <p className="island-kicker mb-3">Trajetória acadêmica</p>
            <h2 className="display-title mb-6 text-4xl font-bold text-[var(--ink)] sm:text-5xl">
              Formada pela UFJF
            </h2>
            <p className="mb-8 max-w-xl text-base leading-8 text-[var(--ink-soft)]">
              Minha formação em Psicologia pela Universidade Federal de Juiz de Fora me deu
              uma base sólida — científica, ética e humanista. A universidade pública moldou
              minha visão de que a saúde mental é um direito, não um privilégio.
            </p>

            <div className="space-y-4">
              {[
                { year: '2018–2023', title: 'Graduação em Psicologia', place: 'UFJF — Universidade Federal de Juiz de Fora' },
                { year: '2023–2024', title: 'Especialização em TCC', place: 'Instituto de TCC — Curitiba/PR' },
              ].map(({ year, title, place }) => (
                <div key={title} className="flex gap-5 rounded-2xl border border-[var(--line)] bg-[var(--white)] p-5">
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

          {/* Badge visual */}
          <div className="flex justify-center lg:justify-end lg:pt-16">
            <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 border-[var(--sky-line)] bg-[var(--sky-pale)] text-center">
              <span className="display-title text-3xl font-bold text-[var(--sky-deep)]">UFJF</span>
              <span className="mt-1 text-xs font-semibold text-[var(--ink-muted)]">Psicologia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
