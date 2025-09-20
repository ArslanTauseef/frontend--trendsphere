import "./Header.css";
import { FaBattleNet } from "react-icons/fa";



export const Header = () => {
  return (
    <header className="ts-header">
      <nav className="ts-header-nav">
        <section className="ts-header-logo">
          <FaBattleNet id="ts-header-logo-icon"/>
          <div id="ts-header-logo-text">
            <h1>Trend</h1>
            <h1>Sphere</h1>
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
