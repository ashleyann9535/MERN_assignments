import { useState } from "react";
import './App.css';
import AddItem from './components/AddItem';
import ViewList from "./components/ViewList";

function App() {
  const [listArr, setListArr] = useState([]);
  

  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddItem listArr = {listArr} setListArr = {setListArr}/>
      <ViewList listArr = {listArr} setListArr = {setListArr}/>
    </div>
  );
}

export default App;
