import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { cartReducer } from "./reducers/cartReducer";
import { productListReducer, productDetailReducer } from "./reducers/productReducer";

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer
});

const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cartItems') || '[]');

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage
    }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, applyMiddleware(...middleware));

export default store;