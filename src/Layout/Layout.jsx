import Footer from "../components/Footer";
import Navbar from "../pages/Navbar";
import {Outlet} from 'react-router-dom'


export function Layout(){

  return(
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
