import { useState } from "react";
import { Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// Form submissions are emailed to this address via FormSubmit (no backend needed).
// The first submission triggers a one-time activation email to this inbox — click "Activate".
const NOTIFY_EMAIL = "mazent.5960@gmail.com";
const BUDGETS = ["Under ₹10,000", "₹10,000 – ₹20,000", "₹20,000 – ₹40,000", "₹40,000+", "Not sure yet"];

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name";
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = "Please enter a valid email";
  if (v.phone && !/^[0-9+\-\s()]*$/.test(v.phone)) e.phone = "Please enter a valid phone number";
  if (!v.message.trim()) e.message = "Tell us a little about your project";
  return e;
}

export function Contact() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "ok" | "fail"

  async function onSubmit(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    const v = Object.fromEntries(["name", "email", "phone", "business_type", "budget", "message"].map((k) => [k, String(fd.get(k) ?? "")]));
    if (fd.get("_honey")) return; // bot trap
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${NOTIFY_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New website enquiry from ${v.name}`,
          _template: "table",
          _captcha: "false",
          _replyto: v.email,
          Name: v.name,
          Email: v.email,
          Phone: v.phone || "—",
          "Business type": v.business_type || "—",
          Budget: v.budget || "—",
          Message: v.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === "false") throw new Error("failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("fail");
    } finally {
      setLoading(false);
    }
  }

  const err = (k) => errors[k] && <p className="mt-1 text-sm text-destructive">{errors[k]}</p>;

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-5">
        <div className="reveal lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Get your free quote</h2>
          <p className="mt-4 text-muted-foreground">Tell us about your business and we'll reply within 24 hours with ideas and a clear price. No pressure, no jargon.</p>
          <ul className="mt-8 space-y-5">
            {[
              { icon: Phone, label: "+91 99596 01528", href: "tel:+919959601528" },
              { icon: Mail, label: "mazent.5960@gmail.com", href: "mailto:mazent.5960@gmail.com" },
              { icon: MapPin, label: "Working with businesses across India" },
            ].map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground"><Icon className="h-5 w-5" /></span>
                {href ? <a href={href} className="font-medium hover:text-primary">{label}</a> : <span className="font-medium">{label}</span>}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} noValidate className="reveal grid gap-5 rounded-3xl border bg-card p-6 shadow-soft sm:grid-cols-2 sm:p-8 lg:col-span-3">
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <div><label htmlFor="name" className="text-sm font-medium">Name *</label><input id="name" name="name" maxLength={100} className="field" placeholder="Your name" />{err("name")}</div>
          <div><label htmlFor="email" className="text-sm font-medium">Email *</label><input id="email" name="email" type="email" maxLength={255} className="field" placeholder="you@business.com" />{err("email")}</div>
          <div><label htmlFor="phone" className="text-sm font-medium">Phone</label><input id="phone" name="phone" type="tel" maxLength={30} className="field" placeholder="+91 ..." />{err("phone")}</div>
          <div><label htmlFor="business_type" className="text-sm font-medium">Business type</label><input id="business_type" name="business_type" maxLength={100} className="field" placeholder="e.g. Restaurant, Clinic" /></div>
          <div className="sm:col-span-2">
            <label htmlFor="budget" className="text-sm font-medium">Budget range</label>
            <select id="budget" name="budget" defaultValue="" className="field">
              <option value="">Select a budget</option>
              {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2"><label htmlFor="message" className="text-sm font-medium">Message *</label><textarea id="message" name="message" maxLength={2000} rows={5} className="field" placeholder="What do you need help with?" />{err("message")}</div>
          <button type="submit" disabled={loading} className="btn btn-primary btn-lg sm:col-span-2">
            {loading && <Loader2 className="animate-spin" />} Get My Free Quote
          </button>
          {status === "ok" && <p role="status" className="flex items-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-medium text-accent-foreground sm:col-span-2"><CheckCircle2 className="h-5 w-5" /> Thanks! We'll get back to you within 24 hours.</p>}
          {status === "fail" && <p role="alert" className="flex items-center gap-2 rounded-xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive sm:col-span-2"><AlertCircle className="h-5 w-5" /> Something went wrong. Please try again or message us on WhatsApp.</p>}
        </form>
      </div>
    </section>
  );
}
