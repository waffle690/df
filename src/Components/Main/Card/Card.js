import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './Card.css'

function Сard() {
  let [colr, setColr] = useState(true);
  let [btnColr, setBtnColr] = useState(true);
  return <div className="mainCard">
    <Card style={{ width: '210px', height: '280px' }}>
    <div className="btnserd">{btnColr ? <Button variant="outline-secondary" onClick={() => setBtnColr(!btnColr)}>♡
</Button> : <Button variant="success" onClick={() => setBtnColr(!btnColr)}>♥</Button>}</div>
      <Card.Img variant="top" src="/img/imgCard1.png" style={{ width: '89px', height: '89px', margin: '10px auto 0px'}} />
      <Card.Body>
        <Card.Title className='cardTitle'>Кргулый ковёр напольный “Кругляш”</Card.Title>
        <Card.Text style={{fontSize: 14}}>
          Цена:<br/><b>1.500 рублей</b>
          <div>{colr ? <Button variant="outline-secondary" onClick={() => setColr(!colr)}>+</Button> : <Button variant="success" onClick={() => setColr(!colr)}>✓</Button>}</div>
        </Card.Text>

      </Card.Body>
    </Card>
    </div>;
}

export default Сard;