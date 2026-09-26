"use client"

import { Sparkles } from "lucide-react";
import MissionVision from "./components/MissionVision";
import OurStory from "./components/OurStory";
import Roadmap from "./components/Roadmap";
import TeamMembers from "./components/TeamMembers";
import TrustItems from "./components/TrustItems";
import { Values } from "./components/values";
import { Action } from "../../common/site";


const About = () => {
    return (
        <>
            <OurStory />
            <MissionVision />
            <Values />
            <TrustItems />
            <TeamMembers />
            <Roadmap />
            <section className="section">
                <div className="site-container">
                    <div className="join-cta">
                        <Sparkles size={28} />
                        <h2>Want to join our journey?</h2>
                        <Action href="/contact" variant="light">
                            Get in Touch
                            {/* <ArrowRight size={16} /> */}
                        </Action>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;