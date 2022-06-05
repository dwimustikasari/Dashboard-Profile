import './usersetting.css';
import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import image1 from './Image/avatar.jpg';
import image2 from './Image/edit-removebg-preview.png';
/**
 * Method UserSetting dibuat untuk menampilkan photo profile dari pengguna
 * selain itu method ini juga menampilkan id dan username dari user
 * @returns mengembalikan nilai dari komponen yang akan ditampilkan.
 */

function UserSetting() {
    return(
        <nav className='navbar shadow p-3 mb-5 bg-white rounded'>
              <a class="navbar-brand" href="#">
              <Avatar className='table-avatar shadow' src={image1} id='masukan-gambar'/>
              </a>
              <div class="container-fluid" id='Username'>
                  <h1 className='button-navbar' id='username'>
                      Roger Danuarta
                  </h1>
                  <div class="container-fluid" id='Username'></div>
                  <h2 className='button-navbar'  id='id-name'>
                      @rogerdanuarta
                  </h2>
                  <div id='edit-profile'>
                      <img src={image2} id='edit-icon' style={{ width: '1rem', marginTop: '-7px' }} />
                  <a id='edit-profile' href='#' className='button-navbar'> Edit Profile</a>
                  </div>
              </div>
             
         </nav>
    );
    
}
export default UserSetting