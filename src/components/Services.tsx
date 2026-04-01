import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Search, MessageCircle, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Modern, lightning-fast, and fully responsive websites that look stunning on every device and convert visitors into paying customers.",
    tag: "Design",
  },
  {
    icon: Search,
    title: "Google Visibility",
    description: "SEO optimization and local discovery so customers in your area find you first on Google Search and Maps.",
    tag: "SEO",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "One-tap WhatsApp buttons so customers can reach you instantly — zero friction, zero missed leads.",
    tag: "Growth",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/6 rounded-full blur-[180px]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-label mb-6 inline-flex">What We Do</span>
          <h2 className="font-display text-3xl md:text-[3.2rem] font-bold leading-[1.1] tracking-[-0.02em]">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-[500px] mx-auto font-light">
            Everything your business needs to dominate online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-600 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/0 group-hover:bg-primary/8 rounded-full blur-[60px] transition-all duration-700" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-500">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground/50 border border-border/50 px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  {s.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-60 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="text-muted-foreground text-sm leading-[1.7] font-light">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
