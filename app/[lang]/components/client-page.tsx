"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { LanguageSwitcher } from "./language-switcher"

export function ClientPage({ lang }: { lang: "en" | "zh" }) {
  const [dict, setDict] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadDictionary() {
      try {
        const response = await fetch(`/dictionaries/${lang}.json`)
        const data = await response.json()
        setDict(data)
        setLoading(false)
      } catch (error) {
        console.error("Failed to load dictionary:", error)
      }
    }

    loadDictionary()
  }, [lang])

  if (loading || !dict) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href={`/${lang}`} className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center bg-primary rounded">
                <span className="text-primary-foreground font-bold">Q</span>
              </div>
              <span className="inline-block font-bold">Quadra Robot</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href={`#vision`}
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                {dict.nav.vision}
              </Link>
              <Link
                href={`#design`}
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                {dict.nav.design}
              </Link>
              <Link
                href={`#team`}
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                {dict.nav.team}
              </Link>
              <Link
                href={`#contact`}
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                {dict.nav.contact}
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <LanguageSwitcher labels={dict.language} />
            <Link
              href={`#contact`}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium"
            >
              {dict.nav.joinUs}
            </Link>
          </div>
        </div>
      </header>

      {/* 其余内容与之前相同 */}

      <main className="flex-1">{/* 主要内容 */}</main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {dict.footer.copyright}
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium underline underline-offset-4">
              {dict.footer.privacy}
            </Link>
            <Link href="#" className="text-sm font-medium underline underline-offset-4">
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

