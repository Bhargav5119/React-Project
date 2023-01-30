import styles, { layout } from '../style'
import { apple, bill, google } from '../assets'

const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />

        <div className='absolute z-[3] top-0 w-[50%] h-[50%] -left-1/2 rounded-full white__gradient ' />
        <div className='absolute z-[0] bottom-0 -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient ' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Easily control your <br className='md:block hidden' /> billing & invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className={`flex flex-wrap flex-row sm:mt-10 mt-6`}>
          <img src={apple} alt="apple" className='w-[128px] cursor-pointer mr-5 object-contain h-[43px] ' />
          <img src={google} alt="google" className='w-[128px] cursor-pointer mr-5 object-contain h-[43px] '/>
        </div>
      </div>
    </section>
  )
}

export default Billing
