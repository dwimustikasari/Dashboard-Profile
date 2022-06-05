import React from 'react';
import './slideshow.css';
import image1 from './Image/Selamat Datang.png';
import image2 from './Image/image2.webp';
import image3 from './Image/image3.jpg';
import{Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * method Slideshow adalah method yang dibuat untuk menampilkan gambar dengan metode slide, terdapat 3 gambar yang ditampilkan secara berurutan dengan waktu 30 detik
 * @returns mengembalikan gambar yang akan ditampilkan dengan metode slide
 */

function Slideshow() {
    return(
        <Carousel>
          <Carousel.Item>
            <img src={image1} height="500px" width="100%" alt="img1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={image2} height="500px" width="100%" alt="img1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={image3} height="500px" width="100%" alt="img1"/>
          </Carousel.Item>
        </Carousel>
    );
}

export default Slideshow
