import React, {Component} from 'react';
import NukaCarousel from 'nuka-carousel';
import classNames from 'classnames';

export default class CarouselComponent extends Component{
  render(){
    const {
      children,
    } = this.props;

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

        renderBottomCenterControls={() => (
          <React.Fragment></React.Fragment>
        )}
      >
        {children}
      </NukaCarousel>
    )
  }
}
