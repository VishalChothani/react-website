import React, {Component} from 'react';
import NukaCarousel from 'nuka-carousel';
import classNames from 'classnames';
import heroImg from '../../../img/heroImg.jpeg';
import './Carousel.scss';

// This carousel can be modified but no need as of now.
export default class Carousel extends Component{
  render(){
    return(
      <NukaCarousel
        renderCenterLeftControls={({ previousSlide, currentSlide }) => (
          <span className={classNames('h1 fas fa-arrow-alt-circle-left pointer', {'display-none': currentSlide===0})}
            onClick={previousSlide}
          >
          </span>
        )}

        renderCenterRightControls={({ nextSlide, currentSlide, slideCount }) => (
          <span className={classNames('h1 fas fa-arrow-alt-circle-right pointer', {'display-none': currentSlide===slideCount-1})}
            onClick={nextSlide}
          >
          </span>
        )}
      >
        <img src={heroImg} alt="Img 1" />
        <img src={heroImg} alt="Img 2" />
        <img src={heroImg} alt="Img 3" />
      </NukaCarousel>
    )
  }
}
