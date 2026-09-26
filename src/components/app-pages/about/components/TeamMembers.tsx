import { SectionHeading } from '@/src/components/common/site'
import Image from 'next/image'
import React from 'react'

const TeamMembers = () => {

    const teamMembers = [
        {
            role: "Founder & CEO",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6x2bfgOZPjTgmms2hlmyqFBRDO0wshoJdYfizxserw&s",
        },
        {
            role: "Co-Founder & COO",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6x2bfgOZPjTgmms2hlmyqFBRDO0wshoJdYfizxserw&s",
        },
        {
            role: "Front-End Developer",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6x2bfgOZPjTgmms2hlmyqFBRDO0wshoJdYfizxserw&s",
        },
        {
            role: "Back-End Developer",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6x2bfgOZPjTgmms2hlmyqFBRDO0wshoJdYfizxserw&s",
        },
        {
            role: "Marketing Lead",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6x2bfgOZPjTgmms2hlmyqFBRDO0wshoJdYfizxserw&s",
        },
        {
            role: "Sales Executive",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6x2bfgOZPjTgmms2hlmyqFBRDO0wshoJdYfizxserw&s",
        },
        {
            role: "Business Development Officer",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6x2bfgOZPjTgmms2hlmyqFBRDO0wshoJdYfizxserw&s",
        },
    ];
    return (
        <div>
            <section className="section">
                <div className="site-container">
                    <SectionHeading eyebrow="Our team" title="The people making it happen." />
                    <section className="section">
                        <div className="site-container">
                            <SectionHeading
                                eyebrow="Our team"
                                title="The people making it happen."
                            />

                            <div className="grid grid-2 md:grid-cols-4">
                                {teamMembers.map((member, index) => (
                                    <article key={member.role} className="team-card">
                                        <div className="team-avatar">
                                            <Image
                                                src={member.image}
                                                alt={member.role}
                                                width={300}
                                                height={300}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <p>{member.role}</p>
                                        <span>Team Member {index + 1}</span>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default TeamMembers
