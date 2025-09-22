import "./Header.css";
import { FaBattleNet } from "react-icons/fa";

export const Header = () => {
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
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </section>
        <section className="ts-header-login">login section</section>
      </nav>
    </header>
  );
};
