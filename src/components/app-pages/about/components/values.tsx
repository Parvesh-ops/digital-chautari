import { SectionHeading } from '@/src/components/common/site'
import { AboutValues } from '@/src/constants/About'
import React from 'react'

export const Values = () => {
  return (
      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Values" title="The principles behind our work." />
          <div className="grid grid-2  md:grid-cols-4">
            {AboutValues.map((value) => (
              <article key={value.name} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.name}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
  )
}
