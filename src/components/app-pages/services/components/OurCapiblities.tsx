import { SectionHeading } from '@/src/components/common/site'
import { ServiceRows } from '@/src/constants/Services'
import React from 'react'

const OurCapiblities = () => {
    return (
        <div>
            <section className="section" id="services">
                <div className="site-container">
                    <SectionHeading
                        eyebrow="Our capabilities"
                        title="One team, the full picture."
                        description="Choose a starting point or bring us a challenge that needs a little of everything."
                    />

                    <div>
                        {ServiceRows.map(
                            ({
                                icon: Icon,
                                title,
                                text,
                                subservices,
                            }) => (
                                <div className="service-row" key={title}>
                                    <div>
                                        <div className="icon-chip chip-teal">
                                            <Icon size={22} />
                                        </div>

                                        <h3>{title}</h3>

                                        <p>{text}</p>
                                    </div>

                                    <div className="subservice-grid">
                                        {subservices.map((service) => (
                                            <div
                                                className="subservice"
                                                key={service.title}
                                            >
                                                <strong>{service.title}</strong>

                                                <p>{service.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurCapiblities