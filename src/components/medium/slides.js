import React from "react"
import Slider from 'react-slick'
import'../../App.css'

class Slides extends React.Component{
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true
    }
    return (
    <div className='slick-slider'>
      <Slider {...settings} >
        <div><img className='foto' src="./images/anak-anak.jpg" alt=""/></div>
        <div><img className='foto' src="./images/kelasmusik.jpg" alt=""/></div>
        <div><img className='foto' src="./images/kelas-it.jpg" alt=""/></div>
      </Slider>
    </div>
    );
  }
}

export default Slides
