import React from "react";
import "./Nav.css";
import Button from "./Button";

export default function Nav({ page, isActive }) {
  return (
    <nav className="Nav">
      <Button isActive={isActive}>{page}</Button>
    </nav>
  );
}
