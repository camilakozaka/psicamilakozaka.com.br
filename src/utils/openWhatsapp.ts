const WHATSAPP_PHONE = '5541999999999'
const WHATSAPP_MESSAGE = 'Oi, Gostaria de saber mais sobre a terapia'

export function getWhatsappUrl() {
  const url = new URL(`https://wa.me/${WHATSAPP_PHONE}`)

  url.searchParams.set('text', WHATSAPP_MESSAGE)
  return url.toString()
}

export function openWhatsapp() {
  const url = getWhatsappUrl()

  window.open(url.toString(), '_blank', 'noopener,noreferrer')
}
