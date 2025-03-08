import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { getDictionary } from "../dictionaries"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }]
}

export async function generateMetadata({ params }: { params: { lang: "en" | "zh" } }) {
  const dict = await getDictionary(params.lang)

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: "en" | "zh" }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

