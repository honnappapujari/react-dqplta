import React, { useState } from 'react';
import Header from './Header.js';
import Home from './Home.js';
import { Button } from 'antd';
import ContactUs from './ContactUs.js';
import AboutMe from './AboutMe.js';
import { Routes, Route, Link } from 'react-router-dom';
import 'antd/dist/reset.css';
import './style.css';

export default function App() {
  const [word, setWord] = React.useState('Honnappa');
  function handleClick() {
    setWord('manjunatha');
  }
  return (
    <div>
      {/* <img src={} height={200}/> */}
      <Link to="/">
        <Button>Home</Button>
      </Link>

      <Link to="/contact-us">
        <Button>Contact Us</Button>
      </Link>
      <Link to="/about-me">
        <Button>About Us</Button>
      </Link>
      <Header ename={word} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>

      <Button type="primary" onClick={handleClick}>
        Change
      </Button>
    </div>
  );
}
