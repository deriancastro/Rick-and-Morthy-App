import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import Header from "./Header";

export default function App() {
  const url = "https://rickandmortyapi.com/api/character/?page=1";
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resBody) => setCharacters(resBody.results))
      .catch((error) => console.error(error));
  }, [url]);

  return (
    <div className="App">
      <Header />

      <main>
        {characters.map((character) => {
          const { id, name, status, species, gender, origin, image } =
            character;
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
              image={image}
            />
          );
        })}
      </main>

      <div className="nav"></div>
    </div>
  );
}
