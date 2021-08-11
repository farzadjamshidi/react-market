import axios from "axios";

export const productListAction = () => async (dispatch: Function) =>
{
    try
    {
        dispatch({ type: 'PRODUCT_LIST_REQUEST' });

        const { data } = await axios.get('http://localhost:8000/api/products');

        dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: data });

    } catch (error)
    {
        console.log(error);
    }
};

export const productDetailAction = (id: string) => async (dispatch: Function) =>
{
    try
    {
        dispatch({ type: 'PRODUCT_DETAIL_REQUEST' });

        const { data } = await axios.get('http://localhost:8000/api/products/' + id);

        dispatch({ type: 'PRODUCT_DETAIL_SUCCESS', payload: data });

    } catch (error)
    {
        console.log(error);
    }
};