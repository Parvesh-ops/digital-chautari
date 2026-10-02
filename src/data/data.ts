import { BlogPost, ProcessStep, Product, Sector, StatNumber, Testimonial } from "../types/types";


export const sectors: Sector[] = [
  "Healthcare",
  "E-Commerce",
  "Real Estate",
  "Education",
  "Tourism & Hospitality",
  "Media & Publishing",
];


export const products:  Product[] = [
  {
    icon: "🌱",
    name: "Eco",
    label: "Creative marketing agency",
    text: "Purposeful campaigns for brands ready to grow.",
    tone: "mint",
  },
  {
    icon: "◉",
    name: "One",
    label: "Content creation studio",
    text: "Stories, films, and visuals that stay with people.",
    tone: "gold",
  },
  {
    icon: "♡",
    name: "Physio@Home",
    label: "Health-tech platform",
    text: "Expert physiotherapy, wherever recovery happens.",
    tone: "teal",
  },
];

export const numbers: StatNumber[] = [
  { value: "250+", label: "Projects delivered" },
  { value: "40+", label: "Happy clients" },
  { value: "1M+", label: "Content views" },
  { value: "98%", label: "Client retention" },
];

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Discover", text: "Find the signal in the noise." },
  { number: "02", title: "Design", text: "Shape a direction people can feel." },
  { number: "03", title: "Develop", text: "Build with care and momentum." },
  { number: "04", title: "Deliver", text: "Launch, learn, and keep improving." },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "\u201CDigital Chautari brought clarity to a complex launch and made the whole process feel exciting.\u201D",
    name: "Aayush Shrestha",
    role: "Founder, Karkhana",
  },
  {
    quote:
      "\u201CThey listen deeply, move quickly, and care about the last 10% as much as we do.\u201D",
    name: "Mina Gurung",
    role: "Marketing Lead, Sano",
  },
  {
    quote:
      "\u201CThe team feels like an extension of ours. The work speaks for itself.\u201D",
    name: "Rohan Adhikari",
    role: "Director, Northstar",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Designing for trust",
    category: "Brand thinking",
    text: "How small signals can make a digital experience feel instantly human.",
    gradient: "linear-gradient(135deg,#0f9488,#b6d7bb)",
  },
  {
    title: "The content flywheel",
    category: "Content",
    text: "A practical rhythm for making better content without burning out.",
    gradient: "linear-gradient(135deg,#e0a930,#f8d88a)",
  },
  {
    title: "Care, made accessible",
    category: "Health-tech",
    text: "What we learned building a more human way to start physiotherapy.",
    gradient: "linear-gradient(135deg,#244c6a,#9bc9c6)",
  },
];

