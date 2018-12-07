import React, {Component} from 'react';
import Header from '../../Header/Container/HeaderContainer';
import HomePageComponent from '../../HomePage/Component/HomePageComponent';
import ContactUsComponent from '../../ContactUs/Component/ContactUsComponent';
import CollectionContainer from '../../Collection/Container/CollectionContainer';

export default class ScreenLoaderComponent extends Component{
  render(){
    return (
      <React.Fragment>
        <Header />
        {/* <HomePageComponent /> */}
        {/* <ContactUsComponent /> */}
        <CollectionContainer />
      </React.Fragment>
    )
  }
}
