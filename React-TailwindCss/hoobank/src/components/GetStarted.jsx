import React from 'react'
import styles from "../style"
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} w-[100%] h-[100%] rounded-full bg-primary flex-col`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] text-gradient mr-2'>
            Get
          </p>
          <img src={arrowUp} alt="arrowUp" />
        </div>

        <p className={`${styles.flexStart} flex-row font-poppins font-medium text-[18px] leading-[23px] text-gradient`}>
          Started
        </p>
      </div>
    </div>
  )
}

export default GetStarted