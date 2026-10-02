export type Sector =
| "Healthcare"
| "E-Commerce"
| "Real Estate"
| "Education"
| "Tourism & Hospitality"
| "Media & Publishing";

export type ProductTone = "mint" | "gold" | "teal";

export type Product = {
icon: string;
name: string;
label: string;
text: string;
tone: ProductTone;
};

export type StatNumber = {
value: string;
label: string;
};

export type ProcessStep = {
number: string;
title: string;
text: string;
};

export type Testimonial = {
quote: string;
name: string;
role: string;
};

export type BlogPost = {
title: string;
category: string;
text: string;
gradient: string;
};

export type HomeData = {
sectors: Sector[];
products: Product[];
numbers: StatNumber[];
processSteps: ProcessStep[];
testimonials: Testimonial[];
blogPosts: BlogPost[];
};
