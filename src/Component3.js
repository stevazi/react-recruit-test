import { useEffect, useState } from "react";

export default Component3 = () => {
  [number, setNumber] = useState(0);
  [string, setString] = useState("Inserisci un numero per iniziare");

  const checkNumber = (number) => {
    string = "";
    if (number != "") {
      if (number % 3 == 0) {
        string += "divisibile per 3   ";
      }
      if (number % 5 == 0) {
        string += "Divisibile per 5";
      }
    } else {
      string = "Inserisci un numero per iniziare";
    }
    setString(string);
  };

  useEffect(() => {
    document.title = string;
  });

  return (
    <div>
      <input
        className="form-control"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
          checkNumber(e.target.value);
        }}
        type="number"
        step="1"
      />
      <p className="font-weight-bold text-center">{string}</p>
    </div>
  );
};
