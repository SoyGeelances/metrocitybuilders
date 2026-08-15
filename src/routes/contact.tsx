import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { contact } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Metro City Builders" },
      {
        name: "description",
        content:
          "Contact Metro City Builders at 1211 Center Court Dr #208, Covina CA 91724 or info@metrocitybuilders.com.",
      },
      { property: "og:title", content: "Contact — Metro City Builders" },
      {
        property: "og:description",
        content:
          "Reach the Metro City Builders team about developments, partnerships and build-to-suit opportunities.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-hairline pt-40 pb-16">
        <div className="shell">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.06] sm:text-7xl">
            Start a conversation.
          </h1>
        </div>
      </section>

      <section className="shell py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <dl className="divide-y divide-hairline border-y border-hairline">
              <div className="py-8">
                <dt className="text-[0.62rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
                  Office
                </dt>
                <dd className="mt-3 font-display text-2xl leading-snug">{contact.address}</dd>
              </div>
              <div className="py-8">
                <dt className="text-[0.62rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
                  Email
                </dt>
                <dd className="mt-3 font-display text-2xl">
                  <a
                    href={`mailto:${contact.email}`}
                    className="transition-colors hover:text-bronze"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
            </dl>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block border border-foreground px-8 py-4 text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-background"
            >
              Open in maps
            </a>
          </Reveal>
          <Reveal delay={120}>
            <img
              src="/images/hero-b.jpg"
              alt="A Metro City Builders development"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
