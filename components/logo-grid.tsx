import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoItem {
  name: string
  image?: string
  tier?: string
}

interface LogoGridProps {
  items: LogoItem[]
  columns?: 3 | 4 | 5 | 6
  showNames?: boolean
  className?: string
}

export function LogoGrid({
  items,
  columns = 4,
  showNames = true,
  className,
}: LogoGridProps) {
  const gridCols = {
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  }

  return (
    <div className={cn("grid gap-6 lg:gap-8", gridCols[columns], className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-6 transition-colors hover:border-primary/30"
        >
          {item.image && (
            <div className="relative h-16 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          )}
          {showNames && (
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">{item.name}</p>
              {item.tier && (
                <p className="mt-0.5 text-xs text-primary">{item.tier}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
