import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/our-projects", label: "Our Projects" },
  { to: "/about-us", label: "About Us" },
  { to: "/leadership", label: "Leadership" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (st) => st.location.pathname });
  const overlay = pathname === "/" || pathname.startsWith("/our-projects/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !overlay;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid || open
          ? "bg-background/92 border-b border-hairline backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span
            className={`font-display text-xl tracking-[0.16em] uppercase transition-colors ${
              solid || open ? "text-foreground" : "text-ink-foreground"
            }`}
          >
            Metro City
          </span>
          <span
            className={`mt-1 text-[0.6rem] font-semibold tracking-[0.42em] uppercase transition-colors ${
              solid || open ? "text-muted-foreground" : "text-ink-foreground/70"
            }`}
          >
            Builders
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={`text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors ${
                solid
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-ink-foreground/75 hover:text-ink-foreground"
              }`}
              activeProps={{
                className: solid ? "text-foreground" : "text-ink-foreground",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`border px-6 py-2.5 text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors ${
              solid
                ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
                : "border-ink-foreground/50 text-ink-foreground hover:bg-ink-foreground hover:text-ink"
            }`}
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-px w-6 transition-all ${
              solid || open ? "bg-foreground" : "bg-ink-foreground"
            } ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 transition-all ${
              solid || open ? "bg-foreground" : "bg-ink-foreground"
            } ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-hairline bg-background md:hidden">
          <nav className="shell flex flex-col py-6">
            {[...nav, { to: "/contact", label: "Contact" }].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-4 font-display text-2xl text-foreground last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
