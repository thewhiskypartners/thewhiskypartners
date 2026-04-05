import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "default" | "muted" | "card"
}

export function Section({
  children,
  className,
  id,
  background = "default",
}: SectionProps) {
  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted",
    card: "bg-card",
  }

  return (
    <section
      id={id}
      className={cn("py-16 lg:py-24", bgClasses[background], className)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 lg:mb-16", centered && "text-center", className)}>
      <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg text-muted-foreground leading-relaxed text-pretty",
          centered && "mx-auto max-w-2xl"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
