import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  metadataBase: new URL("https://re-open.us"),
  title: "Re-Open — Renewing American Society",
  description:
    "We've accepted dysfunction as destiny. We've mistaken learned helplessness for wisdom. It doesn't have to be this way.",
  keywords: "society, reform, America, renewal, healthcare, housing, education, governance, civic engagement",
  authors: [{ name: "Re-Open", url: "https://re-open.us" }],
  openGraph: {
    title: "Re-Open — Renewing American Society",
    description: "We've accepted dysfunction as destiny. It doesn't have to be this way.",
    url: "https://re-open.us",
    siteName: "Re-Open",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Re-Open — Renewing American Society",
    description: "We've accepted dysfunction as destiny. It doesn't have to be this way.",
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
        <Analytics />
      </body>
    </html>
  )
}
