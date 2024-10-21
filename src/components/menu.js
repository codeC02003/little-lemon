import React from 'react';
import { Link } from 'react-router-dom';
import Appetizers from './appetizers';
import Soup from './soupsSection';
import Salads from './saladsSections';
import Entrees from './entreesSection';
import Desserts from './dessertsSection';
import Beverage from './bevaragesSection';
import { appetizers, soups, salads, entrees, desserts, beverages  } from './menuItems';

const Menu = () => {
  return (
    <main>
      <header className="header">
        <h1 className='title'>Little Lemon</h1>
        <p className='sub-title'>New Brunswick</p>
        <p className='p-description'>At Little Lemon, we're more than just a restaurant; we're a haven for food lovers. Join us for an unforgettable dining experience where the food, atmosphere, and service come together in perfect harmony. Explore our menu today and let your taste buds embark on a voyage of discovery.</p>
        <Link to="/reservations" className='btn'>Reserve a Table</Link>
        <img src="/assets/menu.jpg" alt="logo" />
      </header>
      <Appetizers items={appetizers} />
      <Soup items={soups} />
      <Salads items={salads} />
      <Entrees items={entrees} />
      <Desserts items={desserts} />
      <Beverage items={beverages} />
    </main>
  );
};

export default Menu;