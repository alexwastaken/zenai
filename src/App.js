import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing.js'
import Home from './pages/Home.js'
import Post from './pages/Post.js'
import Test from './pages/test.js'
import Prompt from './pages/Prompt.js'

import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="/test" element={<Test />} />
      <Route path="/prompt/:id" element={<Prompt />} />
    </Routes>

  );
}

export default App;
