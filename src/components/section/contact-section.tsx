import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>

      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Let&apos;s Connect
        </h2>

        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Interested in software engineering, AI/ML, or building intelligent
          systems? Feel free to connect with me through LinkedIn, GitHub, or
          email.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
          >
            GitHub
          </Link>

          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
          >
            LinkedIn
          </Link>

          <Link
            href={DATA.contact.social.email.url}
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
          >
            Email
          </Link>
        </div>

        <a
          href={`mailto:${DATA.contact.email}`}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {DATA.contact.email}
        </a>
      </div>
    </div>
  );
}
