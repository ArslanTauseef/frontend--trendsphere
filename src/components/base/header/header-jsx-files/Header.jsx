import { useState, useRef, useEffect, useLayoutEffect } from "react";
import "../header-css-files/Header.css";
import "../header-css-files/HeaderLogin.css";
import "../header-css-files/HeaderLogo.css";
import "../header-css-files/HeaderMenu.css";
import "../header-css-files/HeaderNav.css";
import { FaBattleNet } from "react-icons/fa";

export const Header = () => {
  const [sliderStyle, setSliderStyle] = useState({});
  const navPrimus = useRef(null);
  const navSecundus = useRef([]);

  const handleClick = (index) => {
    const target = navSecundus.current[index];
    const rectNavSecundus = target.getBoundingClientRect();
    setSliderStyle({
      left:
        rectNavSecundus.left - navPrimus.current.getBoundingClientRect().left,
      width: rectNavSecundus.width,
    });
  };

  const setActive = (index) => {
    const target = navSecundus.current[index];
    if (!target) return;

    const rect = target.getBoundingClientRect();
    setSliderStyle({
      left: rect.left - navPrimus.current.getBoundingClientRect().left,
      width: rect.width,
    });
  };

  useEffect(() => {
    // set HOME active by default (index 0)
    setActive(0);
  }, []);

  useEffect(() => {
    console.log("navPrimus:", navPrimus.current); // whole <section>
    console.log("navSecundus:", navSecundus.current); // array of divs
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

        <section className="ts-header-menu" ref={navPrimus}>
          {["HOME", "CONTACT", "ABOUT"].map((item, index) => {
            return (
              <div
                className="ts-menu"
                key={index}
                ref={(el) => (navSecundus.current[index] = el)}
                onClick={() => handleClick(index)}
              >
                {item}
              </div>
            );
          })}
          <div className="slider" style={sliderStyle}></div>
        </section>

        <section className="ts-header-login">login section</section>
      </nav>
    </header>
  );
};
