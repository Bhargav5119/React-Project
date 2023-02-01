import React, { useState } from 'react'
import hero from "../assets/hero.png"
import Button from './Button'
import { Section } from './HeroStyle'

const Home = () => {
    const [value, setValue] = useState("$5000 - $10,000")
    return (
        <Section id='home'>
            <div className="img_container" >
                <img src={hero} alt="hero" />
            </div>
            <div className="content">
                <div className="info" 
                    data-aos="fade-right">
                    <h1>It's Time To</h1>
                    <h1>Explore the World</h1>
                    <Button text={"Plan Your Trip"} />

                </div>
                <div className="planner" 
                    data-aos="fade-left">
                    <form action="">
                        <div className="row">
                            <label >Destination</label>
                            <select name="" id="">
                                <option value="">Arab Egypt</option>
                                <option value="">Udaipur India</option>
                            </select>
                        </div>
                        <div className="row">
                            <label htmlFor="">Check In</label>
                            <input type="date" />
                        </div>
                        <div className="row">
                            <label htmlFor="">Price Range</label>
                            <input type="text" value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                        <div className="row">
                            <Button text={"Discover More"} />
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    )
}

export default Home