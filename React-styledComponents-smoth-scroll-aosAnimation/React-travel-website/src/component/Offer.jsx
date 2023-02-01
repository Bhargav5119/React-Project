import React from 'react'
import { Section } from './OfferStyle'
import lighthouse from "../assets/lighthouse.png"
import {BiWorld} from "react-icons/bi"
import { BsHeadphones, BsPerson } from "react-icons/bs"
export const OfferData = [
    {
        text : "Best Travel Guide Always for your Services",
        icon : <BsPerson></BsPerson>,
        color : "red"
    },
    {
        text : "World Class Service Provider For You",
        icon : <BiWorld></BiWorld>,
        color : "green"
    },
    {
        text : "24/7 Strong Customer",
        icon : <BsHeadphones></BsHeadphones>,
        color : "yellow"
    }
]

const Offer = () => {
  return (
    <Section id='offer'>
        <div className="image">
            <img src={lighthouse} alt="image" data-aos="zoom-in"/>
        </div>
        <div className="content">
            <div className="title"  data-aos="fade-down">
                <h1>We are Offering in Total 793 Tours Across the World !</h1>
            </div>
            <ul className="list">
                {
                    OfferData.map(({text,icon,color})=>(
                        <li key={color}  data-aos="fade-up">
                            <div className={`icon ${color}`}>
                                {icon}
                            </div>
                            <h3 className="text">
                                {text}
                            </h3>
                        </li>
                    ))
                }
            </ul>
        </div>
    </Section>
  )
}

export default Offer