import React from 'react'
import testimonial1 from "../assets/testimonial1.png"
import testimonial2 from "../assets/testimonial2.png"
import avatar from "../assets/avatar.png"
import { Section } from './TestimonialStyle'
const Testimonial = () => {
  return (
    <Section id='blog'>
        <div className="main_title">
            <h1>What Our Happy Coustomer Say About Us</h1>
        </div>
        <div className="testimonials">
            <div className="testimonial-image-one">
                <img src={testimonial1} alt="testimonial" />
            </div>
            <div className="testimonial" data-aos="flip-left"  >
                <div className="title">
                    <div className="image">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="info">
                        <h3>Kishan Sheth</h3>
                        <span>Full Stack Developer</span>
                    </div>
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugiat, dolores ea unde repellendus praesentium, inventore autem doloremque fugit, quis repudiandae laboriosam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, perferendis!
                </div>
            </div>
            <div className="testimonial-image-two">
                <img src={testimonial2} alt="testimonial" />
            </div>
        </div>
    </Section>
  )
}

export default Testimonial