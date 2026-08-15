import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Metro City Builders" },
      {
        name: "description",
        content:
          "One of Southern California's fastest growing real estate investors and developers, based in Los Angeles County and active since 2003.",
      },
      { property: "og:title", content: "About Us — Metro City Builders" },
      {
        property: "og:description",
        content:
          "Our history, philosophy and comprehensive approach to real estate development across Southern California.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-hairline pt-40 pb-16">
        <div className="shell">
          <p className="eyebrow">About us</p>
          <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.06] sm:text-7xl">
            One of Southern California's fastest growing developers.
          </h1>
        </div>
      </section>

      <div className="relative h-[52vh] overflow-hidden bg-ink">
        <img
          src="/images/construction.jpg"
          alt="A Metro City Builders project under construction"
          className="h-full w-full object-cover"
        />
      </div>

      <section className="shell py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <p className="eyebrow">Our history</p>
          </Reveal>
          <Reveal
            delay={100}
            className="space-y-7 text-[1.0625rem] leading-[1.9] text-muted-foreground"
          >
            <p>
              Metro City Builders is one of Southern California's fastest growing real estate
              investors and developers. Based in Los Angeles County, CA, and active in Orange,
              Riverside, and San Bernardino Counties, MCB specializes in investment and development
              of state-of-the-art mixed-use, Senior, apartment communities, office, retail, and
              light industrial properties since 2003.
            </p>
            <p>
              Founded by Principal and CEO Tony Zeng, the firm has grown into a developer known for
              design excellence, innovation and community-focused work — projects delivered with
              clarity, creativity and a strong sense of place.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24 text-ink-foreground lg:py-32">
        <div className="shell text-center">
          <Reveal>
            <p className="mx-auto max-w-4xl font-display text-4xl leading-[1.25] text-ink-foreground italic sm:text-5xl">
              "Artistic in everything we touch."
            </p>
            <p className="mt-10 text-[0.68rem] font-semibold tracking-[0.24em] text-bronze uppercase">
              Thomas Kim, Construction Director
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <p className="eyebrow">Development approach</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.14] sm:text-5xl">
              A comprehensive approach, held for the long term.
            </h2>
            <p className="mt-8 text-[1.0625rem] leading-[1.9] text-muted-foreground">
              As a long-term investment company, as well as a developer, MCB takes a comprehensive
              approach to real estate development by acquiring the land, developing plans, securing
              entitlements, arranging financing and managing the construction of developments,
              primarily for our own account and at times in conjunction with select partners or
              institutions. We serve companies or public agencies requiring build-to-suit commercial
              or industrial property and individual residential or commercial tenants.
            </p>
            <p className="mt-6 text-[1.0625rem] leading-[1.9] text-muted-foreground">
              At MCB Companies, we have built an industry-wide reputation for sustainable
              development, diverse product types, financial stability, and professionalism.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src="/images/people.jpg"
              alt="The Metro City Builders team"
              loading="lazy"
              className="w-full object-cover"
            />
            <div className="mt-10 divide-y divide-hairline border-y border-hairline">
              {[
                ["Since", "2003"],
                ["Headquarters", "Los Angeles County, CA"],
                ["Active in", "Orange, Riverside, San Bernardino"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-5">
                  <span className="text-[0.62rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                    {k}
                  </span>
                  <span className="text-right text-sm text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-card py-24 lg:py-32">
        <div className="shell grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <img
              src="/images/award.png"
              alt="California Small Business of the Year 2018 award"
              loading="lazy"
              className="w-full max-w-lg object-contain"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Awards</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.14]">
              California Small Business of the Year, 2018
            </h2>
            <p className="mt-8 leading-[1.9] text-muted-foreground">
              Metro City Builders extremely honored to receive this recognition from State of
              California, which is an excellent morale-booster that will encourage us to continue
              doing our best work. We will of course continue to do our very best for our community.
            </p>
            <Link
              to="/leadership"
              className="mt-10 inline-block border-b border-foreground pb-1 text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors hover:border-bronze hover:text-bronze"
            >
              Meet the leadership
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
