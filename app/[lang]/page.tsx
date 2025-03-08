import { ClientPage } from "./components/client-page"

export default function Page({ params }: { params: { lang: "en" | "zh" } }) {
  return <ClientPage lang={params.lang} />
}

