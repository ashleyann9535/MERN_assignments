import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Main from './components/Main';
import Form from './components/Form';
import Update from './components/Update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path = '/' element={<Main />} />
          <Route path='/form' element={<Form/>} />
          <Route path='/edit/:id' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
