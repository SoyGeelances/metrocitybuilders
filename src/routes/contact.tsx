import { useState } from "react";
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
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "409bec85-bab7-4a7b-84ae-83d5bb21b3d6");
    formData.append("to_email", contact.email);
    formData.append("from_name", "Metro City Builders");
    formData.append("from_email", "noresponse@metrocitybuilders.com");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(
        data.success
          ? "Thank you. We will be in touch shortly."
          : "Something went wrong. Please try again.",
      );
      if (data.success) event.currentTarget.reset();
    } catch {
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

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

      <section className="shell pb-20">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <form onSubmit={handleSubmit} className="pt-8">
              <p className="eyebrow">Send an inquiry</p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[0.62rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 block w-full border-0 border-b border-input bg-transparent px-0 py-2.5 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-bronze focus:ring-0"
                  />
                </label>
                <label className="block">
                  <span className="text-[0.62rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Phone
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    className="mt-2 block w-full border-0 border-b border-input bg-transparent px-0 py-2.5 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-bronze focus:ring-0"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-[0.62rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="mt-2 block w-full border-0 border-b border-input bg-transparent px-0 py-2.5 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-bronze focus:ring-0"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-[0.62rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Subject
                  </span>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="mt-2 block w-full border-0 border-b border-input bg-transparent px-0 py-2.5 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-bronze focus:ring-0"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-[0.62rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    className="mt-2 block w-full resize-y border-0 border-b border-input bg-transparent px-0 py-2.5 text-base leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-bronze focus:ring-0"
                  />
                </label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 border border-foreground px-8 py-4 text-[0.7rem] font-semibold tracking-[0.2em] text-foreground uppercase transition-colors hover:bg-foreground hover:text-background disabled:cursor-wait disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send inquiry"}
              </button>
              {result && (
                <p role="status" className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {result}
                </p>
              )}
            </form>
          </Reveal>
          <Reveal delay={120}>
            <dl className="divide-y">
              <div className="py-7">
                <dt className="text-[0.62rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
                  Office
                </dt>
                <dd className="mt-3 font-display text-2xl leading-snug">{contact.address}</dd>
              </div>
              <div className="py-7">
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
              className="mt-8 inline-block border border-foreground px-8 py-4 text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-background"
            >
              Open in maps
            </a>
            <img
              src="/images/hero-b.jpg"
              alt="A Metro City Builders development"
              loading="lazy"
              className="mt-10 aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
