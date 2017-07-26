import React from 'react';
import { Link }  from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <header>
      <Link to="/dashboard">dashboard</Link>
    </header>
  )
}

export default Navigation;