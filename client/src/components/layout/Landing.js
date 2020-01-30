import React from 'react';
import { Link } from 'react-router-dom';
// import styles from '../../App.css';

const Navbar = () => {
  return (
    <section className='landing'>
      <div className='landing-inner'>
        <h1 className='x-large'>WELCOME!</h1>
        <p className='lead'>
          The purpose of this website to help you learn more about llamas and
          myself as a Front-End Developer!
        </p>
        <div className='buttons'>
          <Link to='/llamas' className='btn btn-primary'>
            About Llamas
          </Link>
          <Link to='/aboutpratik' className='btn btn-light'>
            About Pratik
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
