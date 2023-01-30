import styles from "../styles";

const StartSteps = ({number,text}) => (
  <div className={`${styles.flexCenter} `}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] text-white bg-[#323f5d] font-bold text-[20px]  `}>
      0{number}
    </div>
    <p className="flex-1 ml-[30px] text-[18px] text-[#B0B0B0] leading-[32px] ">
      {text}
    </p>
  </div>
);

export default StartSteps;
