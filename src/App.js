
// import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import Cart from './Components/Main/Card/Cart';
import Header from './Components/Header/Header';
import './App.css'
import Slider from './Components/Main/Slider';
import AllCard from './Components/Main/Card/AllCard';


function App() {


const [openCart, SetOpenCart] = useState(true);
const [cart, setCart] = useState([]);

    function addProdToCart(newProd) {
        setCart(prev => [...prev, newProd]);
    }
    return <div>
      <Cart openCart={openCart} onOpenCart = {()=>SetOpenCart(false)} cart={cart}/>
      <Header onOpenCart = {() => SetOpenCart(true)} />
      <Slider />
      <AllCard addProdToCart={(NEWPROD) => addProdToCart(NEWPROD)}/>/>
    </div>
  }

export default App
