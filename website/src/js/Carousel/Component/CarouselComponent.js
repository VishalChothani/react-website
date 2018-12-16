import React, {Component} from 'react';
import configurationService from '../../Common/ConfigurationService';
import Slider from "react-slick";
import './Carousel.scss';


export default class CarouselComponent extends Component{
  render(){
    const {
      children,
    } = this.props;

    const isInMobile = configurationService.isInMobile();

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: isInMobile ? false : true,
      autoplay: true,
    };

    return(
      <Slider className="custom-carousel" {...settings}>
        {children}
      </Slider>
    )
  }
}
