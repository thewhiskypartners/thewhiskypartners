import type { Metadata } from "next"
import Script from "next/script"
import { CalendarDays, MapPin } from "lucide-react"
import { Hero } from "@/components/hero"
import { Section, SectionHeader } from "@/components/section"
import { EventSchedule } from "@/components/event-schedule"
import { LogoGrid } from "@/components/logo-grid"
import { ContactBlock } from "@/components/contact-block"
import { festContent, siteConfig } from "@/lib/content"

export const metadata: Metadata = {
  title: festContent.title,
  description: festContent.metaDescription,
  alternates: {
    canonical: `${siteConfig.url}/the-whisky-partners-fest/`,
  },
  openGraph: {
    title: `${festContent.title} | ${siteConfig.name}`,
    description: festContent.metaDescription,
    url: `${siteConfig.url}/the-whisky-partners-fest/`,
    type: "website",
  },
}

// Event schema for SEO
const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: festContent.title,
  description: festContent.metaDescription,
  startDate: "2025-11-01",
  endDate: "2025-11-01",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: festContent.location,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
  },
  organizer: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  image: `${siteConfig.url}/images/hero-whisky.jpg`,
}

export default function FestPage() {
  return (
    <>
      <Script
        id="event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      {/* Hero */}
      <Hero
        title={festContent.title}
        subtitle={festContent.subtitle}
        size="default"
      />

      {/* Event Details */}
      <Section background="card">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-lg">
            <div className="flex items-center gap-2 text-primary">
              <CalendarDays className="h-5 w-5" />
              <span className="font-medium">{festContent.date}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{festContent.location}</span>
            </div>
          </div>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground text-pretty">
            {festContent.intro}
          </p>
        </div>
      </Section>

      {/* Highlights */}
      <Section>
        <SectionHeader
          title="Event Highlights"
          subtitle="What to expect at The Whisky Partners FEST"
        />
        <div className="mx-auto max-w-2xl">
          <ul className="grid gap-4 sm:grid-cols-2">
            {festContent.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-lg border border-border/50 bg-card p-4"
              >
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Schedule */}
      <Section background="muted">
        <SectionHeader
          title="Schedule"
          subtitle="Plan your day at the FEST"
        />
        <div className="mx-auto max-w-2xl">
          <EventSchedule items={festContent.schedule} />
        </div>
      </Section>

      {/* Collaborators */}
      <Section>
        <SectionHeader
          title="Collaborators"
          subtitle="Our partners making this event possible"
        />
        <LogoGrid items={festContent.collaborators} columns={3} />
      </Section>

      {/* Sponsors */}
      <Section background="card">
        <SectionHeader
          title="Sponsors"
          subtitle="Thank you to our generous sponsors"
        />
        <LogoGrid items={festContent.sponsors} columns={3} />
      </Section>

      {/* Contact */}
      <Section>
        <ContactBlock title="Questions About the FEST?" />
      </Section>
    </>
  )
}
