import { getDictionary } from "../dictionaries"
import { LanguageSwitcher } from "./components/language-switcher"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import React from "react"

export default async function AlternativePage({ params }: { params: { lang: "en" | "zh" } }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href={`/${params.lang}`} className="flex items-center space-x-2">
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

      {/* 其余内容保持不变 */}

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {dict.hero.title.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < dict.hero.title.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">{dict.hero.subtitle}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href={`#vision`}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    {dict.cta.learnVision}
                  </Link>
                  <Link
                    href={`#design`}
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    {dict.cta.productDesign}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[400px] h-[400px] bg-muted rounded-lg overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-3/4 bg-primary/10 rounded-lg">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-2/3 bg-primary/20 rounded-lg">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-full bg-primary/30 rounded-lg"></div>
                      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[10px] h-1/2 bg-primary/40 rounded-full"></div>
                      <div className="absolute top-0 right-1/4 -translate-x-1/2 w-[10px] h-1/2 bg-primary/40 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1/4 flex justify-center">
                      <div className="w-3/4 h-full bg-primary/30 rounded-lg flex justify-around items-center">
                        <div className="w-[40px] h-[40px] bg-primary/50 rounded-full"></div>
                        <div className="w-[40px] h-[40px] bg-primary/50 rounded-full"></div>
                        <div className="w-[40px] h-[40px] bg-primary/50 rounded-full"></div>
                        <div className="w-[40px] h-[40px] bg-primary/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 其余部分内容省略，保持不变 */}
      </main>

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

