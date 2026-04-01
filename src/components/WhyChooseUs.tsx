import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, IndianRupee, Store, Bot } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Delivery", desc: "Get your website live in days, not months.", accent: "from-primary to-accent" },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Premium quality at prices built for local businesses.", accent: "from-accent to-primary" },
  { icon: Store, title: "Built for Local", desc: "Designed specifically for shops, gyms & restaurants.", accent: "from-primary to-accent" },
  { icon: Bot, title: "AI-Powered", desc: "Leveraging AI for faster, smarter website creation.", accent: "from-accent to-primary" },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-label mb-6 inline-flex">Why Us</span>
          <h2 className="font-display text-3xl md:text-[3.2rem] font-bold leading-[1.1] tracking-[-0.02em]">
            Why Choose <span className="gradient-text">Mazent</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1000px] mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-7 text-center group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors duration-500">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-base mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
