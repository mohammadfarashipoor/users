import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Users from './component/Users';
import About from './component/About';

import { BrowserRouter as Router, Route,Routes, NavLink } from 'react-router-dom';


function App() {
  return (
      <>
        <Navbar/>
        <Router>
          <Routes>
            <Route exact path="/" element={<Users />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Router>
      </>
  );
}

export default App;
