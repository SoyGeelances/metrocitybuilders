import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { leaders } from "@/lib/site-data";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Metro City Builders" },
      {
        name: "description",
        content:
          "Meet the leadership team of Metro City Builders, led by Chairman & CEO Tony Zeng.",
      },
      { property: "og:title", content: "Leadership — Metro City Builders" },
      {
        property: "og:description",
        content:
          "The executives and directors guiding Metro City Builders' development work across Southern California.",
      },
    ],
  }),
  component: LeadershipPage,
});

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

function LeadershipPage() {
  return (
    <>
      <section className="border-b border-hairline pt-40 pb-16">
        <div className="shell">
          <p className="eyebrow">Leadership</p>
          <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.06] sm:text-7xl">
            Experienced leadership behind every development.
          </h1>
          <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
            Metro City Builders is guided by a team of executives and directors spanning
            construction, design, project delivery and sales.
          </p>
        </div>
      </section>

      <div className="relative h-auto overflow-hidden bg-ink">
        <img
          src="/images/team-mcb.webp"
          alt="The Metro City Builders leadership team"
          className="h-full w-full object-cover max-w-[900px] mx-auto"
        />
      </div>

      <section className="shell py-24 lg:py-32 max-w-[1180px]">
        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={(i % 3) * 90}>
              <article className="group">
                <div className="overflow-hidden bg-muted">
                  {l.image ? (
                    <img
                      src={l.image}
                      alt={l.name}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex aspect-[3/4] w-full items-center justify-center bg-sand">
                      <span className="font-display text-6xl text-muted-foreground">
                        {initials(l.name)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-6 border-t border-hairline pt-5">
                  <h2 className="font-display text-2xl leading-tight">{l.name}</h2>
                  <p className="mt-2 text-[0.65rem] font-semibold tracking-[0.22em] text-bronze uppercase">
                    {l.title}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="shell text-center">
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-[1.15]">
            Work with our team.
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-block border border-foreground px-10 py-4 text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-background"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
