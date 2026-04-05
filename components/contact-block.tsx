import { Instagram, Mail } from "lucide-react"
import { siteConfig } from "@/lib/content"
import { cn } from "@/lib/utils"

interface ContactBlockProps {
  title?: string
  className?: string
}

export function ContactBlock({
  title = "Get in Touch",
  className,
}: ContactBlockProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-8 text-center",
        className
      )}
    >
      <h3 className="font-serif text-2xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-muted-foreground">
        Reach out to us through email or follow us on Instagram.
      </p>

      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Mail className="h-4 w-4" />
          {siteConfig.email}
        </a>
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          <Instagram className="h-4 w-4" />
          Follow on Instagram
        </a>
      </div>
    </div>
  )
}
