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
          subtitle="Each bar has been carefully chosen for their exceptional whisky collection, knowledgeable staff, and inviting atmosphere. Click on any bar to view its location on the map."
        />
        <CardGrid 
          items={whiskyBarsContent.bars} 
          columns={5} 
          variant="compact"
        />
      </Section>

      {/* Join Section */}
      <Section background="card">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            Join Us
          </h2>
          <p className="text-muted-foreground mb-6">
            Know a great whisky bar that should be on our list? We&apos;re always looking to discover new venues that share our passion for quality whisky.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Suggest a Bar
          </a>
        </div>
      </Section>
    </>
  )
}
