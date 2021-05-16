import React from "react";
import "./CardLocation.css";

export default function CardLocation({ name, type, dimension }) {
  return (
    <section className="CardLocation">
      <h2>{name}</h2>
      <ul>
        <li>Type: {type}</li>
        <li>Dimension: {dimension}</li>
      </ul>
    </section>
  );
}
