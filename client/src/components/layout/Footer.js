import React from 'react';

const Footer = () => {
  return (
    <footer className='footer-style'>

      <div className='footer-container text-center'>
      <a href="https://www.linkedin.com/in/pratiknallamotu/"><i class="fab fa-linkedin mr-2"></i></a>
      <a href="https://github.com/pratikn1998"><i class="fab fa-github mr-2"></i></a>

        <span className='text-center'>
          Icons made by{' '}
          <a
            href='https://www.flaticon.com/authors/flat-icons'
            title='Flat Icons'
          >
            Flat Icons{' '}
          </a>
          from{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
