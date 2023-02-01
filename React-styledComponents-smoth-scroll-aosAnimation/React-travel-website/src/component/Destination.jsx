import React from 'react'
import Button from './Button'
import { Section } from './DestinationStyyle'
import { destinationData } from '../Global'

const Destination = () => {
  return (
    <Section id='destination'>
      <div className="info" data-aos="fade-right">
        <h2>
          Top <span>Destination</span> In the World
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellendus unde nam voluptatum iusto dolores mollitia harum corporis tenetur quas.
        </p>
        <Button text={"Discover More"} />
      </div>

      <div className="destinations">
        {
          destinationData.map(({name,image})=>(
            <div className="destination" key={name} data-aos="fade-left">
              <div className="image">
                <img src={image} alt="image" />
              </div>
              <div className="name">
                <h3>{name}</h3>
              </div>
            </div>
          ))
        }
      </div>
    </Section>
  )
}

export default Destination