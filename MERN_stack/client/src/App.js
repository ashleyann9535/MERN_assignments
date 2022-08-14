import './App.css';
import ProductsForm from './components/ProductsForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './components/Main';
import OneProduct from './components/OneProduct';
import NavBar from './components/NavBar';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ProductsForm/>} />
          <Route path='/home' element={<Main/>} />
          <Route path='/oneproduct/:id' element={<OneProduct/>} />
          <Route path='/updateproduct/:id' element={<UpdateProduct/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
