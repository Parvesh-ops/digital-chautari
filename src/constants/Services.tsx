import { BarChart3, Building2, Code2, GraduationCap, HeartPulse, Megaphone, Newspaper, Palette, Plane, Search, Share2, ShoppingCart, Smartphone, Target } from "lucide-react";


export const ServiceRows = [
  {
    icon: Megaphone,
    title: "Digital marketing",
    text: "Turn attention into traction with a strategy that connects every channel.",
    subservices: [
      {
        title: "SEO & SEM",
        description: "Be found by the people looking for you.",
      },
      {
        title: "Social media marketing",
        description: "Build a community around your point of view.",
      },
      {
        title: "Paid advertising",
        description: "Spend smarter and learn faster.",
      },
      {
        title: "Analytics & reporting",
        description: "Know what is working and why.",
      },
    ],
  },
  {
    icon: Palette,
    title: "Content creation",
    text: "Create a visual language and content engine your audience wants to return to.",
    subservices: [
      {
        title: "Video production",
        description: "A thoughtful, flexible foundation for your goals.",
      },
      {
        title: "Photography",
        description: "A thoughtful, flexible foundation for your goals.",
      },
      {
        title: "Copywriting",
        description: "A thoughtful, flexible foundation for your goals.",
      },
      {
        title: "Creative direction",
        description: "A thoughtful, flexible foundation for your goals.",
      },
    ],
  },
  {
    icon: Code2,
    title: "Software development",
    text: "Design and develop digital products that are useful, scalable, and built to last.",
    subservices: [
      {
        title: "Web applications",
        description: "A thoughtful, flexible foundation for your goals.",
      },
      {
        title: "Mobile experiences",
        description: "A thoughtful, flexible foundation for your goals.",
      },
      {
        title: "Health-tech platforms",
        description: "A thoughtful, flexible foundation for your goals.",
      },
      {
        title: "Maintenance & support",
        description: "A thoughtful, flexible foundation for your goals.",
      },
    ],
  },
];

export const PricingPlans = [
  {
    name: "Starter",
    price: "Rs 15,000",
    period: "/mo",
    description:
      "For early-stage teams building a strong foundation.",
    features: [
      "Monthly strategy session",
      "Social media direction",
      "Performance snapshot",
      "Email support",
    ],
    action: "Choose starter",
    variant: "ghost" as const,
  },
  {
    name: "Professional",
    price: "Rs 45,000",
    period: "/mo",
    description:
      "For growing teams ready to make a bigger move.",
    features: [
      "Full-funnel strategy",
      "Content production",
      "Campaign management",
      "Monthly reporting",
    ],
    action: "Choose professional",
    variant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "For ambitious organizations with complex needs.",
    features: [
      "Dedicated project team",
      "Multi-channel programs",
      "Product engineering",
      "Priority support",
    ],
    action: "Talk to us",
    variant: "ghost" as const,
  },
];

export const Industries = [
  {
    name: "Healthcare",
    icon: <HeartPulse size={20} />,
    tone: "mint",
  },
  {
    name: "E-Commerce",
    icon: <ShoppingCart size={20} />,
    tone: "teal",
  },
  {
    name: "Real Estate",
    icon: <Building2 size={20} />,
    tone: "gold",
  },
  {
    name: "Education",
    icon: <GraduationCap size={20} />,
    tone: "lilac",
  },
  {
    name: "Tourism",
    icon: <Plane size={20} />,
    tone: "pink",
  },
  {
    name: "Media",
    icon: <Newspaper size={20} />,
    tone: "mint",
  },
];

export const Benefits = [
  "Dedicated project manager",
  "Agile development cycle",
  "Transparent pricing",
  "Post-launch support",
  "Scalable architecture",
  "Cross-platform expertise",
];