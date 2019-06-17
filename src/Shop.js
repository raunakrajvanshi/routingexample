import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

{
  /* Usestate holds info from info. useeffect calls fetch when component mounts */
}
function Shop() {
  useEffect(() => {
    fetchitems();
  }, []);

  const [results, setItems] = useState([]);
  const fetchitems = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=100");
    const results = await data.json();
    console.log(results.results);
    setItems(results.results);
  };
  return (
    <div>
      {results.map(results => (
        <h1>
          <Link to={"/shop/${results.name}"}>{results.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
