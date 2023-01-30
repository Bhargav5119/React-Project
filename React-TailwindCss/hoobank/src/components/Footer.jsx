import styles from "../style"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <section className={styles.paddingY}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8`}>
        <div className={`flex-[1] mr-10`}>
          <img src={logo} alt="logo" className="w-[266px] h-[77px] object-contain " />
          <p className={`${styles.paragraph} mt-4 max-w-[470px]`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
        <div className={`flex-[1.5] w-full flex justify-between flex-row flex-wrap md:mt-0 mt-10 `}>
          {
            footerLinks.map((footerLink) => (
              <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-4">{footerLink.title}</h4>
                <ul>
                  {
                    footerLink.links.map((link, index) => (
                      <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? "mb-4" : "mb-0"}`}>
                        {link.name}
                      </li>
                    ))}
                </ul>
              </div>
            ))
          }
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-[18px] leading-[27px] text-white">Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
        <div className="flex flex-row md:mt-0 mt-6">
            {
              socialMedia.map((data,index) => {
                return(
                  <img src={data.icon} alt={data.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${socialMedia.length -1 !== index ? "mr-6" : "mr-0"}`}  />
                )
              })
            }
        </div>
      </div>
    </section>
  )
}

export default Footer