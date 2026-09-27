const OurStory = () => {
    const storyStats = [
        { value: "2025", label: "Founded", tone: "teal" },
        { value: "3", label: "Products", tone: "navy" },
        { value: "Kathmandu", label: "HQ", tone: "white" },
        { value: "7+", label: "Team Members", tone: "gold" },
    ];
    return (
        <section className="section about-story-section">
            <div className="site-container about-story-layout">
                <div className="about-story-heading">
                    <span className="eyebrow">Our story</span>
                    <h2>From a chautari to a digital powerhouse</h2>
                    <p>
                        Digital Chautari began with the idea that meaningful ideas deserve space, clarity, and momentum. Inspired by the chautari, a place for conversation, exchange, and connection, we bring strategy, design, development, and storytelling together to help good ideas move forward.
                    </p>
                </div>

                <div className="story-stats-grid grid-2">
                    {storyStats.map((stat) => (
                        <div key={stat.label} className={`story-tile tile-${stat.tone}`}>
                            <span>{stat.label}</span>
                            <strong>{stat.value}</strong>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurStory