import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [boxColorArray, setBoxColorArray] = useState([]);

  return (
    <div className="App">
      <h1>Box Generator</h1>
      {
        boxColorArray.map((color) => (
          <div style={{
            width: '100px',
            height: '100px',
            border: '3px solid black',
            backgroundColor: color,
            display: 'inline-block',
            margin: '10px'
          }} >
          </div>
        ))
      }
      <Form boxColorArray={boxColorArray} setBoxColorArray={setBoxColorArray} />
    </div>
  );
}

export default App;
