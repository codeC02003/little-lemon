import React, { useRef, useEffect, useState } from 'react';
import Card from './card'; // Adjust the import path as necessary
import './orderOnline.css'; // Reusing styles from OrderOnline

const Salads = ({ items }) => {
  const scrollContainer = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = scrollContainer.current.scrollLeft;
    const containerWidth = scrollContainer.current.offsetWidth;
    const totalScrollWidth = scrollContainer.current.scrollWidth;
    const totalPages = Math.ceil(totalScrollWidth / containerWidth);

    const currentPage = Math.round(scrollPosition / containerWidth);
    setActiveDot(currentPage);
  };

  // Check if scrollContainer.current exists before adding the event listener
  if (scrollContainer.current) {
    scrollContainer.current.addEventListener('scroll', handleScroll);
  }

  // Cleanup function
  return () => {
    // Also check if scrollContainer.current exists before removing the event listener
    if (scrollContainer.current) {
      scrollContainer.current.removeEventListener('scroll', handleScroll);
    }
  };
}, []); 

  return (
    <div className="menu-wrapper">
      <h2 className="menu-category-title">Salads</h2>
      <div className="menu" ref={scrollContainer}>
        {items.map(item => (
          <div className="menu-item" key={item.id}>
            <Card {...item} />
          </div>
        ))}
      </div>
      <div className="dot-container">
        {Array.from({ length: Math.ceil(items.length / 3) }, (_, index) => (
          <span key={index} className={`dot ${index === activeDot ? 'active-dot' : ''}`} onClick={() => {
            const scrollTo = index * scrollContainer.current.offsetWidth;
            scrollContainer.current.scroll({ left: scrollTo, behavior: 'smooth' });
          }}></span>
        ))}
      </div>
    </div>
  );
};

export default Salads;
