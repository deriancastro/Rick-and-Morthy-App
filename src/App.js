import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const url = "https://rickandmortyapi.com/api/character/?page=1";
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resBody) => setCharacters(resBody.results));
  }, [url]);

  return (
    <div className="App">
      <ul>
        {characters.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}
