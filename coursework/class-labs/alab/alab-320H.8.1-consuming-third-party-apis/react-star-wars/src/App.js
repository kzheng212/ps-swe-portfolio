import React, { useEffect, useState } from "react";
import { getAllStarships } from "./services/sw-api";

import "./App.css";
import StarshipCard from "./components/StarshipCard";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllStarships();
        setStarships(data);
      } catch (error) {
        console.error("Bad Output", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1> Star Wars Starships </h1>
        <div className="starship-container">
          {starships.map((starship) => (
            <StarshipCard starship={starship} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
