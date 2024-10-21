import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='navbar-icon'>
        <img src="/assets/Asset16@4x.png" alt="logo" />
      </div>
      <div className='nav-links'>
        <ul>
          <li><Link to="/">Home</Link></li>        
          <li><Link to="/menu">Menu</Link></li>  
          <li><Link to="/reservations">Reservations</Link></li>  
          <li><Link to="/order-online">Order Online</Link></li>  
          <li><Link to="/login">Login</Link></li>  
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
