import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Footer from '../components/Footer'
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Outlet />
      <Footer />
      <FloatingWhatsAppButton />
      <TanStackRouterDevtools />
    </>
  )
}
