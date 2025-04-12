import { createFileRoute } from '@tanstack/react-router'
import ServiceDetailPage from '../features/services/pages/service-detail-page'

export const Route = createFileRoute('/services/$sid')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ServiceDetailPage />
}
