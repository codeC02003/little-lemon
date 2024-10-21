import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className='title'>Little Lemon </h1>
      <p className='sub-title'>New Brunswick</p>
      <p className='p-description'>Our mission is to provide you with the best dining experience. We offer a variety of dishes and drinks that are sure to satisfy your taste buds. We look forward to serving you!</p>
      <Link to="/reservations" className='btn'>Reserve a Table</Link>
      <img src="/assets/mainpage.jpg" alt="logo" />
    </header>
  )
}

export default Header;