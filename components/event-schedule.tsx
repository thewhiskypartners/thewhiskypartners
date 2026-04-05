import { cn } from "@/lib/utils"

interface ScheduleItem {
  time: string
  title: string
  description?: string
}

interface EventScheduleProps {
  items: ScheduleItem[]
  className?: string
}

export function EventSchedule({ items, className }: EventScheduleProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline line */}
      <div className="absolute left-[3.5rem] top-0 bottom-0 w-px bg-border hidden sm:block" />

      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4 sm:gap-6">
            {/* Time */}
            <div className="flex-shrink-0 w-14 sm:w-16 text-right">
              <span className="font-mono text-sm font-medium text-primary">
                {item.time}
              </span>
            </div>

            {/* Dot */}
            <div className="relative hidden sm:flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
            </div>

            {/* Content */}
            <div className="flex-1 pb-6 border-b border-border/50 last:border-0">
              <h4 className="font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h4>
              {item.description && (
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
