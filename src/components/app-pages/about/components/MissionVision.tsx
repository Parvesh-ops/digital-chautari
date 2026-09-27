import { AboutMissionVision } from '@/src/constants/About'
const MissionVision = () => {
    return (
        <section className="section about-purpose-section">
            <div className="site-container">
                <div className="section-heading">
                    <span className="eyebrow">What guides us</span>
                    <h2>Purpose with a clear direction.</h2>
                </div>
                <div className="grid grid-2">
                    {AboutMissionVision.map((item) => (
                        <article key={item.title} className="mission-card">
                            <div className="mission-icon" aria-hidden="true">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MissionVision
