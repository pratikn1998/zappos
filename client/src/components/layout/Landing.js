import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../App.css';

const Navbar = () => {
  return (
    <section className={styles.landing}>
      <div className={styles.landingInner}>
        <h1 className={styles.x-large}>WELCOME!</h1>
        <p className={styles.lead}>
          The purpose of this website to help you learn more about llamas and
          myself as a Front-End Developer!
        </p>
        <div className={styles.buttons}>
          <Link to='/llamas' className={'styles.btn styles.btnPrimary'}>
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
