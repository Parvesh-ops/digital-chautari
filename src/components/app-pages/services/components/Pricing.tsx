import { Action, Checklist, SectionHeading } from '@/src/components/common/site'
import { PricingPlans } from '@/src/constants/Services'
import React from 'react'

export const Pricing = () => {
  return (
       <section
         className="section"
         style={{ background: "#f1f3f1" }}
       >
         <div className="site-container">
           <SectionHeading
             eyebrow="Simple pricing"
             title="A clear place to start."
             description="Every engagement begins with a conversation. These packages help frame the right level of support."
           />
 
           <div className="grid-3">
             {PricingPlans.map((plan) => (
               <article
                 className={`card pricing-card ${plan.popular ? "dark-pricing" : ""
                   }`}
                 key={plan.name}
               >
                 {plan.popular && (
                   <span className="popular">
                     Most popular
                   </span>
                 )}
 
                 <h3>{plan.name}</h3>
 
                 <div className="price">
                   {plan.price}
 
                   {plan.period && (
                     <small>{plan.period}</small>
                   )}
                 </div>
 
                 <p
                   style={{
                     color: plan.popular
                       ? "#b5c0c5"
                       : "#5b6472",
                   }}
                 >
                   {plan.description}
                 </p>
 
                 <Checklist items={plan.features} />
 
                 <Action
                   href="/contact"
                   variant={
                     plan.popular ? undefined : "ghost"
                   }
                 >
                   {plan.action}
                 </Action>
               </article>
             ))}
           </div>
         </div>
       </section>
  )
}