import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Re-Open — Renewing American Society",
  description:
    "We've accepted dysfunction as destiny. We've mistaken learned helplessness for wisdom. It doesn't have to be this way.",
  keywords: "society, reform, America, renewal, healthcare, housing, education, governance",
  openGraph: {
    title: "Re-Open — Renewing American Society",
    description: "We've accepted dysfunction as destiny. It doesn't have to be this way.",
    url: "https://re-open.us",
    siteName: "Re-Open",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
