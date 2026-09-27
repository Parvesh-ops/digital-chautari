import { SectionHeading } from '@/src/components/common/site'
import { Briefcase, Code2, Crown, Database, Megaphone, TrendingUp, Users } from 'lucide-react'

const TeamMembers = () => {

    const teamMembers = [
        { role: "Founder & CEO", icon: Crown },
        { role: "Co-Founder & COO", icon: Users },
        { role: "Front-End Developer", icon: Code2 },
        { role: "Back-End Developer", icon: Database },
        { role: "Marketing Lead", icon: Megaphone },
        { role: "Sales Executive", icon: Briefcase },
        { role: "Business Development Officer", icon: TrendingUp },
    ];
    return (
        <section className="section">
            <div className="site-container">
                <SectionHeading eyebrow="Our team" title="The people making it happen." />
                <div className="grid grid-2 md:grid-cols-4">
                    {teamMembers.map(({ role, icon: Icon }) => (
                        <article key={role} className="team-card">
                            <div className="team-avatar" aria-hidden="true">
                                <Icon size={24} strokeWidth={1.7} />
                            </div>
                            <h3>{role}</h3>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamMembers
