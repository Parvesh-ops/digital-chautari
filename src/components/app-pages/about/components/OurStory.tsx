import React from 'react'

const OurStory = () => {
    const storyStats = [
        { value: "2025", label: "Founded", tone: "teal" },
        { value: "3", label: "Products", tone: "navy" },
        { value: "Kathmandu", label: "HQ", tone: "white" },
        { value: "7+", label: "Team Members", tone: "gold" },
    ];
    return (
        <div>

            <section className="section">
                <div className="site-container">
                    <div className="about-story-heading">
                        <span className="eyebrow">Our story</span>
                        <h2>From a chautari to a digital powerhouse</h2>
                        <p>
                            Digital Chautari began with the idea that meaningful ideas deserve space, clarity, and momentum. Inspired by the familiar chautari — a place for conversation, exchange, and connection — we built a company that brings together strategy, design, development, and storytelling under one roof.
                        </p>
                    </div>

                    <div className="grid grid-2  md:grid-cols-4">
                        {storyStats.map((stat, index) => (
                            <div key={stat.label} className={`story-tile tile-${stat.tone}`}>
                                <span>{stat.label}</span>
                                <strong>{stat.value}</strong>
                                {index === 1 && <small>Digital growth</small>}
                                {index === 3 && <small>Across teams</small>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurStory