import { AboutMissionVision } from '@/src/constants/About'
import React from 'react'


const missionVision = () => {
    return (
        <>
            <section className="section">
                <div className="site-container">
                    <div className="grid grid-2">
                        {AboutMissionVision.map((item) => (
                            <article key={item.title} className="mission-card">
                                <div className="mission-icon">{item.icon}</div>
                                <span className="eyebrow">{item.title}</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default missionVision
