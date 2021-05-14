import React, { useState, useEffect } from "react";
import "./App.css";
import icon1 from "./img/left-arrow.png";
import icon2 from "./img/right-arrow.png";
import Header from "./Header";
import Card from "./Card";
import Button from "./Button";
import Nav from "./Nav";

export default function App() {
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(34);
  const [next, setNext] = useState(
    "https://rickandmortyapi.com/api/character/?page=2"
  );
  const [prev, setPrev] = useState(" ");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resBody) => {
        setCharacters(resBody.results);
        const { pages, next, prev } = resBody.info;
        setPages(pages);
        setNext(next);
        setPrev(prev);
      })
      .catch((error) => console.error(error));
  }, [url]);

  let currentPage = url.split("").slice(48, 50).join("");
  console.log(currentPage);

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

      <div className="nav">
        <button
          className="button"
          onClick={() => {
            setUrl(prev);
          }}
        >
          <img src={icon1} />
        </button>
        <div className="pages">
          <h3>
            {currentPage}/{pages}
          </h3>
        </div>
        <button
          className="button"
          onClick={() => {
            setUrl(next);
          }}
        >
          <img src={icon2} />
        </button>
      </div>
    </div>
  );
}
