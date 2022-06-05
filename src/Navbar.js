import React from 'react';
import './navbar.css';
import image1 from './Image/Logo.png';

/**
 * method Navbar dibuat untuk menampilkan komponen dari navbar dashboard profile
 * @returns mengembalikan nilai komponen yang dibutuhkan pada navbar dashboard profile 
 */

function Navbar() {
    return(
        <nav className="navbar fixed-top navbar-expand-lg justify-content-between align-items-center px-5 shadow p-3 mb-5 bg-white rounded"
      id="topNavbar">
        <div class="container-fluid">
            <img
              className="img-fluid"
              style={{ width: '4rem', marginLeft: '1rem' }}
              src={image1}
              alt="logo-dashboard"/>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id='search'/>
        </form>
            <div>
            <a id='home' href='#' className='button-navbar' style={{marginRight: '1rem' }} >Home  </a>
            <a id='profile' href='#' className='button-navbar' style={{marginRight: '1rem' }}>Profile  </a>
            <a id='logout' href='#' className='button-navbar'>Logout  </a>
            </div>
   
      </div>
    </nav>   
    );
}

export default Navbar
