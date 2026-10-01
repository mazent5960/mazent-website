import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Sama Groups Website",
    desc: "A professional corporate website built for an industrial company to showcase services, operations, and projects.",
    href: "https://samagroups.in",
    label: "Industrial / Corporate",
    tags: ["Services", "Operations", "Projects"],
  },
  {
    title: "Modern Cafe Website Design",
    desc: "A modern and visually appealing website created for a cafe to showcase menu, brand story, and attract more customers.",
    href: "https://fantastic-tulumba-e63d5f.netlify.app/#story",
    label: "Cafe / Hospitality",
    tags: ["Menu", "Brand Story", "Local Footfall"],
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[160px]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-label mb-6 inline-flex">Our Work</span>
          <h2 className="font-display text-3xl md:text-[3.2rem] font-bold leading-[1.1] tracking-[-0.02em]">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-[500px] mx-auto font-light">
            Real results for real businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-card p-7 flex flex-col justify-between hover:-translate-y-2 transition-all duration-600 relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/60 via-accent/50 to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div>
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary/70">
                  {p.label}
                </span>
                <h3 className="text-xl font-display font-semibold mt-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 font-light">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-[0.18em] px-3 py-1 rounded-full border border-primary/15 bg-primary/5 text-primary/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Button variant="cta" size="sm" className="mt-6 rounded-full w-fit" asChild>
                <a href={p.href} target="_blank" rel="noreferrer">
                  View Demo <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
