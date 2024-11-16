import { RootLayout } from '@/components/RootLayout'
import { GoogleTagManager } from '@next/third-parties/google'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Solidbit',
    default:
      'Solidbit - Simple and Efficient Software with Swiss Quality Guarantee.',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
      <GoogleTagManager gtmId="AW-16777680120" />
    </html>
  )
}
