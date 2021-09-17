import React, { useState, Fragment } from 'react'

export const Navigation = (props) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <nav id='menu' className={colorChange ? 'navbar navbar-default navbar-fixed-top' : 'navbar active navbar-fixed-top'}>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
          NFTFLIXPRO   
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll navele'>
                Features
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll navele'>
                Tokenom
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll navele'>
              Roadmap
              </a>
            </li>
           
            <li>
              <a href='#testimonials' className='page-scroll navele'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll navele'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll navele'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
