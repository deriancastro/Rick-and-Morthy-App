import React from "react";
import "./Nav.css";
import NavButton from "./NavButton";

export default function Nav({ activePage, navPage, setActivePage }) {
  return (
    <nav className="Nav">
      {navPage.map((el) => {
        return (
          <NavButton
            key={el.page}
            navPage={el.page}
            activePage={activePage}
            setActivePage={setActivePage}
            image={el.img}
          ></NavButton>
        );
      })}
    </nav>
  );
}
