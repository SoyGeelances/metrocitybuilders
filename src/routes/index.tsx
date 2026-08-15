import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Metro City Builders — Southern California Real Estate Development",
      },
      {
        name: "description",
        content:
          "Los Angeles–based real estate investment and development firm delivering medical facilities, mixed-use and multifamily communities across Southern California since 2003.",
      },
      {
        property: "og:title",
        content: "Metro City Builders — Southern California Real Estate Development",
      },
      {
        property: "og:description",
        content:
          "Over 20 years developing state-of-the-art medical facilities, micro-hospitals and multifamily communities across Southern California.",
      },
    ],
  }),
  component: Home,
});

const featured = [
  projects.find((p) => p.slug === "citizens-medical-plaza")!,
  projects.find((p) => p.slug === "the-one-luxury-condominiums")!,
  projects.find((p) => p.slug === "harbor-view-luxury-condominiums")!,
];

const approach = [
  {
    step: "01",
    title: "Acquire",
    body: "We source and acquire land across Los Angeles, Orange, Riverside and San Bernardino Counties, primarily for our own account.",
  },
  {
    step: "02",
    title: "Entitle",
    body: "Plans are developed and entitlements secured in close coordination with municipalities and the communities we build in.",
  },
  {
    step: "03",
    title: "Finance",
    body: "As a long-term investor as well as a developer, we arrange financing with select partners and institutions.",
  },
  {
    step: "04",
    title: "Build",
    body: "We manage construction end to end — build-to-suit for companies and public agencies, and for residential and commercial tenants.",
  },
];

const strengths = [
  {
    title: "Sustainable development",
    body: "An industry-wide reputation for responsible, community-minded building.",
  },
  {
    title: "Diverse product types",
    body: "Medical, mixed-use, senior, apartment, office, retail and light industrial.",
  },
  {
    title: "Financial stability",
    body: "A long-term investment company that holds and stewards what it develops.",
  },
  {
    title: "Professionalism",
    body: "Experienced leadership delivering with clarity, creativity and a strong sense of place.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-ink-foreground">
        <div className="shell grid items-end gap-14 pt-36 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:pt-44 lg:pb-28">
          <div>
            <p className="rise text-[0.65rem] font-semibold tracking-[0.34em] text-ink-foreground/70 uppercase">
              Los Angeles · Est. 2003
            </p>
            <h1
              className="rise mt-8 font-display text-5xl leading-[1.03] text-ink-foreground sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "120ms" }}
            >
              Real estate shaped
              <br />
              by design, held
              <br />
              for the long term.
            </h1>
            <div
              className="rise mt-12 border-t border-ink-foreground/20 pt-8"
              style={{ animationDelay: "240ms" }}
            >
              <p className="max-w-xl text-base leading-relaxed text-ink-foreground/75">
                Metro City Builders invests in and develops state-of-the-art medical facilities,
                micro-hospitals, mixed-use and multifamily communities across Southern California.
              </p>
              <Link
                to="/our-projects"
                className="mt-8 inline-flex w-fit items-center gap-3 border border-ink-foreground/45 px-8 py-4 text-[0.7rem] font-semibold tracking-[0.22em] text-ink-foreground uppercase transition-colors hover:bg-ink-foreground hover:text-ink"
              >
                View the portfolio
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div
            className="rise ml-auto w-full max-w-[560px] overflow-hidden"
            style={{ animationDelay: "320ms" }}
          >
            <img
              src="/images/hero-a.jpg"
              alt="A Metro City Builders development in Southern California"
              width={650}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="shell py-28 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">About Metro City Builders</p>
            <h2 className="mt-8 font-display text-4xl leading-[1.1] sm:text-5xl">
              Over twenty years of high-quality residential and commercial development.
            </h2>
          </Reveal>
          <Reveal
            delay={120}
            className="space-y-7 text-[1.0625rem] leading-[1.8] text-muted-foreground"
          >
            <p>
              Metro City Builders is a Los Angeles-based real estate development firm with over 20
              years of experience delivering high-quality residential and commercial projects.
              Founded by Principal and CEO Tony Zeng, the firm has specialized since 2003 in the
              investment and development of state-of-the-art medical facilities, micro-hospitals,
              and multifamily communities.
            </p>
            <p>
              With a strong presence across Southern California, the firm is recognized for its
              commitment to design excellence, innovation, and community-focused development. Each
              project is thoughtfully planned and executed to enhance the built environment while
              meeting the needs of a dynamic and growing population.
            </p>
            <Link
              to="/about-us"
              className="inline-block border-b border-foreground pb-1 text-[0.72rem] font-semibold tracking-[0.2em] text-foreground uppercase transition-colors hover:border-bronze hover:text-bronze"
            >
              Our history
            </Link>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-px border-y border-hairline bg-hairline sm:grid-cols-3">
          {[
            { k: "20+", v: "Years of development" },
            { k: "4", v: "Counties active" },
            { k: "2018", v: "CA Small Business of the Year" },
          ].map((s, i) => (
            <Reveal key={s.k} delay={i * 100}>
              <div className="h-full bg-background px-2 py-12 text-center">
                <p className="font-display text-6xl text-foreground">{s.k}</p>
                <p className="mt-4 text-[0.68rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  {s.v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-card py-28 lg:py-36">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Expertise</p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.12] sm:text-5xl">
              Four disciplines, one standard of execution.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Medical & Micro-Hospitals",
                b: "State-of-the-art clinical, surgical and multifunctional medical facilities built around physicians and patients.",
              },
              {
                t: "Mixed-Use",
                b: "Residential density paired with ground-floor retail in walkable, transit-adjacent neighborhoods.",
              },
              {
                t: "Multifamily & Residential",
                b: "Townhomes, condominiums and detached homes designed for families at any stage.",
              },
              {
                t: "Senior, Office & Retail",
                b: "Senior communities, office, retail and light industrial properties held as long-term investments.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 90}>
                <div className="h-full bg-card p-9">
                  <span className="font-display text-2xl text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 text-lg font-medium tracking-tight text-foreground">{c.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="shell py-28 lg:py-40">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.12] sm:text-5xl">
                Featured developments
              </h2>
            </div>
            <Link
              to="/our-projects"
              className="border-b border-foreground pb-1 text-[0.72rem] font-semibold tracking-[0.2em] uppercase transition-colors hover:border-bronze hover:text-bronze"
            >
              All projects
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 space-y-24">
          {featured.map((p, i) => (
            <Reveal key={p.slug}>
              <Link
                to="/our-projects/$slug"
                params={{ slug: p.slug }}
                className="group grid items-center gap-10 lg:grid-cols-2"
              >
                <div
                  className={`w-full max-w-[600px] overflow-hidden bg-muted ${i % 2 === 1 ? "lg:order-2 lg:ml-auto" : ""}`}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={650}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>

                <div className={i % 2 === 1 ? "lg:order-1 lg:pr-12" : "lg:pl-12"}>
                  <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-bronze uppercase">
                    {p.category} · {p.location}
                  </p>
                  <h3 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">{p.name}</h3>
                  <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{p.summary}</p>
                  <span className="mt-8 inline-block border-b border-foreground pb-1 text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors group-hover:border-bronze group-hover:text-bronze">
                    View project
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-ink py-28 text-ink-foreground lg:py-40">
        <div className="shell">
          <Reveal>
            <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-bronze uppercase">
              Development approach
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.12] text-ink-foreground sm:text-5xl">
              A comprehensive approach — from land acquisition through construction management.
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-14 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <Reveal key={a.step} delay={i * 100}>
                <div className="border-t border-ink-foreground/20 pt-7">
                  <span className="text-[0.7rem] font-semibold tracking-[0.24em] text-bronze">
                    {a.step}
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-ink-foreground">{a.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-foreground/60">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="shell py-28 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Why Metro City</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.12] sm:text-5xl">
              Strengths built over two decades.
            </h2>
            <img
              src="/images/people.jpg"
              alt="The Metro City Builders team on site"
              loading="lazy"
              width={650}
              className="mt-12 hidden w-full max-w-[460px] object-cover lg:block"
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="divide-y divide-hairline border-y border-hairline">
              {strengths.map((s) => (
                <div key={s.title} className="grid gap-3 py-8 sm:grid-cols-[1fr_1.4fr]">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">{s.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-ink-foreground/15 bg-ink">
        <div className="shell relative py-28 text-center lg:py-40">
          <Reveal>
            <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-bronze uppercase">
              Partner with us
            </p>
            <h2 className="mx-auto mt-8 max-w-3xl font-display text-4xl leading-[1.1] text-ink-foreground sm:text-6xl">
              Let's discuss your next development.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-ink-foreground/70">
              We work with landowners, physicians, institutions and public agencies on build-to-suit
              and joint-venture opportunities across Southern California.
            </p>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-3 border border-ink-foreground/50 px-10 py-4 text-[0.7rem] font-semibold tracking-[0.22em] text-ink-foreground uppercase transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              Contact the team
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
