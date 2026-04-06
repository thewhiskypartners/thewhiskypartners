import type { Metadata } from "next"
import Script from "next/script"
import { CalendarDays, ExternalLink, MapPin } from "lucide-react"
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

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: festContent.title,
  description: festContent.metaDescription,
  startDate: "2025-02-06",
  endDate: "2025-02-08",
  eventStatus: "https://schema.org/EventCompleted",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Madrid",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madrid",
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

function PhotoGrid({
  images,
  columns = 3,
}: {
  images: string[]
  columns?: 2 | 3 | 5
}) {
  const gridClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 5
        ? "sm:grid-cols-2 lg:grid-cols-5"
        : "sm:grid-cols-2 lg:grid-cols-3"

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className="overflow-hidden rounded-2xl border border-border/60 bg-card/60"
        >
          <img
            src={image}
            alt={`${festContent.title} gallery image ${index + 1}`}
            className="h-72 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

export default function FestPage() {
  return (
    <>
      <Script
        id="event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      <Hero title={festContent.title} subtitle={festContent.subtitle} size="default" />

      <Section background="card">
        <div className="mx-auto max-w-4xl text-center">
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

      <Section>
        <SectionHeader
          title="Cronograma"
          subtitle="Tres jornadas para encontrarse, compartir y seguir construyendo comunidad whiskera en Madrid."
        />
        <div className="grid gap-8">
          {festContent.dayPlans.map((plan) => (
            <article
              key={plan.dateLabel}
              className="rounded-3xl border border-border/60 bg-card/40 p-6 shadow-sm lg:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    {plan.day} · {plan.dateLabel}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground">
                    {plan.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {plan.description}
                  </p>
                  {plan.venueUrl && plan.venueLabel && (
                    <a
                      href={plan.venueUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
                    >
                      {plan.venueLabel}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <div className="mt-8">
                <PhotoGrid images={plan.images} columns={plan.images.length >= 5 ? 5 : 3} />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section background="muted">
        <SectionHeader
          title={festContent.principalEvent.title}
          subtitle={festContent.principalEvent.intro}
        />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 lg:p-8">
            <EventSchedule items={festContent.schedule} />
          </div>
          <PhotoGrid images={festContent.principalEvent.images} columns={3} />
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Event Highlights"
          subtitle="El contenido real del festival, ahora alineado con lo que sucedio en febrero de 2025."
        />
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="space-y-4">
            {festContent.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-border/60 bg-card/40 p-5"
              >
                <p className="leading-relaxed text-muted-foreground">{highlight}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-border/60 bg-card/40 p-6 lg:p-8">
            <div className="space-y-5">
              {festContent.narrative.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section background="card">
        <SectionHeader
          title="Collaborators"
          subtitle="Clubs, espacios y proyectos que acompanaron esta edicion."
        />
        <LogoGrid items={festContent.collaborators} columns={3} />
        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
          {festContent.collaboratorLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {item.name}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Sponsors"
          subtitle="Marcas y espacios que apoyaron The Whisky Partners FEST."
        />
        <LogoGrid items={festContent.sponsors} columns={4} />
        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
          {festContent.sponsorLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {item.name}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <ContactBlock title="Contact" />
      </Section>
    </>
  )
}
