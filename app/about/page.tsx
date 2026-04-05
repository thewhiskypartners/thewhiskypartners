import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { ArticleContent, RichTextSection } from "@/components/rich-text"
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

      {/* Content */}
      <Section>
        <ArticleContent>
          {aboutContent.sections.map((section, index) => (
            <RichTextSection
              key={index}
              heading={section.heading}
              content={section.content}
              list={section.list}
            />
          ))}
        </ArticleContent>
      </Section>

      {/* Contact */}
      <Section background="card">
        <ContactBlock title="Connect With Us" />
      </Section>
    </>
  )
}
