import axios from "axios";

export const addToCartAction = (id: string) => async (dispatch: Function, getState: Function) =>
{
    try
    {
        const { data } = await axios.get('http://localhost:8000/api/products/' + id);

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