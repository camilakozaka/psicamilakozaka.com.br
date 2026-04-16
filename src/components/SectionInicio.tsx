export default function SectionInicio() {
  return (
    <section id="inicio" className="page-wrap px-4 py-20 sm:py-28">
      <div className="max-w-2xl rise-in">
        <span className="accent-line" />
        <p className="island-kicker mb-4">Psicóloga Clínica · CRP 08/XXXXX</p>
        <h1 className="display-title mb-6 text-5xl font-bold leading-[1.08] tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
          Um espaço para<br />
          <span className="text-[var(--sky-deep)]">cuidar de você.</span>
        </h1>
        <p className="mb-10 text-lg leading-relaxed text-[var(--ink-soft)]">
          Sou Camila Kozaka, psicóloga especialista em Terapia Cognitivo-Comportamental.
          Atendo adultos presencialmente e online — um lugar honesto, seguro e sem julgamentos.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contato"
            className="inline-block rounded-full bg-[var(--sky-deep)] px-8 py-3.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(46,157,228,0.35)] transition hover:-translate-y-0.5 hover:bg-[var(--sky)] hover:shadow-[0_6px_24px_rgba(91,184,245,0.4)]"
          >
            Agendar consulta
          </a>
          <a
            href="#sobre"
            className="inline-block rounded-full border border-[var(--line)] px-8 py-3.5 text-sm font-bold text-[var(--ink)] transition hover:border-[var(--sky-line)] hover:text-[var(--sky-deep)]"
          >
            Conhecer mais
          </a>
        </div>
      </div>
    </section>
  )
}
