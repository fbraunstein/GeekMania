// src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar';
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import Table from './components/Table';
import ModalExample from './components/Modal';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <CustomNavbar />
      <Carousel />
      <Cards />
      <Table />
      <ModalExample />
      <Footer />
    </div>
  );
}

export default App;

