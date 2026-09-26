"use client"

import React from 'react'
import { Pricing } from './components/Pricing'
import Industries from './components/Industries'
import Benefits from './components/Benefits'
import { Sparkles } from 'lucide-react'
import { Action } from '../../common/site'
import OurCapiblities from './components/OurCapiblities'

const ServicesPage = () => {
    return (
        <div>
            <OurCapiblities />
            <Pricing />
            <Industries />
            <Benefits />

            {/* Closing CTA */}
            <section className="section">
                <div className="site-container">
                    <div className="join-cta">
                        <Sparkles size={28} />
                        <h2>Let's find the right service for you</h2>
                        <Action href="/contact" variant="light">
                            Book a Consultation
                            {/* <ArrowRight size={16} /> */}
                        </Action>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesPage