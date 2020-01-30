import React from 'react';
import { Link } from 'react-router-dom';
// import styles from '../../App.css';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='landing-inner'>
        <h1 className='x-large'>WELCOME!</h1>
        <p className='lead'>
          The purpose of this website to help you learn more about llamas and
          myself as a Front-End Developer!
        </p>

        <div className='buttons'>
          <Link to='/llamas' className='btn btn-light'>
            Llama Fact and Jokes
          </Link>

          <Link to='/aboutpratik' className='btn btn-primary'>
            About Pratik
          </Link>

          <Link to='/technicaldecisions' className='btn btn-light'>
            Technical Decisions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
