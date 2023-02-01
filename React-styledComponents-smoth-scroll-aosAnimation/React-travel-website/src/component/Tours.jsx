import React from 'react'
import { Section } from './ToursStyle'
import { ToursData } from '../Global'
import ellipse from "../assets/ellipse.png"
import vector1 from "../assets/vector1.png"
import vector2 from "../assets/vector2.png"
import { BsFillStarFill } from 'react-icons/bs'

const Tours = () => {
  return (
    <Section id='tour'>
        <h2>Choose Your Destination</h2>
        <img src={ellipse} alt="ellipse" className='ellipse' />
        <div className="tours"   >
            {
                ToursData.map(({image,title,price,review},index)=>(
                    <div className="tour" key={title}>
                        <div className="image">
                            <img src={image} alt="image" data-aos="fade-up"/>
                            {
                                index == 1 && (
                                    <div className="vectors">
                                        <img src={vector1} alt="vector" className='vector1'  data-aos="fade-left"/>
                                        <img src={vector2} alt="vector" className='vector2'  data-aos="fade-right"/>
                                    </div>
                                ) 
                            }
                        </div>
                        <div className="info" data-aos="fade-up">
                            <div className="details">
                                <h4>{title}</h4>
                                <div className="price-details">
                                    <span className='price'>{price} </span>
                                    <div className="review">
                                        <div className="stars">
                                            <BsFillStarFill />
                                            <BsFillStarFill />
                                            <BsFillStarFill />
                                            <BsFillStarFill />
                                            <BsFillStarFill />
                                        </div>
                                        <span className='review-text'>{review}</span>
                                    </div>
                                </div>
                            </div>
                            <button>+</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </Section>
  )
}

export default Tours