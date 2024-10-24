import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000");

  function handleHexColor() {
    const hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let hex = '#';
    for (let i= 0 ;i < 6 ; i++){
      hex += hexArray[Math.round(Math.random() * 15)]
    }
    setColor(hex)
  }
  function handleRgbColor() {
    let firstColor = Math.round(Math.random() * 255);
    let secondColor = Math.round(Math.random() * 255);
    let thirdColor = Math.round(Math.random() * 255);
    setColor(`rgb(${firstColor} ,${secondColor} ,${thirdColor})`);
  }
  function handleColor() {
    const colors = [ "red", "green", "blue", "yellow", "orange", "purple", "cyan", "magenta", "lime", "pink", "brown", "grey", "black", "white", "navy", "teal", "maroon", "olive", "gold", "silver", "violet", "indigo", "turquoise", "salmon", "peach", "plum", "coral", "khaki", "crimson", "orchid", "chartreuse",
    ];

    setColor(colors[Math.round(Math.random() * colors.length)]);
  }
  useEffect(()=>{
    document.body.style.backgroundColor = color
  } ,[color])

  return (
    <div className="App">
      <button
        onClick={() => {
          handleHexColor();
        }}
      >
        HEXcolor
      </button>
      <button
        onClick={() => {
          handleRgbColor();
        }}
      >
        RGBcolor
      </button>
      <button
        onClick={() => {
          handleColor();
        }}
      >
        color
      </button>
      <h1>{color}</h1>
    </div>
  );
}

export default App;
