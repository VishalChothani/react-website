import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import configurationService from '../../Common/ConfigurationService';

export class MapLocationComponent extends Component{
  render(){

    const style = {
      width: '50%',
      height: '100%'
    }
    const isInMobile = configurationService.isInMobile();

    return (
      <Map 
        google={this.props.google} zoom={17}
        initialCenter={{
          lat: 18.5108,
          lng: 73.8796
        }}
        style={ !isInMobile ? style: ''}
      >
        <Marker />
          
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBoVjMD-hRItZ_-QI_GZpbUuflFR7FQXG0")
})(MapLocationComponent)
