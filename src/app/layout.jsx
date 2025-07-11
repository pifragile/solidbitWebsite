import { MainComponent } from '@/components/MainComponent'
import { GoogleTagManager } from '@next/third-parties/google'
import '@/styles/main.css'

export const metadata = {
  title: {
    template: '%s - solidbit',
    default:
      'solidbit',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <MainComponent/>
      </body>
      <GoogleTagManager gtmId="AW-16777680120" />
    </html>
  )
}

