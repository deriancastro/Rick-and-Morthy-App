import React from "react";
import "./CardEpisode.css";

export default function CardEpisode({ name, air_date, characters }) {
  return (
    <section className="CardEpisode">
      <h2>{name}</h2>
      <ul>
        <li>{air_date}</li>
        <li>Characters: {characters.length}</li>
      </ul>
    </section>
  );
}
