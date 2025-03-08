"use client"

import { ChevronRight, Shield, Mail, MapPin, Wrench, Code, Briefcase, Globe, Award } from "lucide-react"
import Link from "next/link"
import React from "react"
import type { Dictionary } from "../../types"

interface HomePageProps {
  dict: Dictionary
  lang: "en" | "zh"
}

export function HomePage({ dict, lang }: HomePageProps) {
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
                href={`/${lang}#vision`}
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                {dict.nav.vision}
              </Link>
              <Link
                href={`/${lang}#design`}
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                {dict.nav.design}
              </Link>
              <Link
                href={`/${lang}#team`}
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                {dict.nav.team}
              </Link>
              <Link
                href={`/${lang}#contact`}
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                {dict.nav.contact}
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <div className="flex items-center border rounded-md overflow-hidden">
              <Link
                href={`/zh`}
                className={`px-3 py-1 text-sm ${lang === "zh" ? "bg-primary text-primary-foreground" : ""}`}
              >
                {dict.language.zh}
              </Link>
              <Link
                href={`/en`}
                className={`px-3 py-1 text-sm ${lang === "en" ? "bg-primary text-primary-foreground" : ""}`}
              >
                {dict.language.en}
              </Link>
            </div>
            <Link
              href={`/${lang}#contact`}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium"
            >
              {dict.nav.joinUs}
            </Link>
          </div>
        </div>
      </header>
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
                    href={`/${lang}#vision`}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    {dict.cta.learnVision}
                  </Link>
                  <Link
                    href={`/${lang}#design`}
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

        <section id="vision" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  {dict.vision.title}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{dict.vision.subtitle}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {dict.vision.description}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">{dict.vision.philosophy.title}</h3>
                <p className="text-muted-foreground">{dict.vision.philosophy.content1}</p>
                <p className="text-muted-foreground">{dict.vision.philosophy.content2}</p>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">{dict.vision.mission.title}</h3>
                <p className="text-muted-foreground">{dict.vision.mission.content1}</p>
                <p className="text-muted-foreground">{dict.vision.mission.content2}</p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-6">
              <h3 className="text-2xl font-bold mb-4">{dict.vision.name.title}</h3>
              <p className="text-muted-foreground">{dict.vision.name.content}</p>
            </div>
          </div>
        </section>

        <section id="design" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  {dict.design.title}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{dict.design.subtitle}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {dict.design.description}
                </p>
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">{dict.design.analysis.title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {dict.design.analysis.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>{item.title}：</strong>
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">{dict.design.solution.title}</h3>
                <p className="text-muted-foreground">{dict.design.solution.description}</p>
                <ul className="space-y-2 text-muted-foreground">
                  {dict.design.solution.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>{item.title}：</strong>
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  {dict.team.title}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{dict.team.subtitle}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {dict.team.description}
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <h3 className="text-2xl font-bold mb-6 text-center">{dict.team.workStyle.title}</h3>
              <div className="grid gap-6 md:grid-cols-3">
                {dict.team.workStyle.items.map((item, index) => (
                  <div key={index} className="rounded-lg border p-6 flex flex-col items-center text-center">
                    {index === 0 && <Globe className="h-12 w-12 text-primary mb-4" />}
                    {index === 1 && <Briefcase className="h-12 w-12 text-primary mb-4" />}
                    {index === 2 && <Award className="h-12 w-12 text-primary mb-4" />}
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-6">
              <h3 className="text-2xl font-bold mb-6 text-center">{dict.team.positions.title}</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {dict.team.positions.items.map((item, index) => (
                  <div key={index} className="rounded-lg border p-6 flex flex-col items-center text-center">
                    {index === 0 && <Wrench className="h-12 w-12 text-primary mb-4" />}
                    {index === 1 && <Code className="h-12 w-12 text-primary mb-4" />}
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  {dict.contact.title}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{dict.contact.subtitle}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {dict.contact.description}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>{dict.contact.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>{dict.contact.overseasAddress}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>{dict.contact.chinaAddress}</span>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {dict.contact.form.name}
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder={dict.contact.form.namePlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {dict.contact.form.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder={dict.contact.form.emailPlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="position"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {dict.contact.form.position}
                    </label>
                    <select
                      id="position"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">{dict.contact.form.positionPlaceholder}</option>
                      <option value="hardware">{dict.contact.form.positions.hardware}</option>
                      <option value="software">{dict.contact.form.positions.software}</option>
                      <option value="other">{dict.contact.form.positions.other}</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {dict.contact.form.introduction}
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder={dict.contact.form.introductionPlaceholder}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    {dict.contact.form.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
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

