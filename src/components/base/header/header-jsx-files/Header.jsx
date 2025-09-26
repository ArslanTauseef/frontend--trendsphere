import { useEffect, useState, useRef } from "react";
import "../header-css-files/Header.css";
import "../header-css-files/HeaderLogin.css";
import "../header-css-files/HeaderLogo.css";
import "../header-css-files/HeaderMenu.css";
import "../header-css-files/HeaderNav.css";

import { FaBattleNet } from "react-icons/fa";

export const Header = () => {
  const [sliderStyle, setSliderStyle] = useState({});
  const handleClick = (key) => {
    const el = menuRefs[key].current
  };

  const HandleNavSlider = () => {
    console.log("TESTING");
  };

  useEffect(() => {
    HandleNavSlider();
  }, []);

  return (
    <header className="ts-header">
      <nav className="ts-header-nav">
        <section className="ts-header-logo">
          <div className="ts-header-logo-wrapper">
            <FaBattleNet id="ts-header-logo-icon" />
            <div id="ts-header-logo-text-wrapper">
              <div id="ts-header-logo-text">
                <h1>TREND</h1>
                <h1>SPHERE</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ts-header-menu">
          {/* <div className="slider"></div> */}
          <div className="ts-menu">Home</div>
          <div className="ts-menu">About</div>
          <div className="ts-menu">Contact</div>
        </section>
        <section className="ts-header-login">login section</section>
      </nav>
    </header>
  );
};
