// src/components/Table.jsx
import { Table as BootstrapTable } from 'react-bootstrap';

const ProductTable = () => {
  return (
    <BootstrapTable striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Boneco Batman</td>
          <td>R$ 40,00</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Boneco Iron Man</td>
          <td>R$ 50,00</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Boneco Deadpool</td>
          <td>R$ 500,00</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Boneco Hulk</td>
          <td>R$ 60,00</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Boneco Superman</td>
          <td>R$ 400,00</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Boneco Spiderman</td>
          <td>R$ 150,00</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Boneco Pantera Negra</td>
          <td>R$ 50,00</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Boneco Venom</td>
          <td>R$ 400,00</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Boneco Arqueiro Verde</td>
          <td>R$ 200,00</td>
        </tr>
      </tbody>
    </BootstrapTable>
  );
};

export default ProductTable;

