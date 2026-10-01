import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919959601528?text=Hi%20Mazent%2C%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20business.";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-border/30 relative">
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-display font-bold gradient-text tracking-tight">Mazent</a>
          <p className="text-[13px] text-muted-foreground/60 mt-1.5 font-light">
            Grow your business with AI website
          </p>
        </div>

        <div className="flex items-center gap-6">
          {footerLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] text-muted-foreground/50 hover:text-foreground transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] text-primary/70 hover:text-primary transition-colors duration-300 font-medium"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href="mailto:mazent.5960@gmail.com"
            className="inline-flex items-center gap-2 text-[13px] text-primary/70 hover:text-primary transition-colors duration-300 font-medium"
          >
            <Mail className="w-4 h-4" /> mazent.5960@gmail.com
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border/20 text-center">
        <p className="text-[12px] text-muted-foreground/40 font-light">
          © {new Date().getFullYear()} Mazent. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
