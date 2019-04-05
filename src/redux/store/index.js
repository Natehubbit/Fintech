import { createStore, applyMiddleware, compose} from 'redux'
import RootReducer from '../reducers'
import thunk from 'redux-thunk'
import drizzleOptions from '../../ledger/drizzle/options'
import { generateContractsInitialState } from 'drizzle' 
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../../ledger/drizzle/saga'

const initialState = {
    contracts: generateContractsInitialState(drizzleOptions)
}

const store = createStore( RootReducer, {}, applyMiddleware(thunk))

export default store;
