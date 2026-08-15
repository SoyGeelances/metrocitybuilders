import { Link } from "@tanstack/react-router";
import { contact } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="shell py-20">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl leading-tight text-ink-foreground">
              Building Southern California
              <br />
              with intention since 2003.
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-foreground/60">
              A Los Angeles–based real estate investment and development firm specializing in
              medical facilities, micro-hospitals, mixed-use and multifamily communities.
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-ink-foreground/45 uppercase">
              Navigate
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/our-projects", label: "Our Projects" },
                { to: "/about-us", label: "About Us" },
                { to: "/leadership", label: "Leadership" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-ink-foreground/45 uppercase">
              Office
            </p>
            <address className="mt-6 space-y-4 text-sm not-italic text-ink-foreground/70">
              <p className="leading-relaxed">{contact.address}</p>
              <p>
                <a className="transition-colors hover:text-bronze" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink-foreground/15 pt-8 text-[0.7rem] tracking-[0.12em] text-ink-foreground/45 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Metro City Builders. All rights reserved.</p>
          <p>Privacy Policy &amp; Terms of Use</p>
        </div>
      </div>
    </footer>
  );
}
