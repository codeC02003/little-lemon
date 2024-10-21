import React, { useState } from 'react';
import './login.css';

const LoginForm = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the login logic, possibly sending the details to a server
    console.log(loginDetails);
    alert('Login attempt...');
  };

  return (
   <>
<header className="header">
        <h1 className='title'>Little Lemon</h1>
        <p className='sub-title'>New Brunswick</p>
        <p className='p-description'>
          Join us on a journey of taste, crafted with care and served with passion. Your next culinary adventure is just a login away. We're excited to welcome you back and make your dining experience more enjoyable and tailored to your tastes. Log in now and let the flavors of Little Lemon elevate your day.
        </p>
        <img src="/assets/login.jpg" alt="Little Lemon" />
      </header>

    <section className="login-form-section">
      <h2 className='form-title'>Login to Your Account</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={loginDetails.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={loginDetails.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </section>
    </>
  );
}

export default LoginForm;
