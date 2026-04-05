import Image from "next/image"
import { cn } from "@/lib/utils"

interface HeroProps {
  title: string
  subtitle?: string
  imageSrc?: string
  imageAlt?: string
  overlay?: boolean
  size?: "default" | "large" | "small"
  centered?: boolean
}

export function Hero({
  title,
  subtitle,
  imageSrc = "/images/hero-whisky.jpg",
  imageAlt = "Whisky atmosphere",
  overlay = true,
  size = "default",
  centered = true,
}: HeroProps) {
  const sizeClasses = {
    small: "min-h-[40vh]",
    default: "min-h-[60vh]",
    large: "min-h-[80vh]",
  }

  return (
    <section className={cn("relative flex items-center", sizeClasses[size])}>
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        )}
      </div>

      {/* Content */}
      <div className={cn(
        "mx-auto w-full max-w-7xl px-6 py-16 lg:px-8",
        centered && "text-center"
      )}>
        <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
