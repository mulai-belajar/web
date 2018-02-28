import React from "react"
import Slider from 'react-slick'
import'../../App.css'
import {Image,Advertisement,Grid} from 'semantic-ui-react'


class Slides extends React.Component{
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000
    }
    return (
    <div className='slick-slider'>
      <Slider {...settings} >
        <div><img className='foto' src="https://s.chirpstory.com/uploads/20170306/ba330c3f327e2afd888e5bd7b3abd1b5.JPG" alt=""/></div>
        <div><img className='foto' src="https://s.chirpstory.com/uploads/20170306/ba330c3f327e2afd888e5bd7b3abd1b5.JPG" alt=""/></div>
      </Slider>
    </div>



    );
  }
}

export default Slides
