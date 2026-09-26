import { SectionHeading } from '@/src/components/common/site'
import { AboutTrustItems } from '@/src/constants/About'
import { ShieldCheck } from 'lucide-react'
import React from 'react'

const TrustItems = () => {
  return (
      <section className="dark-section section">
        <div className="site-container">
          <SectionHeading eyebrow="Quality & trust" title="Committed to quality & trust" light />
          <div className="grid grid-2  md:grid-cols-4">
            {AboutTrustItems.map((item) => (
              <div key={item} className="dark-card trust-card">
                <div className="trust-icon"><ShieldCheck size={18} /></div>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TrustItems