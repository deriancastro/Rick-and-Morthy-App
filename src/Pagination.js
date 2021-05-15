import "./Pagination.css";
import { useState, useEffect } from "react";
import React from "react";
import Button from "./Button";
import icon1 from "./img/left-arrow.png";
import icon2 from "./img/right-arrow.png";
import Card from "./Card";
import CardLocation from "./CardLocation";
import CardEpisode from "./CardEpisode";

export default function Pagination() {
  //Characters//
  /*const [urlCharacters, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(34);
  const [next, setNext] = useState(
    "https://rickandmortyapi.com/api/character/?page=2"
  );
  const [prev, setPrev] = useState(" ");

  useEffect(() => {
    fetch(urlCharacters)
      .then((res) => res.json())
      .then((resBody) => {
        setCharacters(resBody.results);
        const { pages, next, prev } = resBody.info;
        setPages(pages);
        setNext(next);
        setPrev(prev);
      })
      .catch((error) => console.error(error));
  }, [urlCharacters]);

  let currentPageString = urlCharacters.split("").slice(48, 50).join("");
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

  //locations//
  const [urlLocations, setUrlLocations] = useState(
    "https://rickandmortyapi.com/api/location/?page=1"
  );
  const [locations, setLocations] = useState([]);
  const [pages, setPages] = useState(6);
  const [next, setNext] = useState(
    "https://rickandmortyapi.com/api/location/?page=2"
  );
  const [prev, setPrev] = useState(" ");

  useEffect(() => {
    fetch(urlLocations)
      .then((res) => res.json())
      .then((resBody) => {
        setLocations(resBody.results);
        const { pages, next, prev } = resBody.info;
        setPages(pages);
        setNext(next);
        setPrev(prev);
      })
      .catch((error) => console.error(error));
  }, [urlLocations]);

  let currentPageString = urlLocations.split("").slice(47, 49).join("");
  let currentPage = parseInt(currentPageString);
  console.log(currentPage);

  function renderLocations(locations) {
    return (
      <div className="cardContainer">
        {locations.map((location) => {
          const { id, name, type, dimension } = location;
          return (
            <CardLocation
              key={id}
              id={id}
              name={name}
              type={type}
              dimension={dimension}
            />
          );
        })}
      </div>
    );
  }*/

  //episode
  const [urlEpisodes, setUrlEpisodes] = useState(
    "https://rickandmortyapi.com/api/episode/?page=1"
  );
  const [episodes, setEpisodes] = useState([]);
  const [pages, setPages] = useState(3);
  const [next, setNext] = useState(
    "https://rickandmortyapi.com/api/episode/?page=2"
  );
  const [prev, setPrev] = useState(" ");

  useEffect(() => {
    fetch(urlEpisodes)
      .then((res) => res.json())
      .then((resBody) => {
        setEpisodes(resBody.results);
        const { pages, next, prev } = resBody.info;
        setPages(pages);
        setNext(next);
        setPrev(prev);
      })
      .catch((error) => console.error(error));
  }, [urlEpisodes]);

  let currentPageString = urlEpisodes.split("").slice(46, 48).join("");
  let currentPage = parseInt(currentPageString);
  console.log(currentPage);

  function renderEpisodes(episodes) {
    return (
      <div className="cardContainer">
        {episodes.map((episode) => {
          const { id, name, air_date, characters } = episode;
          return (
            <CardEpisode
              key={id}
              id={id}
              name={name}
              air_date={air_date}
              characters={characters}
            />
          );
        })}
      </div>
    );
  }

  return (
    <>
      {renderEpisodes(episodes)}
      <section className="Pagination">
        <Button
          onClick={() => setUrlEpisodes(prev)}
          isActive={currentPage !== 1}
        >
          <img src={icon1} alt="to left" />
        </Button>
        <span className="Span">
          {currentPage}/{pages}
        </span>
        <Button
          onClick={() => setUrlEpisodes(next)}
          isActive={currentPage !== pages}
        >
          <img src={icon2} alt="to right" />
        </Button>
      </section>
    </>
  );
}
