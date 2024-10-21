import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ title, price, description, imgSrc, addToCart }) => {
  // Initialize quantity state only if addToCart function is provided
  const [quantity, setQuantity] = useState(0);

  // Function to increase quantity
  const increaseQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);

  // Function to decrease quantity but not below 0
  const decreaseQuantity = () => setQuantity(prevQuantity => prevQuantity > 0 ? prevQuantity - 1 : 0);

  // Modified addToCart to call with quantity
  const handleAddToCart = () => {
    if (addToCart && quantity > 0) {
      addToCart({ title, price, description, imgSrc, quantity }); 
      setQuantity(0); 
    }
  };

  return (
    <div className="card" style={{ marginRight: '20px' }}>
      <img src={imgSrc} alt={title} />
      <div className="title-price">
        <h2>{title}</h2>
        <p className="price">{price}</p>
      </div>
      <p>{description}</p>
        <>
          <div className="quantity-controls">
            <button onClick={decreaseQuantity} className="icon-button">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"> <line x1="5" y1="12" x2="19" y2="12"></line> </svg>
            </button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity} className="icon-button">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"> <line x1="12" y1="5" x2="12" y2="19"></line> <line x1="5" y1="12" x2="19" y2="12"></line> </svg>
            </button>
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        </>
    </div>
  );
};

export default Card;



    