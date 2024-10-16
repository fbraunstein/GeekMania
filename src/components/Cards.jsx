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
    { id: 1, nome: 'Boneco Batman Zippy', preco: 'R$ 40,00', image: Batman1, categoria: 'boneco' },
    { id: 2, nome: 'Boneco IronMan', preco: 'R$ 50,00', image: IronMan1, categoria: 'boneco' },
    { id: 3, nome: 'Boneco Deadpool', preco: 'R$ 500,00', image: DeadPool1, categoria: 'boneco' },
    { id: 4, nome: 'Boneco Hulk', preco: 'R$ 60,00', image: Hulk1, categoria: 'boneco' },
    { id: 5, nome: 'Boneco Superman', preco: 'R$ 400,00', image: SuperMan1, categoria: 'boneco' },
    { id: 6, nome: 'Boneco Spiderman', preco: 'R$ 150,00', image: SpiderMan1, categoria: 'boneco' },
    { id: 7, nome: 'Boneco Pantera Negra', preco: 'R$ 50,00', image: PanteraNegra1, categoria: 'boneco' },
    { id: 8, nome: 'Boneco Venom', preco: 'R$ 200,00', image: Venom1, categoria: 'boneco' },
    { id: 9, nome: 'Boneco Arqueiro Verde', preco: 'R$ 200,00', image: ArqueiroVerde1, categoria: 'boneco' },
  ];

  // Função para agrupar produtos por categoria
  const agruparPorCategoria = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria);
  };

  return (
    <Container>
      <h2 style={categoriaTituloStyle}>Bonecos:</h2>
      <Row>
        {agruparPorCategoria('boneco').map((produto) => (
          <Col key={produto.id} sm={12} md={4} lg={4}>
            <Card style={cardStyle}>
              <Card.Img 
                variant="top" 
                src={produto.image} 
                style={{ height: '450px', objectFit: 'contain', width: '100%' , backgroundColor: 'white'}} 
              />
              <Card.Body>
                <Card.Title style={cardTitleStyle}>{produto.nome}</Card.Title>
                <Card.Text style={cardPriceStyle}>{produto.preco}</Card.Text>
                <Button style={buttonStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// Estilos inline
const categoriaTituloStyle = {
  color: '#1F3B73',
  textAlign: 'center',
  margin: '20px 0',
};

const cardStyle = {
  backgroundColor: '#1F3B73',
  color: '#ffffff',
  border: '1px solid #F1C40F',
  marginBottom: '20px',
  transition: 'transform 0.3s ease',
};

const cardTitleStyle = {
  fontSize: '1.2rem',
  color: '#ffffff',
};

const cardPriceStyle = {
  fontSize: '1rem',
  color: '#F1C40F',
};

const buttonStyle = {
  backgroundColor: '#F1C40F',
  border: 'none',
  color: '#ffffff',
  padding: '10px 20px',
  transition: 'background-color 0.3s ease',
};

const handleHover = (e) => {
  e.target.style.backgroundColor = '#ffffff';
  e.target.style.color = '#F1C40F';
  e.target.style.border = '1px solid #F1C40F';
};

const handleLeave = (e) => {
  e.target.style.backgroundColor = '#F1C40F';
  e.target.style.color = '#ffffff';
  e.target.style.border = 'none';
};

export default Cards;

