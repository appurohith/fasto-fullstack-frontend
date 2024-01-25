import { createStore, combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import categoryReducer from '../reducers/categoryReducer'
import productReducer from '../reducers/productReducer'


const configureStore = () => {
    const store = createStore(combineReducers({
        category: categoryReducer,
        product: productReducer

    }), applyMiddleware(thunk))
    return store
}

export default configureStore