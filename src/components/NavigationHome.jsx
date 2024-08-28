import React from 'react';
import { Link } from 'react-router-dom';
 
function NavigationHome() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
}
 
export default NavigationHome;