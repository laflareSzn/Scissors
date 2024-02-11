import FirstSection from "../components/FirstSection";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";
import { SecondSection } from "../components/SecondSection";
import { ThirdSection } from "../components/ThirdSection";


export function Layout(){

  return(
    <div>
      <Navbar/>
      <Hero/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <Footer/>

    </div>
  )
}
