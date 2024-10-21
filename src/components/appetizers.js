import React, { useRef, useEffect, useState } from 'react';
import Card from './card'; 
import './orderOnline.css'; 

const Appetizers = ({ items }) => {
  const scrollContainer = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  // Here we're adding a scroll event listener to the scrollContainer
  useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = scrollContainer.current.scrollLeft;
    const containerWidth = scrollContainer.current.offsetWidth;
    const totalScrollWidth = scrollContainer.current.scrollWidth;
    const totalPages = Math.ceil(totalScrollWidth / containerWidth);

    const currentPage = Math.round(scrollPosition / containerWidth);
    setActiveDot(currentPage);
  };
// We're adding the event listener when the component mounts
  if (scrollContainer.current) {
    scrollContainer.current.addEventListener('scroll', handleScroll);
  }
// We're removing the event listener when the component unmounts
  return () => {
    if (scrollContainer.current) {
      scrollContainer.current.removeEventListener('scroll', handleScroll);
    }
  };
}, []); 
// We're adding the scroll event listener to the scrollContainer
  return (
    <div className="menu-wrapper">
      <h2 className="menu-category-title">Appetizers</h2>
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

export default Appetizers;
