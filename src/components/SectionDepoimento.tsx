export default function SectionDepoimento() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="page-wrap px-4 text-center">
        {/* Stars */}
        <div className="mb-8 flex justify-center gap-2 text-[var(--sky-deep)]">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2z" />
            </svg>
          ))}
        </div>

        <blockquote className="display-title mx-auto max-w-3xl text-2xl font-medium leading-[1.4] text-[var(--ink)] sm:text-3xl lg:text-4xl">
          &ldquo;Um espaço seguro onde me senti vista e acolhida.
          Cresci muito nos últimos meses, e finalmente estou começando
          a me sentir eu mesma de novo.&rdquo;
        </blockquote>

        <p className="island-kicker mt-8 text-[var(--ink-muted)]">— Paciente, 32 anos</p>
      </div>
    </section>
  )
}
