import Destination from "./component/Destination"
import Download from "./component/Download"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Offer from "./component/Offer"
import Service from "./component/Service"
import Testimonial from "./component/Testimonial"
import Tours from "./component/Tours"
import Footer from "./component/Footer"
import ScrollToTop from "./component/ScrollToTop"
import { useEffect } from "react"

import AOS from "aos"
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    AOS.init({
      delay: 0,
      duration: 2000,
      once: false,
      mirror: true,
      offset: 150
    });
  }, [])

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <Home />
      <Service />
      <Destination />
      <Offer />
      <Tours />
      <Testimonial />
      <Download />
      <Footer />
    </div>
  )
}

export default App
