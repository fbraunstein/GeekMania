// src/components/Cards.jsx
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Batman1 from '../assets/Batman1.png';
import IronMan1 from '../assets/IronMan1.png';
import DeadPool1 from '../assets/DeadPool1.png';
import Hulk1 from '../assets/Hulk1.png';
import SuperMan1 from '../assets/SuperMan1.png';
import SpiderMan1 from '../assets/SpiderMan1.png';
import Venom1 from '../assets/Venom1.png';
import PanteraNegra1 from '../assets/PanteraNegra1.png';
import ArqueiroVerde1 from '../assets/ArqueiroVerde1.png';

const Cards = () => {
  const produtos = [
    { id: 1, nome: 'Boneco Batman Zippy', preco: 'R$ 40,00', image: Batman1 },
    { id: 2, nome: 'Boneco IronMan', preco: 'R$ 50,00', image: IronMan1 },
    { id: 3, nome: 'Boneco Deadpool', preco: 'R$ 500,00', image: DeadPool1 },
    { id: 4, nome: 'Boneco Hulk', preco: 'R$ 60,00', image: Hulk1 },
    { id: 5, nome: 'Boneco Superman', preco: 'R$ 400,00', image: SuperMan1 },
    { id: 6, nome: 'Boneco Spiderman', preco: 'R$ 150,00', image: SpiderMan1 },
    { id: 7, nome: 'Boneco Pantera Negra', preco: 'R$ 50,00', image: PanteraNegra1 },
    { id: 8, nome: 'Boneco Venom', preco: 'R$ 200,00', image: Venom1 },
    { id: 9, nome: 'Boneco Arqueiro Verde', preco: 'R$ 200,00', image: ArqueiroVerde1 },
  ];

  return (
    <Container>
      <Row>
        {produtos.map((produto) => (
          <Col key={produto.id} sm={12} md={4} lg={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={produto.image} />
              <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>{produto.preco}</Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
