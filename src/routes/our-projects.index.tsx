import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/our-projects/")({
  head: () => ({
    meta: [
      { title: "Our Projects — Metro City Builders" },
      {
        name: "description",
        content:
          "Medical plazas, mixed-use residences, townhomes and senior communities developed by Metro City Builders across Southern California.",
      },
      { property: "og:title", content: "Our Projects — Metro City Builders" },
      {
        property: "og:description",
        content:
          "Explore the Metro City Builders portfolio: medical, mixed-use, residential and senior living developments.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const visible = projects;

  return (
    <>
      <section className="border-hairline pt-40 pb-8">
        <div className="shell">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.06] sm:text-7xl">
            Current and completed developments.
          </h1>
        </div>
      </section>

      <section className="shell py-20 lg:py-28">
        <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 90}>
              <Link to="/our-projects/$slug" params={{ slug: p.slug }} className="group block">
                <div className="overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="mt-7 flex items-start justify-between gap-6 border-t border-hairline pt-6">
                  <div>
                    <p className="text-[0.62rem] font-semibold tracking-[0.24em] text-bronze uppercase">
                      {p.category} · {p.status}
                    </p>
                    <h2 className="mt-3 font-display text-3xl leading-tight">{p.name}</h2>
                    <p className="mt-3 text-sm text-muted-foreground">{p.location}</p>
                    <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                      {p.summary}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="mt-2 text-xl text-muted-foreground transition-transform duration-500 group-hover:translate-x-1 group-hover:text-bronze"
                  >
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
