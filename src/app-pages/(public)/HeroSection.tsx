import { HeartPulse, Rocket, Users } from "lucide-react";

import { Action, Hero, Stats } from "@/components/site";

const Items = [
    { value: "3", label: "Products", icon: <Rocket size={17} /> },
    { value: "6+", label: "Team members", icon: <Users size={17} /> },
    { value: "100%", label: "Commitment", icon: <HeartPulse size={17} /> },
]

export function HeroSection() {
    return (
        <Hero
            eyebrow="🚀 Welcome to Digital Chautari"
            title="We build digital bridges between ideas and impact"
            highlight="digital bridges"
            description="We are a creative technology company from Kathmandu, helping ambitious brands grow, tell better stories, and build products that matter."
        >
            <div className="hero-actions">
                <Action href="/services">Explore services</Action>
                <Action href="/products" variant="ghost">
                    View products
                </Action>
            </div>
            <Stats items={Items} />
        </Hero>
    );
}