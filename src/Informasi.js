import React from 'react';
import './informasi.css';
import Avatar from "@material-ui/core/Avatar";
import image1 from './Image/avatar.jpg';
import image2 from './Image/image1.webp';

/**
 * Method Informasi digunakan untuk menampilkan UI dari 3 box yang berisikan teks informasi dari profile, menampilkan gambar yang telah diupload oleh pengguna dan box yang menampilkan colase gambar
 * @returns mengembalikan nilai yaitu berupa komponen dari 3 box beserta dengan isinya
 */

function Informasi() {
    return(
<div class="row">
  <div class="col-sm-6 shadow p-3 mb-5 bg-white rounded" style={{ width: '350px', height: '500px', marginLeft: '100px' }}>
  <h5 class="card-title" style={{ textAlign: "center" }}>Informasi</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
  <div class="col-sm-6 shadow p-3 mb-5 bg-white rounded" style={{ width: '700px', height: '570px', marginLeft: '60px' }}>
      <div class="container-fluid">
      <Avatar className='table-avatar shadow' src={image1}/>
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
      <img className="img-fluid" style={{ width: '650px', marginLeft:"8px",  marginTop:"8px" }} src={image2} alt="logo-dashboard"/>
  </div>
  <div class="col-sm-6 shadow p-3 mb-5 bg-white rounded" style={{ width: '350px', height: '500px', marginLeft: '60px' }}>
  <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
    );
}

export default Informasi
