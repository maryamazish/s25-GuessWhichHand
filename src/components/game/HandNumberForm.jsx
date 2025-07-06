import { useState } from "react";
import Button from "../general/button";


const HandNumberForm = ({ onStart , onGetHandNumber }) => {
  const [number, setNumber] = useState(1);

  const getNumber = (e) => {
    e.preventDefault();
    onGetHandNumber(number);
    setNumber(1);
    onStart(true)
  };

  return (
    <form onSubmit={getNumber} className="ready">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        min="1"
        max="10"
      ></input>
      <Button name="Send" type="submit"  />
    </form>
  );
};

export default HandNumberForm;
