import { useState } from "react";

function App() {

  const [accesa, setAccesa] = useState(false);

  function interruttore() {
    setAccesa(!accesa);

    if (accesa) {
      setColore("white");
    } else {
      setColore("yellow");
    }
  }


  const [colore, setColore] = useState("black");

  function cambiaColore(event) {

    if (accesa) {
      setColore(event.target.value);
    } else {
      alert("Devi accendere la lampadina prima di scegliere il colore.");
      return;
    }
  }

  return (
    <div>
      <h1>
        {accesa ? "La lampadina è accesa" : "La lampadina è spenta"}
      </h1>
      <div className={`light-bulb ${colore}`}></div>
      <div className="container">
        <button onClick={interruttore}>
          {accesa ? "Spegni" : "Accendi"}
        </button>
        <select value={colore} onChange={cambiaColore}>
          <option value="green">Verde</option>
          <option value="blue">Blue</option>
          <option value="red">Rosso</option>
          <option value="black">Nero</option>
        </select>
      </div>
    </div>
  );
}

export default App;