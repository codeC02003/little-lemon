import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './card';
import './orderOnline.css';

const OrderOnline = () => {
  const [cart, setCart] = useState([]);
  const [activeDot, setActiveDot] = useState(0); // State to track the active dot
  const scrollContainer = useRef(null);

  const addToCart = (itemWithQuantity) => {
    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(item => item.id === itemWithQuantity.id);
    if (existingItemIndex >= 0) {
      // If the item exists, update its quantity
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += itemWithQuantity.quantity;
      setCart(newCart);
    } else {
      // If the item doesn't exist, add it to the cart
      setCart((prevCart) => [...prevCart, itemWithQuantity]);
    }
  };

 const onlineOrderItems = [
    { id: 1, title: 'Greek Salad', price: '$8.99', description: 'A fresh and healthy Greek salad with tomatoes, cucumbers, olives, and feta cheese.', imgSrc: '/assets/greek-salad.jpg' },
    { id: 2, title: 'Alfredo Pasta', price: '$12.99', description: 'A pasta dish with creamy Alfredo sauce and chicken. Served with garlic bread.', imgSrc: '/assets/pasta_alfredo.jpg' },
    { id: 3, title: 'Steak and Fries', price: '$19.99', description: 'Juicy steak cooked to perfection. Served with fries potatoes and a side of vegetables.', imgSrc: '/assets/steak.jpg' },
    { id: 4, title: 'Lemonade', price: '$3.99', description: 'Freshly squeezed lemonade made with real lemons.', imgSrc: '/assets/lemonade.jpg'},
    { id: 5, title: 'Chocolate Cake', price: '$6.99', description: 'A rich and moist chocolate cake topped with chocolate frosting.', imgSrc: '/assets/chocolate-cake.jpg' },
    { id: 6, title: 'Cheesecake', price: '$5.99', description: 'A creamy cheesecake with a graham cracker crust.', imgSrc: '/assets/cheesecake.jpg' },
    { id: 7, title: 'Chicken Tenders', price: '$10.99', description: 'Crispy chicken tenders served with your choice of dipping sauce.', imgSrc: '/assets/chicken-tenders.jpg' },
  ];


useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = scrollContainer.current.scrollLeft;
    const viewportWidth = scrollContainer.current.offsetWidth;
    const newActiveDot = Math.floor(scrollPosition / viewportWidth);
    setActiveDot(newActiveDot);
  };

  // You only want to add the event listener if `scrollContainer.current` is not null
  const menuElement = scrollContainer.current;
  if (menuElement) {
    menuElement.addEventListener('scroll', handleScroll);
  }

  // Return a cleanup function that removes the event listener
  // Only try to remove the event listener if `menuElement` is not null
  return () => {
    if (menuElement) {
      menuElement.removeEventListener('scroll', handleScroll);
    }
  };
}, []);
 
  return (
    <main className="header">
      <h1 className='title'>Little Lemon </h1>
      <p className='sub-title'>New Brunswick</p>
      <p className='p-description'>We are committed to delivering an exceptional dining experience to you. Our menu is filled with a diverse range of dishes and beverages, carefully crafted to delight your palate. We eagerly anticipate the opportunity to serve you and exceed your expectations. Place your order now and savor the flavors we have to offer!</p>
      <Link to="/reservations" className='btn'>Reserve a Table</Link>
      <img src="/assets/delivery.jpg" alt="logo" />
      <div className="order-online-container">
        <div className="menu-wrapper">
          <div className="menu" ref={scrollContainer}>
            {onlineOrderItems.map(item => (
              <div className="menu-item" key={item.id}>
      <Card {...item} addToCart={() => addToCart(item)} />
    </div>
            ))}
          </div>
        </div>
        <div className="dot-container">
          {Array(Math.ceil(onlineOrderItems.length / 3)).fill().map((_, i) => (
            <span
              key={i}
              className={`dot ${i === activeDot ? 'active-dot' : ''}`}
              onClick={() => {
                const scrollTo = i * scrollContainer.current.offsetWidth;
                scrollContainer.current.scroll({ left: scrollTo, behavior: 'smooth' });
              }}
            ></span>
          ))}
        </div>
      </div>
    </main>
  )
}

export default OrderOnline;