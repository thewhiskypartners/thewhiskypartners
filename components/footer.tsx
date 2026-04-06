import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail } from "lucide-react"
import { siteConfig, navigation } from "@/lib/content"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:items-start">
          {/* Brand and tagline */}
          <div className="text-center lg:text-left lg:max-w-sm">
            <Link href="/" className="inline-block">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={250}
                height={49}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 lg:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social and contact */}
          <div className="flex flex-col items-center gap-4 lg:items-end">
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 border-t border-border/40 pt-8">
          <div className="flex flex-col items-center gap-4 text-center text-xs text-muted-foreground lg:flex-row lg:justify-between">
            <p>{siteConfig.responsibleDrinking}</p>
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
