import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { ContactBlock } from "@/components/contact-block"
import { aboutContent, siteConfig } from "@/lib/content"

export const metadata: Metadata = {
  title: aboutContent.title,
  description: aboutContent.metaDescription,
  alternates: {
    canonical: `${siteConfig.url}/about/`,
  },
  openGraph: {
    title: `${aboutContent.title} | ${siteConfig.name}`,
    description: aboutContent.metaDescription,
    url: `${siteConfig.url}/about/`,
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title={aboutContent.title}
        size="small"
      />

      {/* Intro & Philosophy */}
      <Section>
        <article className="mx-auto max-w-3xl">
          {/* Intro */}
          <div className="mb-12">
            <p className="text-lg text-foreground leading-relaxed">
              {aboutContent.intro.content}
            </p>
            <p className="mt-4 text-sm text-primary italic">
              *{aboutContent.intro.certified}
            </p>
          </div>

          {/* Philosophy */}
          <div className="space-y-6 border-l-2 border-primary/30 pl-6">
            {aboutContent.philosophy.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </Section>

      {/* Goal Section */}
      <Section background="card">
        <article className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
            {aboutContent.goal.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {aboutContent.goal.content}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {aboutContent.goal.venueDescription}
          </p>
        </article>
      </Section>

      {/* Criteria Section */}
      <Section>
        <article className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
            {aboutContent.whiskyBarCriteria.title}
          </h2>
          <ul className="space-y-3">
            {aboutContent.whiskyBarCriteria.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </Section>

      {/* Contact */}
      <Section background="card">
        <ContactBlock title="Connect With Us" />
      </Section>
    </>
  )
}
