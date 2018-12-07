import React, {Component} from 'react';
import './PreLoader.scss';
import logo from '../../../img/logo.png';

export default class PreLoaderComponent extends Component{

  constructor(){
    super();
    this.state = {
      shouldPreLoaderScreenDisappear: false,
    }
  }

  componentDidMount(){
    const timeForPreLoaderToDisappear = 6000;
    setTimeout(() => {
      this.setState({ shouldPreLoaderScreenDisappear: true });
    }, timeForPreLoaderToDisappear);
  }

  render(){
    const {
      shouldPreLoaderScreenDisappear,
    } = this.state;
    return(
      <React.Fragment>
        { !shouldPreLoaderScreenDisappear && 
          <div className="pre-loader-wrapper relative">
            <div className="h2 white uppercase align-center tag-line">
              <img 
                className="responsive-img logo"
                src={logo}
                alt="Logo"
              />
              <div className="bar margin-v"></div>
              Fashion Starts here
            </div>
          </div> 
        }
      </React.Fragment>
      
    )
  }
}
