import React, {Component} from 'react';
import classNames from 'classnames';
import './PreLoader.scss';
import logo from '../../../img/label.jpeg';

export default class PreLoaderComponent extends Component{

  constructor(){
    super();
    this.state = {
      isPreLoadingCompleted: false,
    }
  }

  componentDidMount(){
    const timeForPreLoaderScreen = 3000;
    setTimeout(() => {
      this.setState({ isPreLoadingCompleted: true });
    }, timeForPreLoaderScreen);
  }

  render(){
    const {
      isPreLoadingCompleted,
    } = this.state;
    return(
      <React.Fragment>
        <div className={classNames("pre-loader-wrapper relative", {'success' : isPreLoadingCompleted})}>
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
      </React.Fragment>
    )
  }
}
