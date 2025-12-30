import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import { Desktop } from "@/components/desktop";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return <Desktop dict={dict} lang={lang} />;
}
