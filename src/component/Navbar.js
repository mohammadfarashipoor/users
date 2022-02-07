import React from 'react';
import { BrowserRouter as  Link } from 'react-router-dom';



function Navbar() {
  return ( 
    <>  
      <nav className="navbar">
        <Link to="/"><a href="/">Home</a></Link>
        <Link to="/about"><a href="/about">About</a></Link>
      </nav>
    </>);

}

export default Navbar;
