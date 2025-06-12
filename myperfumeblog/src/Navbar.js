import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
       <h1>My Perfume Blog</h1> 
        </div>
      
        <Link to ="/">Home</Link>
        <Link to ="#about">About</Link>
        <Link to ="/blog">Blog</Link>
        <Link to ="/Create">New Blog</Link>
        <Link to ="#contact">Contact</Link>
        <Link to ="/signUp">signUp</Link>
      
    </nav>
  );
};

export default Navbar;
