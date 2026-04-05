import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Section, SectionHeader } from "@/components/section"
import { CardGrid } from "@/components/card-grid"
import { friendsContent, siteConfig } from "@/lib/content"

export const metadata: Metadata = {
  title: friendsContent.title,
  description: friendsContent.metaDescription,
  alternates: {
    canonical: `${siteConfig.url}/friends/`,
  },
  openGraph: {
    title: `${friendsContent.title} | ${siteConfig.name}`,
    description: friendsContent.metaDescription,
    url: `${siteConfig.url}/friends/`,
    type: "website",
  },
}

export default function FriendsPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title={friendsContent.title}
        subtitle={friendsContent.intro}
        size="small"
      />

      {/* Friends Grid */}
      <Section>
        <SectionHeader
          title="Our Partners"
          subtitle="Together we share a commitment to quality, craftsmanship, and the celebration of whisky culture."
        />
        <CardGrid items={friendsContent.friends} columns={2} />
      </Section>
    </>
  )
}
