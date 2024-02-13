import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    console.log('Fetch Cart Data')
    return async (dispatch) => {
        const fetchData = async () => {
            const res = await fetch('https://redux-project-a5e9d-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json')
            const data = await res.json();
            return data;
        }

       const cartData = await fetchData();
    //    dispatch(cartActions.replaceCart({
    //      items: cartData.items || [],
    //      totalQuantity: cartData.totalQuantity
    //    }))
    }

}

export const sendCartData = (cartData) => {
    console.log('cartdata', cartData);
    return async (dispatch) => {
        const fetchData = async () => {
            const res = await fetch('https://redux-project-a5e9d-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cartData)
            })
            const data = await res.json();
            return data;
        }
        const data = await fetchData()
    }
}