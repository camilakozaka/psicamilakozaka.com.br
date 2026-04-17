const GA_MEASUREMENT_ID = 'G-99KES46P2E'

type AnalyticsParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function initializeAnalytics() {
  if (typeof window === 'undefined') {
    return
  }

  if (document.querySelector(`script[data-ga-id="${GA_MEASUREMENT_ID}"]`)) {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtagProxy(...args: unknown[]) {
      window.dataLayer.push(args)
    }

  const bootstrapScript = document.createElement('script')
  bootstrapScript.dataset.gaId = GA_MEASUREMENT_ID
  bootstrapScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = window.gtag || gtag;
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `

  const gtagScript = document.createElement('script')
  gtagScript.async = true
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`

  document.head.appendChild(bootstrapScript)
  document.head.appendChild(gtagScript)
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') {
    return
  }

  window.dataLayer = window.dataLayer || []

  if (window.gtag) {
    window.gtag('event', eventName, params)
    return
  }

  window.dataLayer.push(['event', eventName, params])
}
