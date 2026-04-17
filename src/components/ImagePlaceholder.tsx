type Props = {
  className?: string
  label?: string
  rounded?: 'full' | 'arch' | 'blob' | 'circle'
}

export default function ImagePlaceholder({
  className = '',
  label = 'imagem',
  rounded = 'arch',
}: Props) {
  const shape =
    rounded === 'full'
      ? 'rounded-[3rem]'
      : rounded === 'blob'
        ? 'rounded-[50%_50%_45%_55%_/_55%_45%_55%_45%]'
        : rounded === 'circle'
          ? 'rounded-full'
          : 'rounded-t-full rounded-b-3xl'

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[var(--cream)] to-[var(--detail-soft)] ${shape} ${className}`}
      aria-label={label}
      role="img"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-[var(--sun-deep)]/45">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
        </div>
      </div>
    </div>
  )
}
