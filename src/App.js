import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import React from 'react';
import Main from './components/main';
import Header from  './components/header';
import Footer from './components/footer';
import HamburgerMenu from './components/hamburger_menu';
import OrderOnline from './components/orderOnline';
import Reservation from './components/reservation';
import LoginForm from './components/login';
import Menu from './components/menu';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className="content">
          <HamburgerMenu />
          <div className='navbar-section'>
            <Navbar />
          </div>
          <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/order-online" element={<OrderOnline />} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={
              <>
                <div className='header-section'>
                  <Header />
                </div>
                <div className='main-section'>
                  <Main />
                </div>
              </>
            } />
          </Routes>
        </div>
        
        <div className='footer-section'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
