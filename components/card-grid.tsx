import Image from "next/image"
import { ExternalLink, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface CardItem {
  name: string
  image?: string
  location?: string
  description?: string
  externalUrl?: string
  mapUrl?: string
}

interface CardGridProps {
  items: CardItem[]
  columns?: 2 | 3 | 4 | 5 | 6
  variant?: "default" | "compact"
  className?: string
}

export function CardGrid({ items, columns = 3, variant = "default", className }: CardGridProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
    5: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    6: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  }

  if (variant === "compact") {
    return (
      <div className={cn("grid gap-4", gridCols[columns], className)}>
        {items.map((item, index) => (
          <CompactCard key={index} item={item} />
        ))}
      </div>
    )
  }

  return (
    <div className={cn("grid gap-6", gridCols[columns], className)}>
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  )
}

function Card({ item }: { item: CardItem }) {
  const linkUrl = item.externalUrl || item.mapUrl

  const content = (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      {/* Image */}
      {item.image && (
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        {item.location && (
          <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {item.location}
          </p>
        )}
        {item.description && (
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {item.description}
          </p>
        )}
        {linkUrl && (
          <div className="mt-auto pt-4 flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span>{item.mapUrl ? "View on Map" : "Visit"}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </div>
        )}
      </div>
    </div>
  )

  if (linkUrl) {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
      >
        {content}
      </a>
    )
  }

  return content
}

function CompactCard({ item }: { item: CardItem }) {
  const linkUrl = item.externalUrl || item.mapUrl

  const content = (
    <div className="group relative flex flex-col items-center text-center p-4 rounded-lg border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-primary transition-colors">
        {item.name}
      </h3>
      {item.location && (
        <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {item.location}
        </p>
      )}
    </div>
  )

  if (linkUrl) {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
      >
        {content}
      </a>
    )
  }

  return content
}
