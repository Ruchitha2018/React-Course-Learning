import { useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products.js';
import { CartContext } from './CreateContext.jsx';

function shoppingCartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = [...state.cartItems];
        const productIndex = updatedItems.findIndex((cart) => cart.id === action.payload);
        if (productIndex != -1) {
            const currentProduct = updatedItems[productIndex];
            const updatedItem = {
                ...currentProduct, quantity: currentProduct.quantity + 1
            }
            updatedItems[productIndex] = updatedItem;
            console.log(updatedItem)
         } else {
            const product = DUMMY_PRODUCTS.find(
                (product) => product.id === action.payload
            );
            updatedItems.push({
                id: action.payload,
                name: product.title,
                price: product.price,
                quantity: 1,
            });
        }
        return {
            ...state,
            cartItems: updatedItems
        }
    }
    if(action.type === 'UPDATE_ITEM') {
     const updatedItems = [...state.cartItems];
     const productIndex = updatedItems.findIndex((product) => product.id === action.payload.productId);
     
     const currentProduct = updatedItems[productIndex];
     if(currentProduct.quantity <=0 ) {
        updatedItems.splice(productIndex, 1);
     } else {
        const updateItem = {
            ...currentProduct,
            quantity: currentProduct.quantity + (action.payload.type)
         }
         updatedItems[productIndex] = updateItem
     }
   
     return {
        ...state,
        cartItems: updatedItems
     }

    }
    return state;
}


export default function CartContextProvider({ children }) {

    const [cartState, setCartDispatch] = useReducer(shoppingCartReducer, {
        items: [DUMMY_PRODUCTS],
        cartItems: [],
    });
    function handleAddItemToCart(id) {
        setCartDispatch({
            type: 'ADD_ITEM',
            payload: id
        })
    }
    function handleUpdateItemToCart(productId, type) {
        setCartDispatch({
            type: 'UPDATE_ITEM',
            payload: {
                productId,
                type
            }
        })
    }

    const ctxValue = {
        items: cartState.items,
        cartItems: cartState.cartItems,
        addItemToCart: handleAddItemToCart,
        updateItemToCart: handleUpdateItemToCart
    }
    return (
        <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
    )
}