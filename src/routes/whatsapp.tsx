import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { getWhatsappUrl } from '#/utils/openWhatsapp'

export const Route = createFileRoute('/whatsapp')({
  component: WhatsAppRedirect,
})

function WhatsAppRedirect() {
  const whatsappUrl = getWhatsappUrl()

  useEffect(() => {
    window.location.replace(whatsappUrl)
  }, [whatsappUrl])

  return (
    <main className="page-wrap px-4 py-24 text-center">
      <p className="text-base text-[var(--ink-soft)]">
        Redirecionando para o WhatsApp...
      </p>
    </main>
  )
}
