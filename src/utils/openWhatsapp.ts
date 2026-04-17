const WHATSAPP_PHONE = '5515997539068'
const WHATSAPP_MESSAGE = 'Olá, gostaria de saber mais sobre a terapia 😊'

export function getWhatsappUrl() {
  const url = new URL(`https://wa.me/${WHATSAPP_PHONE}`)

  url.searchParams.set('text', WHATSAPP_MESSAGE)
  return url.toString()
}

export function openWhatsapp() {
  const url = getWhatsappUrl()

  window.open(url.toString(), '_blank', 'noopener,noreferrer')
}
