import React from 'react'
import { Section } from './DownloadStyle'
import googleplay from "../assets/googlePlay.png"
import appStore from "../assets/appleStore.png"
import screens from "../assets/screens.png"

const Download = () => {
  return (
    <Section >
        <div className="info" data-aos="fade-right"  data-aos-mirror="false"  data-aos-offset="300">
            <h1>Download Now Travel Community Apps</h1>
            <div className="downloads">
                <img src={googleplay} alt="google" />
                <img src={appStore} alt="appstore" />
            </div>
        </div>
        <img src={screens} alt="screens" className='screens' data-aos="fade-up"  data-aos-mirror="false"  data-aos-offset="300"/>
    </Section>
  )
}

export default Download