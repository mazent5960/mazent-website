import { useCallback, useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NAV } from "../data.js";
import { cn } from "../cn.js";

export function Logo({ footer = false }) {
  return (
    <a href="#top" aria-label="Mazent home" className="inline-flex items-center">
      <img src="/images/mazent-logo-horizontal.svg" alt="Mazent" className={cn("h-10 w-auto dark:hidden", footer && "hidden")} />
      <img src="/images/mazent-logo-horizontal-white.svg" alt="" aria-hidden="true" className={cn("hidden h-10 w-auto dark:block", footer && "block")} />
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  const go = useCallback((id) => {
    setOpen(false);
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, []);

  useEffect(() => {
    if (!open) return;
    const esc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  const link = (id, cls) => ({ href: `#${id}`, onClick: (e) => { e.preventDefault(); go(id); }, className: cls });

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all", scrolled ? "border-b bg-background/85 backdrop-blur-lg" : "bg-transparent")}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a {...link(n.id, cn("rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-primary", active === n.id ? "bg-accent text-accent-foreground" : "text-muted-foreground"))}>{n.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost" onClick={toggleTheme} aria-label="Toggle dark mode">{dark ? <Sun /> : <Moon />}</button>
          <a {...link("contact", "btn btn-primary hidden sm:inline-flex")}>Get a Quote</a>
          <button className="btn btn-ghost lg:hidden" onClick={() => setOpen((o) => !o)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t bg-background px-5 pb-5 shadow-soft lg:hidden">
          <ul className="flex flex-col py-2">
            {NAV.map((n) => (
              <li key={n.id}><a {...link(n.id, cn("block rounded-lg px-3 py-3 font-medium", active === n.id && "bg-accent text-accent-foreground"))}>{n.label}</a></li>
            ))}
          </ul>
          <a {...link("contact", "btn btn-primary w-full")}>Get a Free Quote</a>
        </div>
      )}
    </header>
  );
}
