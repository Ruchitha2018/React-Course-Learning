import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { fetchCartData, sendCartData } from './store/cart-actions';

let initial = true;
function App() {
 const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
 const cart = useSelector((state) => state.cart);
 const dispatch = useDispatch();

 useEffect(() => {
  console.log('cart',cart)  
   dispatch(fetchCartData())
 },[])
 
 useEffect(() => {
  if(initial) {
    initial = false;
    return;
  }
  dispatch(sendCartData(cart));
 },[cart])

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
