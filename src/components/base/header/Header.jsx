import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="ts-header">
      <nav className="ts-header-nav">
        <section className="ts-header-logo">logo</section>
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
