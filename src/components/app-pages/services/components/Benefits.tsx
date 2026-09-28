import { DarkBanner } from '@/src/components/common/site'
import { ServicesBenefits } from '@/src/constants/Services'
import React from 'react'

const Benefits = () => {
  return (
    <>
          {/* Why work with us */}
          <DarkBanner
            eyebrow="Why work with us"
            title="We build better together"
            text="We believe that the best solutions come from working together."
          >
            <div
              className="grid-3"
              style={{ marginTop: 32 }}
            >
              {ServicesBenefits.map((benefit) => (
                <div className="dark-card" key={benefit}>
                  <CheckMark />
                  {benefit}
                </div>
              ))}
            </div>
          </DarkBanner>
    </>
  )
}

function CheckMark() {
  return (
    <span
      style={{
        display: "inline-grid",
        placeItems: "center",
        width: 25,
        height: 25,
        borderRadius: "50%",
        background: "#e0a930",
        color: "#0b1220",
        marginRight: 10,
      }}
    >
      ✓
    </span>
  );
}

export default Benefits