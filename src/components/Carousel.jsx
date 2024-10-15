// src/components/Carousel.jsx
import { Carousel } from 'react-bootstrap';
import Batman1 from '../assets/Batman1.png';
import IronMan1 from '../assets/IronMan1.png';
import DeadPool1 from '../assets/DeadPool1.png';
import Hulk1 from '../assets/Hulk1.png';
import SuperMan1 from '../assets/SuperMan1.png';
import SpiderMan1 from '../assets/SpiderMan1.png';
import Venom1 from '../assets/Venom1.png';
import PanteraNegra1 from '../assets/PanteraNegra1.png';
import ArqueiroVerde1 from '../assets/ArqueiroVerde1.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../styles.css';

const CarouselComponent = () => {
  return (
    <Carousel
      prevIcon={<FaArrowLeft style={{ fontSize: '2rem', color: '#000' }} />}
      nextIcon={<FaArrowRight style={{ fontSize: '2rem', color: '#000' }} />}
      indicators={false}
      controls={true}
      interval={3000}   // Troca automática a cada 3 segundos
      fade={true}       // Animação suave com fade (interligação das imagens)
      slide={true}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={Batman1} alt="Batman 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={IronMan1} alt="Iron Man" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={DeadPool1} alt="Deadpool" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Hulk1} alt="Hulk" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SuperMan1} alt="Superman" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SpiderMan1} alt="Spiderman" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Venom1} alt="Venom" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={PanteraNegra1} alt="Pantera Negra" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ArqueiroVerde1} alt="Arqueiro Verde" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;







