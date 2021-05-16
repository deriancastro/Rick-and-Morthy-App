import React from "react";
import "./Nav.css";
import NavButton from "./NavButton";

export default function Nav({ activePage, navPage, setActivePage }) {
  return (
    <nav className="Nav">
      {navPage.map((page) => {
        return (
          <NavButton
            key={page}
            navPage={page}
            activePage={activePage}
            setActivePage={setActivePage}
          ></NavButton>
        );
      })}
    </nav>
  );
}
