'use client';
import { ExploreCard, TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { exploreWorlds } from "../constants"
import styles from "../styles";
import { useState } from "react";

const Explore = () => {

  const [active, setActive] = useState("world-2")
  return (
    <section section id="explore" className={`${styles.paddings} mx-auto `
    }>
      <motion.div
        className={`${styles.innerWidth} mx-auto`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}

      >
        <TypingText title="| The World" textStyle="text-center" />
        <TitleText title={<>Choose the world you want <br className="lg:block hidden" /> to explore</>} textStyle="text-center" />

        {/* slider  */}

        <div className="mt-[50px] flex flex-col lg:flex-row min-h-[70vh] gap-5">
          {
            exploreWorlds.map((world, index) => (
              <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleclick={setActive}
              />
            ))
          }
        </div>
      </motion.div>
    </section>
  )
}
export default Explore;
