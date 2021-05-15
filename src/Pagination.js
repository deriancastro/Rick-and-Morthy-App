import "./Pagination.css";
import { useState, useEffect } from "react";
import React from "react";
import Button from "./Button";
import icon1 from "./img/left-arrow.png";
import icon2 from "./img/right-arrow.png";
import Card from "./Card";

export default function Pagination() {
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

  let currentPageString = url.split("").slice(48, 50).join("");
  let currentPage = parseInt(currentPageString);
  console.log(currentPage);

  function renderCharacters(characters) {
    return (
      <div className="cardContainer">
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
      </div>
    );
  }

  return (
    <>
      {renderCharacters(characters)}

      <section className="Pagination">
        <Button onClick={() => setUrl(prev)} isActive={currentPage !== 1}>
          <img src={icon1} />
        </Button>
        <span className="Span">
          {currentPage}/{pages}
        </span>
        <Button onClick={() => setUrl(next)} isActive={currentPage !== pages}>
          <img src={icon2} />
        </Button>
      </section>
    </>
  );
}
