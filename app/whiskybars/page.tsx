import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Section, SectionHeader } from "@/components/section"
import { CardGrid } from "@/components/card-grid"
import { whiskyBarsContent, siteConfig } from "@/lib/content"

export const metadata: Metadata = {
  title: whiskyBarsContent.title,
  description: whiskyBarsContent.metaDescription,
  alternates: {
    canonical: `${siteConfig.url}/whiskybars/`,
  },
  openGraph: {
    title: `${whiskyBarsContent.title} | ${siteConfig.name}`,
    description: whiskyBarsContent.metaDescription,
    url: `${siteConfig.url}/whiskybars/`,
    type: "website",
  },
}

export default function WhiskyBarsPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title={whiskyBarsContent.title}
        subtitle={whiskyBarsContent.intro}
        size="small"
      />

      {/* Bars Grid */}
      <Section>
        <SectionHeader
          title="Our Selection"
          subtitle="Each bar has been carefully chosen for their exceptional whisky collection, knowledgeable staff, and inviting atmosphere."
        />
        <CardGrid items={whiskyBarsContent.bars} columns={3} />
      </Section>
    </>
  )
}
