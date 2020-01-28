import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
const logo = require('./llama.svg');


const Navbar = () => {
    return (
        <nav className='navbar bg-dark sticky-nav'>
        <h3>
        
          <Link className="navbar-brand" to='/'>
              <img src={logo} width="30px" height="30px"/> Llamas
          </Link>
        </h3>
        <ul className="mt-3">
        <li>
        <Link to='/llamas'>About Llamas</Link>
        </li>
      <li>
        <Link to='/aboutpratik'>Pratik</Link>
      </li>
    </ul>
      </nav>
     
    );
}

export default Navbar;