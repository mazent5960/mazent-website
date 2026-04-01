import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Sparkles, Clock, Users, Zap } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919959601528?text=Hi%20Mazent%2C%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20business.";

const Hero = () => (
  <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden noise-overlay">
    <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[160px] animate-glow-pulse" />
    <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[140px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
    <div className="absolute top-[60%] left-[50%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "0.8s" }} />

    <div className="absolute inset-0 grid-pattern opacity-40" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background))_75%)]" />

    <div className="container mx-auto px-4 text-center relative z-10 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-label mb-4 inline-flex">
          <Sparkles className="w-3.5 h-3.5" />
          AI-Powered Web Solutions
        </span>
      </motion.div>

      {/* Urgency badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-glow-pulse">
          <Clock className="w-4 h-4" />
          Get your business online in 24–48 hours
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] max-w-[900px] mx-auto"
      >
        Grow Your Business{" "}
        <br className="hidden sm:block" />
        with <span className="gradient-text">AI-Powered</span> Websites
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mt-7 text-[clamp(1rem,2vw,1.2rem)] text-muted-foreground max-w-[600px] mx-auto leading-relaxed font-light"
      >
        We help local shops, gyms & restaurants get stunning websites that attract customers and grow revenue — fast, affordable, and powered by AI.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button variant="cta" size="lg" className="text-base px-10 h-16 rounded-full min-w-[240px] shadow-[0_8px_40px_-8px_hsl(var(--primary)/0.4)] hover:shadow-[0_12px_50px_-8px_hsl(var(--primary)/0.5)] transition-all duration-300" asChild>
          <a href="#contact">
            Get Your Website Now <ArrowRight className="w-5 h-5 ml-1" />
          </a>
        </Button>
        <Button variant="whatsapp" size="lg" className="text-base px-10 h-16 rounded-full min-w-[240px] shadow-[0_8px_30px_-6px_rgba(37,211,102,0.3)]" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </Button>
      </motion.div>

      {/* Limited slots urgency */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.6 }}
        className="mt-6 text-sm text-primary/70 font-medium flex items-center justify-center gap-2"
      >
        <Zap className="w-4 h-4" />
        Limited slots available — Get your website today!
      </motion.p>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="mt-16 flex flex-col items-center gap-4"
      >
        <div className="flex items-center gap-2 text-muted-foreground/70">
          <Users className="w-4 h-4 text-primary/60" />
          <span className="text-sm font-medium">Trusted by 50+ local businesses across India</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[13px] text-muted-foreground/60 font-medium">
          {["Fast 24h Delivery", "Affordable Pricing", "AI-Powered Design", "WhatsApp Ready"].map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default Hero;
