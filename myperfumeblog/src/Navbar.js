import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
       <h1>My Perfume Blog</h1> 
        </div>
      
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#createblog">New Blog</a>
        <a href="#contact">Contact</a>
      
    </nav>
  );
};

export default Navbar;
