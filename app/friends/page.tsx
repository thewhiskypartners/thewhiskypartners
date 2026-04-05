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
          title="Our Community"
          subtitle="Together we share a commitment to quality, craftsmanship, and the celebration of whisky culture around the world."
        />
        <CardGrid 
          items={friendsContent.friends} 
          columns={6} 
          variant="compact"
        />
      </Section>

      {/* Join Section */}
      <Section background="card">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            Become a Friend
          </h2>
          <p className="text-muted-foreground mb-6">
            Are you a whisky enthusiast, club, or brand that shares our passion? We&apos;d love to connect and grow our community together.
          </p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Connect on Instagram
          </a>
        </div>
      </Section>
    </>
  )
}
