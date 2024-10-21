import React from 'react';
import Card from './card';
import { Link } from 'react-router-dom';


const Main = () => {
  return (
    <main className="main">
      <div className='menu-title'>
        <h1>This weeks specials !</h1>
        <Link to="/order-online" className='btn online-menu'>Online menu</Link>
      </div>
      <div className="card-container">
        <Card 
          title="Greek Salad" 
          price="$8.99" 
          description="A fresh and healthy Greek salad with tomatoes, cucumbers, olives, and feta cheese." 
          imgSrc="/assets/greek-salad.jpg"
        />
        <Card 
          title="Alfredo Pasta" 
          price="$12.99" 
          description="A pasta dish with creamy Alfredo sauce and chicken. Served with garlic bread." 
          imgSrc="/assets/pasta_alfredo.jpg"
        />
        <Card 
          title="Steak and Fries"  
          price="$19.99" 
          description="Juicy steak cooked to perfection. Served with fries potatoes and a side of vegetables." 
          imgSrc="/assets/steak.jpg"
        />

        
      </div>
    </main>
  );
};

export default Main;