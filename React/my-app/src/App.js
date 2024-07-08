import "./App.css";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import details from "./data";
import Box from "./components/card";
import React from "react";

function App() {
  const [squares, setSquares] = React.useState(details);
  function toggle(id) {
    setSquares((oldArr)=>{
      return oldArr.map((square)=>{
        return square.id === id? {...square, on: !square.on}: square
      })
    })
  }
  var arr = squares.map((item) => (
    <Box id={item.id} key={item.id} on={item.on} handleToggle={toggle} />
  ));
  return (
    <div>
      <div className="cards">{arr}</div>
    </div>
  );
}

export default App;
