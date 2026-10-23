import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { Photo } from "@/components/photo";
import { nav, secondaryNav, site } from "@/data/site";
import { tours } from "@/data/tours";

const socials = [
  { label: "Facebook", href: site.social.facebook },
  { label: "Pinterest", href: site.social.pinterest },
  { label: "Vimeo", href: site.social.vimeo },
  { label: "TripAdvisor", href: site.social.tripadvisor },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-moss text-cream">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-olive-100/80">{site.tagline}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cream underline-offset-4 hover:underline"
          >
            <Mail className="size-4" /> {site.email}
          </a>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-olive-200">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="eyebrow !text-olive-300">Tours</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {tours.map((t) => (
              <li key={t.slug}>
                <Link href={`/tours/${t.slug}`} className="text-cream/90 hover:text-cream">
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="eyebrow !text-olive-300">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[...nav, ...secondaryNav].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream/90 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="eyebrow !text-olive-300">Responsible travel</h2>
          <a
            href={site.travelersAgainstPlastic.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-4 rounded-lg border border-cream/15 bg-cream/5 p-3 transition-colors hover:bg-cream/10"
          >
            <span className="relative block size-14 shrink-0 overflow-hidden rounded-md">
              <Photo src="badges/travelers-against-plastic.png" alt="Travelers Against Plastic badge" sizes="56px" compact />
            </span>
            <span className="text-sm leading-snug">
              <span className="block font-semibold">{site.travelersAgainstPlastic.name}</span>
              <span className="text-olive-100/80">We don&rsquo;t hand out bottled water. Bring a refillable bottle and we&rsquo;ll keep it full.</span>
            </span>
          </a>
          <p className="mt-6 text-xs leading-relaxed text-olive-100/70">
            {site.guide.shortName} · {site.guide.license}
            <br />
            Licensed by {site.guide.licenseBody}
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-olive-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.location.locality}, {site.location.area}, {site.location.countryName}.
          </p>
          <p>Nature and culture tours since 2013.</p>
        </div>
      </div>
    </footer>
  );
}
