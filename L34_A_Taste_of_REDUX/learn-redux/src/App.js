import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, sign_in } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? (
        <h3>Valuable Information I shouldn't see</h3>
      ) : (
        <h3>Nada!</h3>
      )}
      <button onClick={() => dispatch(sign_in())}>LOG IN/OUT</button>
    </div>
  );
}

export default App;
