import styles from "../styles";
import { motion } from "framer-motion";
import {navVariants} from "../utils/motion"
import {search,menu} from "../images"

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`} >
      <img src={search} alt="search"
      className="w-[24px] h-[24px] object-contain " />
      <h1 className="font-extrabold text-[24px] leading-[30px] text-white uppercase ">metaversus</h1>
      <img src={menu} alt="menu" className="cursor-pointer w-[24px] h-[24px] object-contain " />
    </div>

  </motion.nav>
);

export default Navbar;
