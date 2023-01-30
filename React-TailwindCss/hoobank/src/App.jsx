import React from 'react'
import styles from "./style"

import {Navbar, Billing, Button,CardDeal,Clients,CTA,FeedBackCard,Footer,GetStarted,Hero,States,Testimonial,Business} from "./components"

const App = () => {
  return (
    <div className='bg-primary w-full overflow-x-hidden  '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}  bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <States />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
