import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing.js'
import Home from './pages/Home.js'
import Post from './pages/Post.js'
import { Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/post" element={<Post />} />
    </Routes>

  );
}

export default App;
