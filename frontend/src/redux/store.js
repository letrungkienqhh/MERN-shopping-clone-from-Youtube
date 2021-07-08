import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
import cartReducer from './reducers/cartReducer'
import {getProductsReducer,getProductDetailsReducer} from "./reducers/productReducer";
  
const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
  });
  

const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
export default store