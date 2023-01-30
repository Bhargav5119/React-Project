'use client';

import { motion } from "framer-motion";
import { headset } from "../images";
import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({id,imgUrl,title,index,active,handleclick}) => (
  <motion.div
    variants={fadeIn("right","spring", index * 0.5, 0.75)}
    className={`relative ${active == id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"} ${styles.flexCenter} min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-in-out cursor-pointer `}
    onClick = {() => handleclick(id)}
  >
    <img src={imgUrl} alt="planetimg" 
      className="absolute w-full h-full object-cover rounded-[24PX]"
    />
    {
      active !== id ? (
        <h3 className="font-semibold text-white sm:text-[26px] text-[18px] absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8  w-full bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism  mb-[16px]`}>
            <img src={headset} alt="headset" className="w-1/2 h-1/2 object-contain" />
          </div> 
          <p className="font-normal text-[16px] leading-[20px] text-white uppercase ">Enter Metaverse</p>
          <h2 className="mt-[10px] font-semibold sm:text-[32px] text-[24px] text-white ">
            {title}
          </h2>
        </div>
      )
    }
  </motion.div>
);

export default ExploreCard;
