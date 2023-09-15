import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import red from './components/red';
import blue from './components/blue';
import green from './components/green';
import home from './components/home';
import Navbar from './components/navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
        <Navbar />
    <div id="main-section">
      <Routes>
        <Route path='/' element={home()}></Route>
        <Route path='/red' element={red()}></Route>
        <Route path='/blue' element={blue()}></Route>
        <Route path='/blue' element={blue()}></Route>
        <Route path='/green' element={green()}></Route>
      </Routes>
    </div>
  </div>
  )
}

export default App
