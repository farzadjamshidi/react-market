import axios from "axios";

export const productListAction = () => async (dispatch: Function) =>
{
    try
    {
        dispatch({ type: 'PRODUCT_LIST_REQUEST' });

        const { data } = await axios.get('https://react-market-21753-default-rtdb.europe-west1.firebasedatabase.app/products/-MhG-oUMJAv0goXu-tAI.json');

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

        const { data } = await axios.get('https://react-market-21753-default-rtdb.europe-west1.firebasedatabase.app/products/-MhG-oUMJAv0goXu-tAI/' + id + '.json');

        dispatch({ type: 'PRODUCT_DETAIL_SUCCESS', payload: data });

    } catch (error)
    {
        console.log(error);
    }
};