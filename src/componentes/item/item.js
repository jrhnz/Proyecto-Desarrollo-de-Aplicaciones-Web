import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss'; // Corrected import path

function Item(props) { // Renamed to start with an uppercase letter
  return (
    <Card style={{ width: '18rem' }}>
   
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        {props.dueDate}
      </Card.Body>
    </Card>
  );
}

export default Item; // Updated export to match the new name