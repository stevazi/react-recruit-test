import React, { useState } from "react";

export default App = () => {
  // Utilizzo di useState per gestire uno stato di tipo stringa con valore iniziale 'Hello'
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="card my-2">
        <div className="card-body">
          <p className="text-center">{count}</p>
        </div>
      </div>
      <div className="d-flex">
        <button
          className="btn-primary btn mx-auto"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Diminuisci
        </button>
        <button
          className="btn-primary btn mx-auto"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Aumenta
        </button>
      </div>
    </div>
  );
};
