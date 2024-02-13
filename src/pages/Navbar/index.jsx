
import { FilledButton } from "../../components/Button/FilledButton";
import { GhostButton } from "../../components/Button/GhostButton";
import { MdKeyboardArrowDown } from "react-icons/md";
import style from './index.module.css';

const Logo = require('../../assets/images/Logo.png');


function Navbar() {

  return (
    <div className={style.navbar}>
      <div>
        <img src={Logo} alt="logo"/>
      </div>

      <div className={style.navbarList}>
        <p style={{color: "#0065FE"}}>MyURLs</p>
        <p style={{display: "flex", alignItems: "center"}}>Features<MdKeyboardArrowDown size={30} /></p>
        <p>Pricing</p>
        <p>Analytics</p>
        <p>FAQs</p>
      </div>

      <div>
        <GhostButton text="Login" color="#0065FE" padding="12px 24px"/>
        <FilledButton bgColor="blue" text="Try for free"/>
      </div>
    </div>
  );
}

export default Navbar;