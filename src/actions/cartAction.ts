import axios from "axios";

export const addToCartAction = (id: string) => async (dispatch: Function, getState: Function) =>
{
    try
    {
        const { data } = await axios.get('https://react-market-21753-default-rtdb.europe-west1.firebasedatabase.app/products/-MhG-oUMJAv0goXu-tAI/' + id + '.json');

        dispatch({ type: 'CART_ADD_ITEM', payload: data });

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

    } catch (error)
    {
        console.log(error);
    }
};

export const deleteFromCartAction = (id: string) => async (dispatch: Function, getState: Function) =>
{
    try
    {
        dispatch({ type: 'CART_DELETE_ITEM', payload: { _id: id } });

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

    } catch (error)
    {
        console.log(error);
    }
};