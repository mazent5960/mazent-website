import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, ArrowRight, Mail } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_URL = "https://wa.me/919959601528?text=Hi%20Mazent%2C%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20business.";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    if (!name || !phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    if (name.length > 100 || phone.length > 20 || message.length > 1000) {
      toast.error("Input too long.");
      return;
    }

    const waText = encodeURIComponent(`Hi Mazent, I'm ${name}. Phone: ${phone}. ${message}`);
    window.open(`https://wa.me/919959601528?text=${waText}`, "_blank");
    toast.success("Redirecting to WhatsApp!");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6 inline-flex">Contact</span>
          <h2 className="font-display text-3xl md:text-[3.2rem] font-bold leading-[1.1] tracking-[-0.02em]">
            Let's <span className="gradient-text">Talk</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-[450px] mx-auto font-light">
            Ready to grow your business? Reach out and let's build something great.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[480px] mx-auto"
        >
          {/* Primary CTA */}
          <div className="text-center mb-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="whatsapp" size="lg" className="text-sm px-10 h-14 rounded-full shadow-[0_8px_30px_-6px_rgba(37,211,102,0.3)]" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <Button variant="cta" size="lg" className="text-sm px-10 h-14 rounded-full" asChild>
              <a href="mailto:mazent.5960@gmail.com">
                <Mail className="w-5 h-5" /> Email Us
              </a>
            </Button>
          </div>

          <div className="relative flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-[11px] text-muted-foreground/50 uppercase tracking-[0.15em] font-medium">or send a message</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="bg-secondary/30 border-border/30 h-12 rounded-xl text-sm focus:border-primary/40 transition-colors"
            />
            <Input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={20}
              className="bg-secondary/30 border-border/30 h-12 rounded-xl text-sm focus:border-primary/40 transition-colors"
            />
            <Textarea
              placeholder="Your Message (optional)"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={4}
              className="bg-secondary/30 border-border/30 rounded-xl text-sm resize-none focus:border-primary/40 transition-colors"
            />
            <Button variant="cta" type="submit" className="w-full h-12 rounded-xl text-sm">
              <Send className="w-4 h-4" /> Send via WhatsApp
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
