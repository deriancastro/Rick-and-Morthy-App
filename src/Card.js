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
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className="Card">
      <h2>{name}</h2>
      <img src={image} alt="character"></img>
      <span>Origin: {origin.name}</span>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide Info" : "Show more whit windows"}
      </button>

      {showInfo && (
        <>
          <span>Status: {status}</span>
          <span>Species: {species}</span>
          <span>Gender: {gender}</span>
        </>
      )}
    </section>
  );
}
