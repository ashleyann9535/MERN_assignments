import './App.css';
import ProductsForm from './components/ProductsForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './components/Main';
import OneProduct from './components/OneProduct';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductsForm/>} />
          <Route path='/home' element={<Main/>} />
          <Route path='/oneproduct/:id' element={<OneProduct/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
