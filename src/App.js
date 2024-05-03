import './App.css';
import Header from './Header/header';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="main">
      <Header />
      <Container fluid>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
