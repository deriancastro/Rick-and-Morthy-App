import "./Button.css";
import React from "react";

export default function Button({ children, isActive, onClick }) {
  return (
    <button
      disabled={!isActive}
      onClick={onClick}
      className={isActive ? "Button" : "Button"}
    >
      {children}
    </button>
  );
}
