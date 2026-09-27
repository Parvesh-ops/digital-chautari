import { SectionHeading } from '@/src/components/common/site'
import { AboutRoadmap } from '@/src/constants/About'
const Roadmap = () => {
    return (
        <section className="dark-section section">
            <div className="site-container">
                <SectionHeading eyebrow="Roadmap" title="How we built from idea to impact." light />
                <div className="timeline">
                    {AboutRoadmap.map((item, index) => (
                        <div key={`${item.title}-${item.year}`} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                            <span className="timeline-dot" aria-hidden="true" />
                            <div className="timeline-content">
                                <span className="year-pill">{item.year}</span>
                                <h3>{item.title}</h3>
                                <p>{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Roadmap