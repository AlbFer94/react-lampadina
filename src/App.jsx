import { useState } from "react";

function App() {

  const [accesa, setAccesa] = useState(false);

  function interruttore() {
    setAccesa(!accesa);
  }

  return (
    <div>
      <h1>
        {accesa ? "La lampadina è accesa" : "La lampadina è spenta"}
      </h1>
      <button onClick={interruttore}>
        {accesa ? "Spegni" : "Accendi"}
      </button>
    </div>
  );
}

export default App;