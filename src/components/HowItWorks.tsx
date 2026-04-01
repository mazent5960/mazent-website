import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, PenTool, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919959601528?text=Hi%20Mazent%2C%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20business.";

const steps = [
  {
    icon: Send,
    step: "01",
    title: "Send Your Details",
    desc: "Share your business name, services, and any preferences. That's all we need to get started.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "We Build Your Website",
    desc: "Our AI-powered team crafts a stunning, fast, mobile-ready website tailored to your business.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Go Live & Get Customers",
    desc: "Your website goes live within 24–48 hours. Start getting calls, messages, and orders instantly.",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-36 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-label mb-6 inline-flex">How It Works</span>
          <h2 className="font-display text-3xl md:text-[3.2rem] font-bold leading-[1.1] tracking-[-0.02em]">
            3 Simple <span className="gradient-text">Steps</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-[480px] mx-auto font-light">
            Getting your business online has never been easier. We handle everything for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-center relative"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/20 flex items-center justify-center relative">
                <s.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-lg">
                  {s.step}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground/70 leading-relaxed font-light max-w-[280px] mx-auto">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16"
        >
          <Button variant="cta" size="lg" className="text-sm px-10 h-14 rounded-full" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Get Started Now <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
