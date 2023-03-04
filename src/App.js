// import { useState } from 'react';
// import { Button, Card } from 'react-bootstrap';
import Cart from './Components/Main/Card/Cart';
import Header from './Components/Header/Header';
import './App.css'
import Slider from './Components/Main/Slider';
import AllCard from './Components/Main/Card/AllCard';


function App() {
    return <div>
      <Cart/>
      <Header />
      <Slider />
      <AllCard />
    </div>
  }

export default App