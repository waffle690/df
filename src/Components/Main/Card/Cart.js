import './Cart.css'
import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function Cart() {

    const [openCart, SetOpenCart] = useState(true)
    let [colr, setColr] = useState(1);
    let [basket, setBasket] = useState(true);

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
        <div className='Overflow' style={styleOverflow} onClick={() => SetOpenCart(false)}>        </div>
        <div className='SideBlock' style={styleSideBlock}>
        <Stack direction="horizontal" gap={3} id='topCard'>
            <div className="element"><h3>Корзина</h3></div>
            <div className="element ms-auto" ><img src='img/CloseButton.svg' alt="CloseButton" onClick={() => SetOpenCart(false)} /></div>
        </Stack> 
        <div className='CartItems'>
        <Card style={{ width: '325px', height: '140px' }}>  
        <Card.Text className='CartSail' style={{fontSize: 14}}>
            <img src="/img/imgCard1.png" style={{ width: '89px', height: '89px'}}/>
            <div className='CartText'>
            <h5>Кргулый ковёр напольный “Кругляш”</h5>
            <div><p><b>  1.500 рублей</b></p>  </div>
            <div className='CartButon'>
            <img src="./img/ButtonMinus.png" onClick={() => setColr(colr-1)} style={{ width: '32px', height: '32px'}} alt="-"/> <input  id="CartInput"maxLength={2} style={{ width: '32px', height: '32px' }} value={colr} onChange={event => setColr(event.target.colr)}/><img src="./img/ButtonPlus.png" onClick={() => setColr(colr+1)} style={{ width: '32px', height: '32px'}} alt="+"/>
            </div>
            </div>
        </Card.Text>
        
    </Card> 
    </div>
<div className='MainEnd'>
<p>Итого:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ184.600 р</p>
<p>Налог:30%ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ42.600 р</p>
<div>{basket ? <img src='./img/ButtonBuy.png' onClick={() => setBasket(!basket)} id="BtnBuy"/> : <img src='./img/ButtonBuy2.png' onClick={() => setBasket(!basket)} id="BtnBuy2"/>}</div>

</div>

        </div> 
        
        </>
}
export default Cart;
