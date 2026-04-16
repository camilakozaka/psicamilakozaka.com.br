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
    label: 'Autonomia',
    desc: 'Você é o especialista da sua própria vida. Meu papel é ampliar sua clareza, não decidir por você.',
  },
  {
    label: 'Vínculo de confiança',
    desc: 'A relação terapêutica é o coração do processo. Construímos isso juntos, com cuidado e tempo.',
  },
]

export default function SectionValores() {
  return (
    <section id="valores" className="py-20 sm:py-24">
      <div className="page-wrap px-4">
        <span className="accent-line" />
        <p className="island-kicker mb-3">Como trabalho</p>
        <h2 className="display-title mb-12 text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          Valores como terapeuta
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map(({ label, desc }, i) => (
            <div
              key={label}
              className="rise-in group rounded-2xl border border-[var(--line)] bg-[var(--white)] p-6 transition hover:border-[var(--sky-line)] hover:shadow-[0_8px_32px_rgba(91,184,245,0.12)]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--sky-pale)]">
                <span className="text-lg font-bold text-[var(--sky-deep)]">{i + 1}</span>
              </div>
              <h3 className="mb-2 text-base font-bold text-[var(--ink)]">{label}</h3>
              <p className="m-0 text-sm leading-6 text-[var(--ink-soft)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
