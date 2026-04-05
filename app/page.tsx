import Link from "next/link"
import { ArrowRight, Instagram } from "lucide-react"
import { Hero } from "@/components/hero"
import { Section, SectionHeader } from "@/components/section"
import { ContactBlock } from "@/components/contact-block"
import { homeContent, siteConfig } from "@/lib/content"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        size="large"
      />

      {/* FEST Preview Section */}
      <Section background="card">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Featured Event
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {homeContent.festPreview.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            {homeContent.festPreview.summary}
          </p>
          <Link
            href="/the-whisky-partners-fest/"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {homeContent.festPreview.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* About Preview Section */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            title={homeContent.aboutPreview.title}
            subtitle={homeContent.aboutPreview.text}
          />
          <Link
            href="/about/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Learn more about us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Quick Links Section */}
      <Section background="muted">
        <div className="grid gap-8 sm:grid-cols-2">
          <Link
            href="/whiskybars/"
            className="group rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              Whisky Bars
            </h3>
            <p className="mt-2 text-muted-foreground">
              Discover our curated selection of exceptional whisky bars.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Explore bars <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <Link
            href="/friends/"
            className="group rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              Our Friends
            </h3>
            <p className="mt-2 text-muted-foreground">
              Meet the partners who share our passion for whisky culture.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Meet our friends <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </Section>

      {/* Follow Us Section */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Follow Our Journey
          </h2>
          <p className="mt-4 text-muted-foreground">
            Stay connected with the latest from The Whisky Partners community.
          </p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:border-primary/50"
          >
            <Instagram className="h-5 w-5" />
            @thewhiskypartners
          </a>
        </div>
      </Section>

      {/* Contact Section */}
      <Section background="card">
        <ContactBlock />
      </Section>
    </>
  )
}
