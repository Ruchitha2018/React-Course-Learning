import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1', price: 50, title: 'My First Book', description: 'The first book'},
  { id: 'p2', price: 6, title: 'My Second Book', description: 'The second book'},
  { id: 'p3', price: 60, title: 'My Third Book', description: 'The third book'},
  { id: 'p4', price: 600, title: 'My Fourth Book', description: 'The fourth book'}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => <ProductItem
          title={product.title}
          price={product.price}
          description={product.description}
          id={product.id}
        />)}
       
      </ul>
    </section>
  );
};

export default Products;
