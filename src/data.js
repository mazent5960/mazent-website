import {
  Building2, ShoppingBag, MousePointerClick, RefreshCw, Gauge, Wrench,
  Zap, Smartphone, Search, BadgeIndianRupee, LifeBuoy, ShieldCheck,
} from "lucide-react";

export const NAV = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const SERVICES = [
  { icon: Building2, title: "Business Websites", text: "A professional home online that tells customers who you are, what you offer and how to reach you." },
  { icon: ShoppingBag, title: "E-commerce Stores", text: "Sell products online with easy checkout, secure payments and stock you can update yourself." },
  { icon: MousePointerClick, title: "Landing Pages", text: "One focused page built to turn ads and social traffic into calls, bookings and enquiries." },
  { icon: RefreshCw, title: "Website Redesign", text: "Old, slow or hard to use? We give your site a fresh look that builds trust instantly." },
  { icon: Gauge, title: "SEO & Speed Optimization", text: "Show up on Google when locals search, and load in under two seconds on any phone." },
  { icon: Wrench, title: "Maintenance & Support", text: "Updates, backups and small changes handled for you — so you can focus on your business." },
];

export const BENEFITS = [
  { icon: Zap, title: "Fast delivery", text: "Most sites go live in 7 days, not 7 weeks." },
  { icon: Smartphone, title: "Mobile-friendly", text: "Looks and works perfectly on every phone." },
  { icon: Search, title: "SEO-ready", text: "Built so customers can find you on Google." },
  { icon: BadgeIndianRupee, title: "Affordable pricing", text: "Clear, fixed prices. No hidden surprises." },
  { icon: LifeBuoy, title: "Ongoing support", text: "A real person to help whenever you need it." },
  { icon: ShieldCheck, title: "You own it", text: "Your site, domain and content — 100% yours." },
];

const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export const PROJECTS = [
  { name: "Spice Route Kitchen", tag: "Restaurant", img: u("photo-1517248135467-4c7edcad34c4") },
  { name: "CarePlus Family Clinic", tag: "Healthcare", img: u("photo-1519494026892-80bbd2d6fd0d") },
  { name: "Glow Studio Salon", tag: "Beauty & Salon", img: u("photo-1560066984-138dadb4c035") },
  { name: "Urban Threads", tag: "Retail Shop", img: u("photo-1441986300917-64674bd600d8") },
  { name: "BrightMinds Academy", tag: "Coaching Centre", img: u("photo-1524178232363-1fb2b075b655") },
  { name: "Brew & Bean Café", tag: "Café", img: u("photo-1554118811-1e0d58224f24") },
];

export const STEPS = [
  { title: "Discovery", text: "A free call to understand your business, customers and goals." },
  { title: "Design", text: "We design your pages and refine them with you until they feel right." },
  { title: "Development", text: "We build a fast, secure, mobile-friendly site and connect everything." },
  { title: "Launch & Support", text: "We go live, train you, and stay on hand for updates and help." },
];

export const PLANS = [
  {
    name: "Starter", price: "₹4,999", desc: "Perfect for getting online quickly.",
    features: ["Up to 5 pages", "Mobile-friendly design", "Contact form & WhatsApp button", "Basic SEO setup", "7-day delivery", "1 month free support"],
  },
  {
    name: "Business", price: "₹9,999", desc: "For businesses ready to grow.", popular: true,
    features: ["Up to 10 pages", "Custom premium design", "Google Maps & reviews", "Full on-page SEO", "Speed optimization", "Unlimited revisions", "3 months free support"],
  },
  {
    name: "Premium", price: "₹19,999", desc: "Online store or advanced features.",
    features: ["Unlimited pages", "E-commerce or booking system", "Payment gateway setup", "Blog & analytics", "Advanced SEO", "Priority support", "6 months free support"],
  },
];

export const TESTIMONIALS = [
  { name: "Priya Sharma", biz: "Glow Studio Salon", text: "Our bookings doubled in two months. Clients tell us they found us on Google and loved the website. Best investment we made this year.", rating: 5 },
  { name: "Dr. Rajesh Menon", biz: "CarePlus Family Clinic", text: "Professional, quick and patient with all my questions. Patients now book appointments online instead of calling all day.", rating: 5 },
  { name: "Arjun Patel", biz: "Spice Route Kitchen", text: "The site looks amazing on phones, and our online orders went up from day one. Delivered in just one week!", rating: 5 },
  { name: "Neha Kapoor", biz: "BrightMinds Academy", text: "Enquiries from parents increased a lot. Mazent explained everything simply and still helps us with updates.", rating: 5 },
];

export const FAQS = [
  { q: "How long does it take to build my website?", a: "Most Starter and Business websites are ready in 7–10 days. Larger stores or custom features usually take 2–3 weeks. We'll give you a clear timeline on our first call." },
  { q: "How much does a website cost?", a: "Our plans start at ₹4,999 with fixed, transparent pricing. If you need something specific, we'll send a free custom quote — no obligation." },
  { q: "Can I ask for changes and revisions?", a: "Absolutely. Every plan includes revisions during design, and the Business and Premium plans include unlimited revisions until you're happy." },
  { q: "Do you handle hosting and domain?", a: "Yes. We can register your domain, set up fast and secure hosting, and configure professional email — or work with what you already have." },
  { q: "Will I own my website?", a: "100%. Once the project is complete, the website, domain and all content belong to you. No lock-ins." },
  { q: "What support do I get after launch?", a: "Every plan includes free support after launch. After that, affordable monthly maintenance plans cover updates, backups and small changes." },
];
