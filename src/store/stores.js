import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducers from '../reducers/indexReducers';

const Store = createStore(RootReducers, applyMiddleware(thunk));

export default Store;