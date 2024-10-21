import React, { useState } from 'react';
import './reservation.css';

const Reservation = () => {
  const [reservationDetails, setReservationDetails] = useState({
    date: '',
    time: '',
    guests: 1,
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };
// Here we're sending the reservation details to the server
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting reservations...', reservationDetails);
    try{
      const response = await fetch('api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationDetails),
      });

      //Check if the response is ok
      if (!response.ok) {
        const data = await response.json();
        console.log('Reservation successful:', data);
        alert('Reservation successful!');
      }else{
        console.log('Reservation failed:', response.status);
        alert('Reservation failed!');
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      alert('Error submitting reservation!');
    }
  };

  return (
    <>
      <header className="header">
        <h1 className='title'>Little Lemon</h1>
        <p className='sub-title'>New Brunswick</p>
        <p className='p-description'>
          At Little Lemon, we're more than just a restaurant; we're a destination where culinary dreams come true. We eagerly anticipate the opportunity to serve you and are committed to providing an unparalleled dining experience. Reserve your table with us and let us take you on a gastronomic journey that promises to tantalize your taste buds and leave you longing for more.
        </p>
        <img src="/assets/reservation.jpg" alt="Little Lemon" />
      </header>
      
      {/* New Section for Reservation Form */}
      <section className="reservation-form-section">
        <h2 className='form-title'>Reserve Your Table</h2>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <input type="date" name="date" value={reservationDetails.date} onChange={handleChange} required />
          <input type="time" name="time" value={reservationDetails.time} onChange={handleChange} required />
          <input type="number" name="guests" min="1" value={reservationDetails.guests} onChange={handleChange} required />
          <input type="text" name="name" placeholder="Your Name" value={reservationDetails.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={reservationDetails.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={reservationDetails.phone} onChange={handleChange} required />
          <textarea name="specialRequests" placeholder="Special Requests" value={reservationDetails.specialRequests} onChange={handleChange}></textarea>
          <button type="submit" className="submit-btn">Reserve Now</button>
        </form>
      </section>
    </>
  );
}

export default Reservation;
