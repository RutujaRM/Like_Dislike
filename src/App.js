import "./styles.css";
import { useState } from "react";

export default function App() {
  const traceble = useState(0); //funcyion stord in variable

  const counter = traceble[0]; //store initial value 0
  const updatecount = traceble[1]; //decrement  function

  //Like button
  const increment = () => {
    updatecount((current_value) => {
      const new_value = current_value + 1;
      return new_value;
    });
  };

  // Dislike Button
  const decrement = () =>
    //function 1

    {
      updatecount((current_value) => {
        //function 2
        const new_value = current_value - 1;
        return new_value;
      });
    };

  return (
    <div className="App">
      <h1>Like Dislike using States </h1>
      <button onClick={decrement}>Dislike ! </button>
      <button onClick={increment}>Like !! </button>
      <p>Counting:- {counter} </p>
    </div>
  );
}
