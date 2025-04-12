import { createFileRoute } from '@tanstack/react-router'
import ServicePage from '../features/services/pages/service-page'

export const Route = createFileRoute('/services')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ServicePage />
}
