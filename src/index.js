import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import store from './redux/store'
import {Provider} from 'react-redux'
import {DrizzleProvider} from 'drizzle-react'
import drizzle from './ledger/drizzle/options'
import {LoadingContainer} from 'drizzle-react-components'


ReactDOM.render(
        // <DrizzleProvider options = {drizzleOptions}>
            <Provider store = {store}  >
                {/* <LoadingContainer> */}
                    <App drizzle = {drizzle} />
                {/* </LoadingContainer> */}
            </Provider>
        //  </DrizzleProvider>
    , 
    document.getElementById('root')
);

