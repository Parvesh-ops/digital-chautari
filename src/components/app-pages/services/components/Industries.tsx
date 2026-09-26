import { IconCard, SectionHeading } from '@/src/components/common/site'
import { ServicesIndustries } from '@/src/constants/Services'
import React from 'react'

const Industries = () => {
  return (
         <section className="section">
           <div className="site-container">
             <SectionHeading
               eyebrow="Who we work with"
               title="Built for people doing meaningful work."
             />
   
             <div className="grid-3">
               {ServicesIndustries.map((industry) => (
                 <IconCard
                   key={industry.name}
                   icon={industry.icon}
                   title={industry.name}
                   tone={industry.tone}
                 />
               ))}
             </div>
           </div>
         </section>
  )
}

export default Industries