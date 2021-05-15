import React from "react";
import "./CardLocation.css";

export default function CardLocation({ name, type, dimension }) {
  return (
    <section className="CardLocation">
      <h2>{name}</h2>
      <ul>
        <li>{type}</li>
        <li>{dimension}</li>
      </ul>
    </section>
  );
}
