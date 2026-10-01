import { useEffect, useState } from "react";
import { ArrowRight, ArrowUp, Check, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Clock, MessageCircle, RotateCcw, Star, Instagram, ExternalLink } from "lucide-react";
import { Navbar, Logo } from "./components/Navbar.jsx";
import { Contact } from "./components/Contact.jsx";
import { WelcomeSplash } from "./components/WelcomeSplash.jsx";
import { NAV, SERVICES, BENEFITS, PROJECTS, STEPS, PLANS, TESTIMONIALS, FAQS } from "./data.js";
import { cn } from "./cn.js";

const HERO_IMG = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=75";
const WHATSAPP = "https://wa.me/919959601528?text=" + encodeURIComponent("Hi Mazent, I'd like a free quote for a website.");

function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
    </div>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const n = TESTIMONIALS.length;
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % n), 7000);
    return () => clearInterval(t);
  }, [n]);
  const t = TESTIMONIALS[i];
  return (
    <div className="reveal relative mx-auto mt-14 max-w-3xl">
      <figure key={t.name} className="rounded-3xl border bg-card p-8 text-center shadow-soft sm:p-12" style={{ animation: "fade-in 0.5s ease" }}>
        <div className="flex justify-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="h-5 w-5 fill-star text-star" />)}
        </div>
        <blockquote className="mt-6 text-lg leading-relaxed sm:text-xl">"{t.text}"</blockquote>
        <figcaption className="mt-6"><p className="font-bold">{t.name}</p><p className="text-sm text-muted-foreground">{t.biz}</p></figcaption>
      </figure>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button className="btn btn-outline !p-2" onClick={() => setI((i - 1 + n) % n)} aria-label="Previous testimonial"><ChevronLeft /></button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((x, k) => <button key={x.name} onClick={() => setI(k)} aria-label={`Show testimonial ${k + 1}`} className={cn("h-2 rounded-full transition-all", k === i ? "w-6 bg-primary" : "w-2 bg-border")} />)}
        </div>
        <button className="btn btn-outline !p-2" onClick={() => setI((i + 1) % n)} aria-label="Next testimonial"><ChevronRight /></button>
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState(null);
  return (
    <div className="reveal mt-12 divide-y rounded-2xl border bg-card px-6 shadow-soft">
      {FAQS.map((f, k) => (
        <div key={f.q}>
          <h3>
            <button className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold" aria-expanded={open === k} onClick={() => setOpen(open === k ? null : k)}>
              {f.q}
              <ChevronDown className={cn("h-5 w-5 shrink-0 text-muted-foreground transition-transform", open === k && "rotate-180")} />
            </button>
          </h3>
          <div className="faq-body" data-open={open === k}><div><p className="pb-5 text-muted-foreground">{f.a}</p></div></div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.dataset.visible = "true"; obs.unobserve(e.target); } }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    const f = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", f, { passive: true });
    return () => { obs.disconnect(); window.removeEventListener("scroll", f); };
  }, []);

  return (
    <div id="top">
      <WelcomeSplash />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
          <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-gradient-primary opacity-15 blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-soft">
                <span className="h-2 w-2 rounded-full bg-whatsapp" /> Taking new projects this month
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
                Websites That Bring You <span className="text-gradient">Customers</span>, Not Just Visitors
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">We design and build fast, beautiful websites for local businesses — so more people call, book and buy from you.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary btn-lg shadow-lift">Get a Free Quote <ArrowRight /></a>
                <a href="#work" className="btn btn-outline btn-lg">View Our Work</a>
              </div>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
                {[{ i: CheckCircle2, t: "New studio — limited slots this month" }, { i: Clock, t: "7-day delivery" }, { i: RotateCcw, t: "Free revisions" }].map(({ i: I, t }) => (
                  <li key={t} className="flex items-center gap-2"><I className="h-5 w-5 text-primary" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="reveal relative">
              <div className="overflow-hidden rounded-3xl border bg-card shadow-lift">
                <img src={HERO_IMG} alt="Laptop showing a business website analytics dashboard" className="aspect-[4/3] w-full object-cover" width={1200} height={900} />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-secondary/50 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead eyebrow="Services" title="Everything you need to win customers online" text="From your first website to a full online store — we handle it all, start to finish." />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map(({ icon: I, title, text }) => (
                <article key={title} className="reveal hover-lift rounded-2xl border bg-card p-7 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground"><I className="h-6 w-6" /></span>
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead eyebrow="Why Mazent" title="Built for busy business owners" text="You run the business. We make sure it looks great online and brings in new customers." />
            <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map(({ icon: I, title, text }) => (
                <div key={title} className="reveal flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground"><I className="h-5 w-5" /></span>
                  <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-muted-foreground">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="bg-secondary/50 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead eyebrow="Our Work" title="Recent websites we're proud of" />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <article key={p.name} className="reveal hover-lift group overflow-hidden rounded-2xl border bg-card shadow-soft">
                  <div className="relative overflow-hidden">
                    <img src={p.img} alt={`${p.name} website preview`} loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 grid place-items-center bg-navy/70 opacity-0 transition-opacity group-hover:opacity-100">
                      <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-foreground">View Project <ExternalLink className="h-4 w-4" /></a>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <h3 className="font-bold">{p.name}</h3>
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{p.tag}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead eyebrow="Process" title="From idea to launch in 4 simple steps" />
            <ol className="relative mt-14 grid gap-8 md:grid-cols-4">
              <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-border md:block" />
              {STEPS.map((s, i) => (
                <li key={s.title} className="reveal relative">
                  <span className="relative grid h-12 w-12 place-items-center rounded-full bg-gradient-primary font-display text-lg font-bold text-primary-foreground shadow-lift">{i + 1}</span>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-secondary/50 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead eyebrow="Pricing" title="Simple, honest pricing" text="One-time payment. No hidden fees. Pick a plan or ask for a custom quote." />
            <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
              {PLANS.map((p) => (
                <div key={p.name} className={cn("reveal relative rounded-3xl border bg-card p-8 shadow-soft", p.popular && "border-primary shadow-lift lg:-mt-4 lg:pb-12")}>
                  {p.popular && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-4 py-1 text-xs font-semibold text-primary-foreground">Most Popular</span>}
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  <p className="mt-6 font-display text-4xl font-extrabold">{p.price}<span className="text-base font-medium text-muted-foreground"> one-time</span></p>
                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => <li key={f} className="flex gap-3 text-sm"><Check className="h-5 w-5 shrink-0 text-primary" />{f}</li>)}
                  </ul>
                  <a href="#contact" className={cn("btn btn-lg mt-8 w-full", p.popular ? "btn-primary" : "btn-outline")}>Get Started</a>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-muted-foreground">Need something different? <a href="#contact" className="font-semibold text-primary hover:underline">Ask for a custom quote</a> — it's free.</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-5">
            <SectionHead eyebrow="Testimonials" title="Loved by local businesses" />
            <Testimonials />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-secondary/50 py-24">
          <div className="mx-auto max-w-3xl px-5">
            <SectionHead eyebrow="FAQ" title="Questions? We've got answers" />
            <Faq />
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-24">
          <div className="reveal mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-navy px-8 py-16 text-center text-navy-foreground shadow-lift sm:px-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to get your business online?</h2>
            <p className="mx-auto mt-4 max-w-xl opacity-80">Book a free 15-minute call. We'll share ideas for your website and a clear price — no strings attached.</p>
            <a href="#contact" className="btn btn-primary btn-lg mt-8">Book a Free Call <ArrowRight /></a>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="border-t bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo footer />
            <p className="mt-4 max-w-sm opacity-70">Modern websites that help small and medium businesses get found, trusted and chosen.</p>
            <div className="mt-5 flex gap-3">
              <a href="https://www.instagram.com/mazent_solutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in a new tab)" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-colors hover:bg-accent hover:text-accent-foreground"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>
          <nav aria-label="Footer">
            <h3 className="font-bold">Quick links</h3>
            <ul className="mt-4 space-y-2 opacity-70">{NAV.map((n) => <li key={n.id}><a href={`#${n.id}`} className="hover:text-primary hover:opacity-100">{n.label}</a></li>)}</ul>
          </nav>
          <div>
            <h3 className="font-bold">Contact</h3>
            <ul className="mt-4 space-y-2 opacity-70">
              <li><a href="tel:+919959601528" className="hover:text-primary">+91 99596 01528</a></li>
              <li><a href="mailto:mazent.5960@gmail.com" className="hover:text-primary">mazent.5960@gmail.com</a></li>
              <li>Mon–Sat, 9am–7pm</li>
            </ul>
          </div>
        </div>
        <p className="border-t border-white/10 py-6 text-center text-sm opacity-70">© {new Date().getFullYear()} Mazent. All rights reserved.</p>
      </footer>

      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-lift transition-transform hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </a>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className={cn("btn btn-outline fixed bottom-24 right-6 z-40 !rounded-full !p-2.5 bg-card shadow-soft", showTop ? "opacity-100" : "pointer-events-none opacity-0")}>
        <ArrowUp />
      </button>
    </div>
  );
}
