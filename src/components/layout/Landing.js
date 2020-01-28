import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
    <section className="landing">
       <div className='landing-inner'>
           <h1 className='x-large'>Welcome</h1>
           <p className='lead'>
               The purpose of this website to help you learn more about llamas and myself as a front end developer! 
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
}

export default Navbar;