const etapas = [
  { n: '01', title: 'Avaliação inicial', desc: 'Entendemos juntos o que te trouxe até aqui, seus objetivos e o contexto de vida.' },
  { n: '02', title: 'Identificação de padrões', desc: 'Mapeamos pensamentos automáticos, crenças e comportamentos que mantêm o sofrimento.' },
  { n: '03', title: 'Reestruturação cognitiva', desc: 'Questionamos pensamentos disfuncionais e construímos perspectivas mais realistas.' },
  { n: '04', title: 'Mudança comportamental', desc: 'Experimentos práticos entre sessões para testar novas formas de agir e sentir.' },
]

export default function SectionTCC() {
  return (
    <section id="tcc" className="bg-white py-16 sm:py-20">
      <div className="page-wrap px-4">
        <div className="rounded-[3rem] bg-[var(--sky-pale)] px-6 py-16 sm:rounded-[4rem] sm:px-12 sm:py-20">
        <div className="mb-14 text-center">
          <p className="island-kicker mb-4 text-[var(--sky-deep)]">Abordagem</p>
          <h2 className="display-title mb-5 text-3xl font-medium leading-[1.1] text-[var(--ink)] sm:text-4xl lg:text-5xl">
            TCC e como funciona
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-[var(--ink-soft)]">
            A Terapia Cognitivo-Comportamental parte de uma premissa simples:
            a forma como pensamos afeta como nos sentimos e agimos. E isso pode mudar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {etapas.map(({ n, title, desc }) => (
            <div key={n} className="flex gap-5 rounded-2xl border border-[var(--sky-line)] bg-white p-6">
              <div className="flex-shrink-0">
                <span className="display-title text-4xl font-medium text-[var(--sky-deep)] opacity-40">{n}</span>
              </div>
              <div className="pt-1">
                <h3 className="mb-2 text-base font-bold text-[var(--ink)]">{title}</h3>
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
