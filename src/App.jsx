import React from "react";
import { useSelector } from "react-redux";

function App() {
  const counterStore = useSelector((state) => state.counter);
  console.log(counterStore);
  return <div>App</div>;
}

export default App;
