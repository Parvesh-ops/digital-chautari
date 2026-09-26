"use client"

import React from 'react'
import { ProductSwitcher } from './components/ProductSwitcher'
import { Action, DarkBanner, Hero, } from "@/src/components/common/site";

const ProductPage = () => {
    return (
        <>
            <section className="section">
                <div className="site-container">
                    <ProductSwitcher />
                </div>
            </section>

            {/* Health-Tech Spotlight */}
            <DarkBanner
                eyebrow="Health-tech spotlight"
                title="Physio@Home — healthcare reimagined"
                text="Better access to quality physiotherapy, powered by thoughtful technology and a human touch."
            >
                <div style={{ marginTop: 26 }}>
                    <Action href="/contact" variant="light">
                        Explore Physio@Home
                    </Action>
                </div>
            </DarkBanner>
        </>
    )
}

export default ProductPage