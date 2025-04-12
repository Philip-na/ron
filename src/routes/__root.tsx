import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
     <main className='flex flex-col min-h-screen'>
     <Navbar />
      <Outlet />
      <Footer />
     </main>
    </React.Fragment>
  )
}
