import "./App.css";
import Receipts from "./data";
import Card from "./card";
import { useState, useEffect } from "react";
function App() {
  const [content, setContent] = useState(
    Receipts.map((receipt) => receipt.paid && <Card receipt={receipt}></Card>)
  );

  const handle = (raw) => {
    let input = raw.toLowerCase();
    if (!input) {
      setContent(
        Receipts.map(
          (receipt) => receipt.paid && <Card receipt={receipt}></Card>
        )
      );
    } else if ("karolin".includes(input)) {

      let result = Receipts.find((receipt) => receipt.person == "Karolin");
      setContent(<Card receipt={result}></Card>);

    } else if ("jerrica".includes(input)) {

      let result = Receipts.find((receipt) => receipt.person == "Jerrica");
      setContent(<Card receipt={result}></Card>);

    } else if ("matt".includes(input)) {

      let result = Receipts.find((receipt) => receipt.person == "Matt");
      setContent(<Card receipt={result}></Card>);
      
    }
  };

  return (
    <div className="App">
      <div className="search">
        <h1 className="searchTxt">Search by name :</h1>
        <input type="text" onChange={(e) => handle(e.target.value)} />
      </div>

      <div className="card-container">{content}</div>
    </div>
  );
}

export default App;
