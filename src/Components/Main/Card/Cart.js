import './Cart.css'
import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cart() {

    const [openCart, SetOpenCart] = useState(true)
    let [colr, setColr] = useState(1);


    let styleOverflow = {}
    let styleSideBlock = {}

    if (openCart === true) {
        styleOverflow = { width: '100%' };
        styleSideBlock = { width: '385px' };
    }
    else {
        styleOverflow = { width: '0' };
        styleSideBlock = { width: '0' };
    }
    return <>
        <div className='Overflow' style={styleOverflow} onClick={() => SetOpenCart(false)}></div>
        <div className='SideBlock' style={styleSideBlock}>
        <Stack direction="horizontal" gap={3} id='topCard'>
            <div className="element"><h1>Корзина</h1></div>
            <div className="element ms-auto" ><img src='img/CloseButton.svg' alt="CloseButton" onClick={() => SetOpenCart(false)} /></div>
        </Stack> 
        <Card style={{ width: '325px', height: '140px' }}>  
        <Card.Text className='CartSail' style={{fontSize: 14}}>
            <img src="/img/imgCard1.png" style={{ width: '89px', height: '89px'}}/>
            <h5>Кргулый ковёр напольный “Кругляш”</h5>
          <p>Цена:<b>  1.500 рублей</b></p>  <div><button onClick={() => setColr(colr+1)}>+</button> <input  maxLength={2} style={{ width: '32px', height: '32px' }} value={colr} onChange={event => setColr(event.target.colr)}/><button onClick={() => setColr(colr-1)}>-</button></div>

        </Card.Text>
    </Card> 
        </div> 
        </>
}
export default Cart;
