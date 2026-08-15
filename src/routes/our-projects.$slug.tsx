import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/our-projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Metro City Builders" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — Metro City Builders`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <div className="shell flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="font-display text-5xl">Project not found</h1>
      <Link
        to="/our-projects"
        className="mt-8 border-b border-foreground pb-1 text-[0.7rem] font-semibold tracking-[0.2em] uppercase"
      >
        Back to portfolio
      </Link>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-ink">
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="shell relative pt-40 pb-16">
          <p className="rise text-[0.65rem] font-semibold tracking-[0.28em] text-bronze uppercase">
            {project.category} · {project.status}
          </p>
          <h1
            className="rise mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-ink-foreground sm:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            {project.name}
          </h1>
          <p className="rise mt-6 text-ink-foreground/70" style={{ animationDelay: "200ms" }}>
            {project.location}
          </p>
        </div>
      </section>

      <section className="shell py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <p className="font-display text-3xl leading-[1.3] text-foreground sm:text-[2.1rem]">
              {project.summary}
            </p>
            <p className="mt-10 text-[1.0625rem] leading-[1.9] text-muted-foreground">
              {project.description}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <dl className="divide-y divide-hairline border-y border-hairline">
              {project.facts.map((f: { label: string; value: string }) => (
                <div key={f.label} className="py-6">
                  <dt className="text-[0.62rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
                    {f.label}
                  </dt>
                  <dd className="mt-2 text-lg text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/contact"
              className="mt-10 inline-block border border-foreground px-8 py-4 text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-background"
            >
              Inquire about this project
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-3xl sm:text-4xl">More developments</h2>
            <Link
              to="/our-projects"
              className="border-b border-foreground pb-1 text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors hover:border-bronze hover:text-bronze"
            >
              All projects
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/our-projects/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl leading-tight">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
