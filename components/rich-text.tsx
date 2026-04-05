import { cn } from "@/lib/utils"

interface RichTextSectionProps {
  heading?: string
  content?: string
  list?: string[]
  className?: string
}

export function RichTextSection({
  heading,
  content,
  list,
  className,
}: RichTextSectionProps) {
  return (
    <div className={cn("mb-10 last:mb-0", className)}>
      {heading && (
        <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground mb-4">
          {heading}
        </h3>
      )}
      {content && (
        <p className="text-muted-foreground leading-relaxed text-pretty">
          {content}
        </p>
      )}
      {list && list.length > 0 && (
        <ul className="mt-4 space-y-2">
          {list.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

interface ArticleContentProps {
  children: React.ReactNode
  className?: string
}

export function ArticleContent({ children, className }: ArticleContentProps) {
  return (
    <article className={cn("mx-auto max-w-3xl", className)}>
      {children}
    </article>
  )
}
