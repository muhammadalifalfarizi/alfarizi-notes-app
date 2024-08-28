import React from 'react';
import { Link } from 'react-router-dom';
 
function NavigationAdd() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/add">Add</Link></li>
      </ul>
    </nav>
  );
}
 
export default NavigationAdd;