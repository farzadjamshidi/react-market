export const cartReducer = (state = { cartItems: [] }, action) =>
{

    switch (action.type)
    {

        case 'CART_ADD_ITEM':

            const existingItem = state.cartItems.find(item => item._id === action.payload._id);

            if (existingItem)
            {
                return state;
            }
            else
            {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                };
            }
        case 'CART_DELETE_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item._id !== action.payload._id)
            };
        default:
            return state;
    }

};