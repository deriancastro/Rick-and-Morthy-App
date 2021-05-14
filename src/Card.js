import React, { useState } from "react";
import "./Card.css";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
}) {
  return (
    <section className="Card">
      <h2>{name}</h2>
      <img src={image}></img>
      <span>{origin.name}</span>

      <div>
        <span>{status}</span>
        <span>{species}</span>
        <span>{gender}</span>
      </div>
    </section>
  );
}
