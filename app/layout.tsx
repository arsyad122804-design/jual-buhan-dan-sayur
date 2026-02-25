import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Petani Muda - Jual Bibit & Hasil Panen Berkualitas',
  description: 'Menyediakan hasil panen segar dan bibit berkualitas langsung dari kebun',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
