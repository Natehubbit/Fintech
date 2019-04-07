import { createStore, applyMiddleware} from 'redux'
import RootReducer from '../reducers'
import thunk from 'redux-thunk'
// import {} from 'react-router';
// import {routerMiddleware} from 'react-router-redux';
import drizzleOptions from '../../ledger/drizzle/options'
import { generateContractsInitialState } from 'drizzle' 
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../../ledger/drizzle/saga'


const initialState = {
    contracts: generateContractsInitialState(drizzleOptions)
}

const store = createStore( RootReducer, {}, applyMiddleware(thunk))

export default store;
