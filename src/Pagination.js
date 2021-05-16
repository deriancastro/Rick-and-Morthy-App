import "./Pagination.css";
import { useState, useEffect } from "react";
import React from "react";
import Button from "./Button";
import icon1 from "./img/left-arrow.png";
import icon2 from "./img/right-arrow.png";
import img1 from "./img/ninja.png";
import img2 from "./img/route.png";
import img3 from "./img/chapter.png";
import Card from "./Card";
import CardLocation from "./CardLocation";
import CardEpisode from "./CardEpisode";
import Nav from "./Nav";

export default function Pagination() {
  //Characters//
  const [urlCharacters, setUrlCharacters] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const [characters, setCharacters] = useState([]);
  const [pagesCharacters, setPagesCharacters] = useState(34);
  const [nextCharacters, setNextCharacters] = useState(
    "https://rickandmortyapi.com/api/character/?page=2"
  );
  const [prevCharacters, setPrevCharacters] = useState(" ");

  useEffect(() => {
    fetch(urlCharacters)
      .then((res) => res.json())
      .then((resBody) => {
        setCharacters(resBody.results);
        const { pages, next, prev } = resBody.info;
        setPagesCharacters(pages);
        setNextCharacters(next);
        setPrevCharacters(prev);
      })
      .catch((error) => console.error(error));
  }, [urlCharacters]);

  let currentPageStringC = urlCharacters.split("").slice(48, 50).join("");
  let currentPageCharacters = parseInt(currentPageStringC);

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

  function paginationCharacters() {
    return (
      <>
        <Button
          onClick={() => setUrlCharacters(prevCharacters)}
          isActive={currentPageCharacters !== 1}
        >
          <img src={icon1} alt="to left" />
        </Button>

        <span className="Span">
          {currentPageCharacters}/{pagesCharacters}
        </span>

        <Button
          onClick={() => setUrlCharacters(nextCharacters)}
          isActive={currentPageCharacters !== pagesCharacters}
        >
          <img src={icon2} alt="to right" />
        </Button>
      </>
    );
  }

  //locations//
  const [urlLocations, setUrlLocations] = useState(
    "https://rickandmortyapi.com/api/location/?page=1"
  );
  const [locations, setLocations] = useState([]);
  const [pagesLocations, setPagesLocations] = useState(6);
  const [nextLocations, setNextLocations] = useState(
    "https://rickandmortyapi.com/api/location/?page=2"
  );
  const [prevLocations, setPrevLocations] = useState(" ");

  useEffect(() => {
    fetch(urlLocations)
      .then((res) => res.json())
      .then((resBody) => {
        setLocations(resBody.results);
        const { pages, next, prev } = resBody.info;
        setPagesLocations(pages);
        setNextLocations(next);
        setPrevLocations(prev);
      })
      .catch((error) => console.error(error));
  }, [urlLocations]);

  let currentPageStringL = urlLocations.split("").slice(47, 49).join("");
  let currentPageLocations = parseInt(currentPageStringL);

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
  }

  function paginationLocations() {
    return (
      <>
        <Button
          onClick={() => setUrlLocations(prevLocations)}
          isActive={currentPageLocations !== 1}
        >
          <img src={icon1} alt="to left" />
        </Button>

        <span className="Span">
          {currentPageLocations}/{pagesLocations}
        </span>

        <Button
          onClick={() => setUrlLocations(nextLocations)}
          isActive={currentPageLocations !== pagesLocations}
        >
          <img src={icon2} alt="to right" />
        </Button>
      </>
    );
  }

  //episode
  const [urlEpisodes, setUrlEpisodes] = useState(
    "https://rickandmortyapi.com/api/episode/?page=1"
  );
  const [episodes, setEpisodes] = useState([]);
  const [pagesEpisodes, setPagesEpisodes] = useState(3);
  const [nextEpisodes, setNextEpisodes] = useState(
    "https://rickandmortyapi.com/api/episode/?page=2"
  );
  const [prevEpisodes, setPrevEpisodes] = useState(" ");

  useEffect(() => {
    fetch(urlEpisodes)
      .then((res) => res.json())
      .then((resBody) => {
        setEpisodes(resBody.results);
        const { pages, next, prev } = resBody.info;
        setPagesEpisodes(pages);
        setNextEpisodes(next);
        setPrevEpisodes(prev);
      })
      .catch((error) => console.error(error));
  }, [urlEpisodes]);

  let currentPageStringE = urlEpisodes.split("").slice(46, 48).join("");
  let currentPageEpisodes = parseInt(currentPageStringE);

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

  function paginationEpisodes() {
    return (
      <>
        <Button
          onClick={() => setUrlEpisodes(prevEpisodes)}
          isActive={currentPageEpisodes !== 1}
        >
          <img src={icon1} alt="to left" />
        </Button>

        <span className="Span">
          {currentPageEpisodes}/{pagesEpisodes}
        </span>

        <Button
          onClick={() => setUrlEpisodes(nextEpisodes)}
          isActive={currentPageEpisodes !== pagesEpisodes}
        >
          <img src={icon2} alt="to right" />
        </Button>
      </>
    );
  }

  const navPage = [
    { page: "characters", img: img1 },
    { page: "locations", img: img2 },
    { page: "episodes", img: img3 },
  ];
  const [activePage, setActivePage] = useState("characters");

  return (
    <>
      {activePage === "characters" && renderCharacters(characters)}

      {activePage === "locations" && renderLocations(locations)}

      {activePage === "episodes" && renderEpisodes(episodes)}

      <section className="Menu">
        <div className="Pagination">
          {activePage === "characters" && paginationCharacters()}

          {activePage === "locations" && paginationLocations()}

          {activePage === "episodes" && paginationEpisodes()}
        </div>

        <div>
          <Nav
            activePage={activePage}
            navPage={navPage}
            setActivePage={setActivePage}
          />
        </div>
      </section>
    </>
  );
}
