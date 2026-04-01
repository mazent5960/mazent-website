import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919959601528?text=Hi%20Mazent%2C%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20business.";

const reviews = [
  {
    name: "Ravi",
    role: "Gym Owner",
    text: "Before Mazent, we had zero online presence. Now members find us on Google and sign up through WhatsApp. Our membership grew 3x in just 2 months. Best investment I've ever made for my gym!",
    initials: "RK",
    rating: 5,
  },
  {
    name: "Suresh",
    role: "Shop Owner",
    text: "I was scared of technology, but Mazent made it so simple. They built my store's website in 2 days! Now customers call me directly from the website. I wish I had done this years ago.",
    initials: "SK",
    rating: 5,
  },
  {
    name: "Meena",
    role: "Restaurant Owner",
    text: "Our restaurant was struggling to get new customers. After Mazent built our website with the menu and WhatsApp ordering, we started getting 10+ new orders every single day. Absolutely worth every rupee!",
    initials: "MD",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-36 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-label mb-6 inline-flex">Testimonials</span>
          <h2 className="font-display text-3xl md:text-[3.2rem] font-bold leading-[1.1] tracking-[-0.02em]">
            Real Results from <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-[480px] mx-auto font-light">
            Don't just take our word for it — hear from business owners like you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 relative group hover:-translate-y-1 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6" />

              <div className="flex gap-0.5 mb-5">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/70 text-sm leading-[1.8] mb-7 font-light italic">
                "{r.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xs font-semibold text-primary border border-primary/10">
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-primary/60 font-medium">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-14"
        >
          <Button variant="whatsapp" size="lg" className="text-sm px-10 h-14 rounded-full shadow-[0_8px_30px_-6px_rgba(37,211,102,0.3)]" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" /> Join Our Happy Clients
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
