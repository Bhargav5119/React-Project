import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
const Hero = () => (
  <section id='home' className='flex md:flex-row flex-col sm:py-16 py-6'>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>

      {/* small box line  */}

      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2' >
        <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20% </span>
          Discount For {" "}
          <span className='text-white'> 1 Month </span>
          Account
        </p>
      </div>

      {/* main text  */}

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='font-poppins flex-1 font-semibold sm:text-[72px] ss:text-[62px] text-[40px] ss:leading-[100px] leading-[75px] text-white'>
          The Next
          <br className='sm:block hidden' /> {" "}
          <span className='text-gradient'>Generation</span>
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>

      {/* text  */}

      <h1 className='font-poppins font-semibold sm:text-[68px] ss:text-[52px] text-[40px] ss:leading-[100px] leading-[75px] text-white w-full'>
        Payment Methods.
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi voluptas perferendis itaque ratione esse, excepturi atque aut libero dignissimos dolore?</p>
    </div>


    {/* side img  */}

    <div className={`relative flex-1 ${styles.flexCenter} md:my-0 my-10`}>
      <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0  pink__gradient '></div>
      <div className='absolute z-[1] w-[80%] h-[80%]   white__gradient rounded-full bottom-40'></div>
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient '></div>
    </div>

    {/* GetStarted  */}

    <div className={`ss:hidden ${styles.flexCenter}`} >
      <GetStarted />
    </div>
  </section>
)


export default Hero