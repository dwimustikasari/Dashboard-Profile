import React from 'react';
import './dashboard.css';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import UserSetting from './UserSetting';
import Informasi from './Informasi';



function Dashboard() {
    return(
    <div>
        <div id='navbar'>
            <Navbar/>
        </div>
        <div>
            <Slideshow/>
        </div>
        <div>
            <UserSetting/>
        </div>
        <div>
            <Informasi/>
        </div>
    </div>
          
    );
}

export default Dashboard
