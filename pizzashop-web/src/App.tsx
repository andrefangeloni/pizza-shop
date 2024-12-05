import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme'
import { queryClient } from './lib'
import { router } from './routes'

export const App = () => (
  <HelmetProvider>
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
      <Helmet titleTemplate="%s | Pizza Shop" />
      <Toaster richColors />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
)
