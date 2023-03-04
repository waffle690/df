import Stack from 'react-bootstrap/Stack';
import Card from './Card.js';
import './AllCard.css'

function AllCards() {
    return (
        <div className="MainContent">
        <Stack direction="horizontal" gap={3}>
            <h1>Все кoры</h1>
            <input className="ms-auto" />
        </Stack>

        <div className="Cards">
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
</div>
    );
}
export default AllCards;