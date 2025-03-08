"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface LanguageSwitcherProps {
  labels: {
    zh: string
    en: string
  }
}

export function LanguageSwitcher({ labels }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const currentLang = pathname.startsWith("/zh") ? "zh" : "en"

  return (
    <div className="flex items-center border rounded-md overflow-hidden">
      <Link
        href="/zh"
        className={`px-3 py-1 text-sm ${currentLang === "zh" ? "bg-primary text-primary-foreground" : ""}`}
      >
        {labels.zh}
      </Link>
      <Link
        href="/en"
        className={`px-3 py-1 text-sm ${currentLang === "en" ? "bg-primary text-primary-foreground" : ""}`}
      >
        {labels.en}
      </Link>
    </div>
  )
}

