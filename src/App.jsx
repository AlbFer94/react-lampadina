import { useState } from "react";

function App() {

  const [accesa, setAccesa] = useState(false);

  function interruttore() {
    setAccesa(!accesa);
  }

  const [colore, setColore] = useState("black");

  function cambiaColore(event) {
    setColore(event.target.value);
    console.log(colore);
  }

  return (
    <div>
      <h1>
        {accesa ? "La lampadina è accesa" : "La lampadina è spenta"}
      </h1>
      <button onClick={interruttore}>
        {accesa ? "Spegni" : "Accendi"}
      </button>
      <div className={colore}></div>

      <select value={colore} onChange={cambiaColore}>
        <option value="green">Verde</option>
        <option value="blue">Blue</option>
        <option value="red">Rosso</option>
        <option value="black">Nero</option>
      </select>
    </div>
  );
}

export default App;