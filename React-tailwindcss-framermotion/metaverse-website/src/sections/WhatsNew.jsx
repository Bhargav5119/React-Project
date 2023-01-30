'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { NewFeatures, TypingText, TitleText } from "../components";
import { newFeatures } from "../constants";
import { whatsNewimg } from "../images";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-[10]`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
    >
      <motion.div className="flex-[0.75] flex justify-center flex-col"
        variants={fadeIn("right", "tween", 0.2, 1)}
      >
        <TypingText title="| What New?" />
        <TitleText title={<>What's new about Metaversus?</>} />
        <div className="mt-[31px] flex flex-wrap flex-row justify-between gap-[24px] ">
          {
            newFeatures.map((feature, index) => (
              <NewFeatures
                key={feature}
                {...feature}
              />
            ))
          }
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img src={whatsNewimg} alt="planet2" className="w-[90%] h-[90%] object-contain" />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
