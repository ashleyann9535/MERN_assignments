import './App.css';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../src/views/Main'
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = {<Main/>} path='/home' default/> 
          <Route element = {<Details/>} path= '/person/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
