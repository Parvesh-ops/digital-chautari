import { SectionHeading } from '@/src/components/common/site'
import { AboutRoadmap } from '@/src/constants/About'
import React from 'react'

const Roadmap = () => {
    return (
        <div>

            <section className="dark-section section">
                <div className="site-container">
                    <SectionHeading eyebrow="Roadmap" title="How we built from idea to impact." light />
                    <div className="timeline">
                        {AboutRoadmap.map((item, index) => (
                            <div key={`${item.title}-${item.year}`} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                                <span className="year-pill">{item.year}</span>
                                <span className="timeline-dot" aria-hidden="true" />
                                <div className="timeline-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Roadmap