import Link from "next/link"
import { ArrowRight, ExternalLink, Instagram } from "lucide-react"
import { Hero } from "@/components/hero"
import { Section, SectionHeader } from "@/components/section"
import { ContactBlock } from "@/components/contact-block"
import { homeContent, siteConfig } from "@/lib/content"

function PhotoPair({ images }: { images: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className="overflow-hidden rounded-2xl border border-border/60 bg-card/60"
        >
          <img
            src={image}
            alt={`The Whisky Partners home image ${index + 1}`}
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

function VideoCard({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border/60 bg-card/70 shadow-sm">
      <iframe
        title={title}
        src={src}
        className="aspect-[9/16] w-full border-0 bg-black"
        allow="clipboard-write; fullscreen"
      />
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        imageSrc={homeContent.hero.image}
        size="large"
      />

      <Section background="card">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {homeContent.latest.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {homeContent.latest.title}
            </h2>
            <div className="space-y-4">
              {homeContent.latest.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <VideoCard
            src={homeContent.latest.videoUrl}
            title="The Whisky Partners latest activity"
          />
        </div>
        <div className="mx-auto mt-8 max-w-6xl">
          <PhotoPair images={homeContent.latest.images} />
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card/60">
            <img
              src={homeContent.sackmanPreview.image}
              alt={homeContent.sackmanPreview.title}
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="rounded-3xl border border-border/60 bg-card/40 p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {homeContent.sackmanPreview.subtitle}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground">
              {homeContent.sackmanPreview.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {homeContent.sackmanPreview.text}
            </p>
            <a
              href={homeContent.sackmanPreview.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {homeContent.sackmanPreview.ctaLabel}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Section>

      <Section background="muted">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <VideoCard
            src={homeContent.festPreview.videoUrl}
            title="About The Whisky Partners Fest"
          />
          <div>
            <SectionHeader
              title={homeContent.festPreview.title}
              subtitle={homeContent.festPreview.summary}
              centered={false}
              className="mb-8"
            />
            <p className="text-lg leading-relaxed text-muted-foreground">
              {homeContent.festPreview.extra}
            </p>
            <Link
              href="/the-whisky-partners-fest/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              {homeContent.festPreview.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 sm:grid-cols-2">
          <Link
            href="/whiskybars/"
            className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
              {homeContent.community.bars.title}
            </h3>
            <p className="mt-3 text-muted-foreground">
              {homeContent.community.bars.text}
            </p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
              {homeContent.community.bars.cta} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <Link
            href="/friends/"
            className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
              {homeContent.community.friends.title}
            </h3>
            <p className="mt-3 text-muted-foreground">
              {homeContent.community.friends.text}
            </p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
              {homeContent.community.friends.cta} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </Section>

      <Section background="card">
        <div className="mx-auto grid">
          {/* <div className="rounded-3xl border border-border/60 bg-background/70 p-8 text-center">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {homeContent.social.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{homeContent.social.text}</p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:border-primary/50"
            >
              <Instagram className="h-5 w-5" />
              {homeContent.social.cta}
            </a>
          </div> */}
          <div className="rounded-3xl border border-border/60 bg-background/70 p-8 text-center">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {homeContent.join.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{homeContent.join.text}</p>
            <div className="mt-6">
              <ContactBlock title="Contact" className="border-0 bg-transparent p-0 shadow-none" />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
