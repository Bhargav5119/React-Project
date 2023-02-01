import React from 'react'
import { Section } from './ServiceStyle'
import { serviceData } from '../Global'

const Service = () => {
  return (
    <Section id="service">
      <div className="services">
        {
          serviceData.map(({image,title,description}) =>{
              return(
                <div className="service" key={title} data-aos="fade-up">
                  <img src={image} alt="title" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              )
          })
        }
      </div>
    </Section>
  )
}

export default Service