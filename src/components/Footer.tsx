export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer mt-20 px-4 pb-10 pt-8">
      <div className="page-wrap flex flex-col items-center justify-between gap-3 text-center text-sm text-[var(--sea-ink-soft)] sm:flex-row sm:text-left">
        <p className="m-0">
          &copy; {year} Camila Kozaka &mdash; CRP 08/XXXXX
        </p>
        <p className="island-kicker m-0">Psicóloga Clínica · TCC</p>
      </div>
    </footer>
  )
}
