import React from 'react';

function Navbar() {
  return (
    <div style={{ background: '#333', display: 'flex' }}>
      <ul className='navbar'>
        <li className='item'>Home</li>
        <li className='item'>About</li>
        <li className='item'>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
