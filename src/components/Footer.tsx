export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer px-4 pb-8 pt-6">
      <div className="page-wrap flex flex-col items-center justify-between gap-2 text-center text-sm text-[var(--ink-soft)] sm:flex-row sm:text-left">
        <p className="m-0">
          &copy; {year} Camila Kozaka &mdash; CRP 08/XXXXX
        </p>
        <p className="island-kicker m-0 text-[var(--ink-muted)]">Psicóloga Clínica · TCC · Curitiba & Online</p>
      </div>
    </footer>
  )
}
