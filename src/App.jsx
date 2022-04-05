import "./App.css";
import Receipts from "./data";
import Card from "./card";
import { useState, useEffect } from "react";
function App() {
  const [query, setQuery] = useState("");

  let capFirstLetter = (string) => {
    let q = string.charAt(0).toUpperCase() + string.slice(1);
    setQuery(q);
  };

  return (
    <div className="App">
      <div className="search">
        <h1 className="searchTxt">Search by name :</h1>
        <input type="text" onChange={(e) => capFirstLetter(e.target.value)} />
      </div>

      <div className="card-container">
        {Receipts.map(
          (receipt) =>
            receipt.person.includes(query) && <Card receipt={receipt}></Card>
        )}
      </div>
    </div>
  );
}

export default App;
