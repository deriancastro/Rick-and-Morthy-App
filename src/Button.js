import "./Button.css";
import React from "react";

export default function Button({ children, isActive }) {
  return (
    <button className={isActive ? "Button active" : "Button"}>
      {children}
    </button>
  );
}
