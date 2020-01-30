import React from 'react';
import { Link } from 'react-router-dom';
// const logo = require('svg-url-loader!./llama.svg'); // eslint-disable-line

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <Link className='navbar-brand' id="navitemwhite" to='/'>
        <img
          src='/llama.svg'
          width='30'
          height='30'
          className='d-inline-block align-top'
          alt=''
        />{' '}
        LLAMAS
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link className='nav-link' id="navitemwhite" to='/llamas'>
              LLAMAS
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link'id="navitemwhite" to='/aboutpratik'>
              ABOUT PRATIK 
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link'id="navitemwhite" to='/technicaldecisions'>
              TECH DECISIONS 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
