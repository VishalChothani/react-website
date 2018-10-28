import React, { Component } from 'react';
import './App.scss';
import Header from './js/Header/Container/HeaderContainer';
import Carousel from './js/Carousel/Component/CarouselComponent';
import Card from './js/Cards/Component/CardComponent';
import HowItWorks from './js/HowItWorks/Component/HowItWorksComponent';
import cardImg from '../src/img/card.jpeg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="hero-carousel">
          <Carousel />
        </div>
        <div className="card-container margin-v">
          <Card alt="card1" content="Men" src={cardImg} />
          <Card alt="card2" content="Women" src={cardImg} />
          <Card alt="card3" content="Kids" src={cardImg} />
        </div>
        <HowItWorks />
      </div>
    );
  }
}

export default App;
