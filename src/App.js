import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing.js'
import Home from './pages/Home.js'
import { Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>

  );
}

export default App;
