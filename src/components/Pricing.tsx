import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, MessageCircle, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919959601528?text=Hi%20Mazent%2C%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20business.";

const plans = [
  {
    name: "Basic",
    price: "₹3,999",
    desc: "Perfect for getting started online",
    popular: false,
    features: [
      "Single-page responsive website",
      "Mobile-optimized design",
      "WhatsApp button integration",
      "Basic SEO setup",
      "Delivery in 48 hours",
    ],
  },
  {
    name: "Standard",
    price: "₹5,999",
    desc: "Most popular for local businesses",
    popular: true,
    features: [
      "Multi-page website (up to 5)",
      "Premium modern design",
      "WhatsApp & call integration",
      "Google Business SEO",
      "Contact form",
      "Delivery in 24–48 hours",
    ],
  },
  {
    name: "Premium",
    price: "₹7,999",
    desc: "Complete digital presence",
    popular: false,
    features: [
      "Unlimited pages",
      "Custom premium design",
      "WhatsApp, call & email integration",
      "Advanced SEO & Google Maps",
      "Social media integration",
      "Priority support",
      "Delivery in 24 hours",
    ],
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-36 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[180px]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-label mb-6 inline-flex">Pricing</span>
          <h2 className="font-display text-3xl md:text-[3.2rem] font-bold leading-[1.1] tracking-[-0.02em]">
            Simple, <span className="gradient-text">Affordable</span> Plans
          </h2>
          <p className="mt-5 text-muted-foreground max-w-[480px] mx-auto font-light">
            No hidden fees. No monthly subscriptions. One-time payment — your website is yours forever.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1050px] mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-1 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/10 to-primary/5 border-primary/30 shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.25)]"
                  : "glass-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                  <Star className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-lg font-semibold mb-1">{plan.name}</h3>
                <p className="text-xs text-muted-foreground/60 font-light">{plan.desc}</p>
              </div>

              <div className="mb-8">
                <span className="font-display text-4xl font-bold gradient-text">{plan.price}</span>
                <span className="text-sm text-muted-foreground/50 ml-2">one-time</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-foreground/70">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-light">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "cta" : "whatsapp"}
                className="w-full h-12 rounded-xl text-sm"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" /> Get Your Website Now
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-10 text-sm text-primary/60 font-medium flex items-center justify-center gap-2"
        >
          <Zap className="w-4 h-4" />
          Limited slots available — Book your spot now!
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
