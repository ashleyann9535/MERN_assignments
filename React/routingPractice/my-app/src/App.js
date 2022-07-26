import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Input from './components/Input';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Routing Practice</h1>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/:text" element={<Input />} />
      <Route path="/:text/:textColor/:backgroundColor" element={<Input />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
