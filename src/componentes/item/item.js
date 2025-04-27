import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss'; // Corrected import path

function Item() { // Renamed to start with an uppercase letter
  return (
    <Card style={{ width: '18rem' }}>
   
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Item; // Updated export to match the new name