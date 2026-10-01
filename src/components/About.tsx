import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: TrendingUp, value: "3x", label: "Avg. Growth" },
  { icon: Target, value: "100%", label: "Satisfaction" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[680px] mx-auto text-center"
        >
          <span className="section-label mb-6 inline-flex">About Us</span>
          <h2 className="font-display text-3xl md:text-[3.2rem] font-bold leading-[1.1] tracking-[-0.02em]">
            We're <span className="gradient-text">Mazent</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-[1.8] font-light">
            A modern web agency dedicated to helping local businesses thrive online.
            We combine AI-powered design with deep understanding of what shops, gyms, and restaurants
            need to attract and convert customers. Premium websites, affordable prices.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[700px] mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-7 text-center group hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 transition-colors duration-500">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-display font-bold gradient-text">{s.value}</div>
              <div className="text-[13px] text-muted-foreground mt-1.5 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
