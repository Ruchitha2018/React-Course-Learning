import { useContext } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products.js';
import Product from './Product.jsx';
import {CartContext} from '../store/CreateContext.jsx';

export default function Shop() {
 const { items } = useContext(CartContext);
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      <ul id="products">
        {items[0].map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
