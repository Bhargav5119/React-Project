'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { StartSteps, TypingText, TitleText } from "../components";
import { startingFeatures } from "../constants";
import { GetStartedimg } from "../images";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-[10]`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img src={GetStartedimg} alt="planet1" className="w-[90%] h-[90%] object-contain" />
      </motion.div>

      <motion.div className="flex-[0.75] flex justify-center flex-col"
        variants={fadeIn("left", "tween", 0.2, 1)}
      >
        <TypingText title="| How Metaverse Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] ">
          {
            startingFeatures.map((feature, index) => (
              <StartSteps
                key={feature}
                number={index + 1}
                text={feature}
              />
            ))
          }
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
