import React, { useState } from "react";

const OnlineOrderCard = ({ item, addToCart }) => {
  // State to track quantity
  const [quantity, setQuantity] = useState(0);

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to decrease quantity, ensuring it doesn't go below 0
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  // Function to handle adding to cart with quantity
  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({...item, quantity}); 
      setQuantity(0); 
    }
  };

  return (
    <div className="card">
      <img src={item.imgSrc} alt={item.title} />
      <div className="title-price">
        <h2>{item.title}</h2>
        <p className="price">{item.price}</p>
      </div>
      <p>{item.description}</p>

      {/* Quantity Selector */}
      <div className="quantity-selector">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default OnlineOrderCard;
