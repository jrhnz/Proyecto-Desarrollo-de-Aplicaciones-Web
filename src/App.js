import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './componentes/item/item.js'; // Corrected import path
import Menu from './componentes/menu/menu.js'; // Corrected import path
import Container from 'react-bootstrap/Container';
import Formulario from './componentes/formulario/formulario.js'; // Correcte
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state) => state.todos.value);
 
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
        <Row>
        <Col><Formulario></Formulario></Col>
        <Col>
         {todos.map((tarea)=>(
          <Item name={tarea.name} description={tarea.description} dueDate={tarea.dueDate}></Item>
         ))}
      </Col>
      </Row>
      </Container>

    </div>
  );
}

export default App;