import React from 'react'
import { Provider} from 'react-redux'
import {store} from './redux/store'
import {persistStore} from 'redux-persist'
import { PersistGate } from "redux-persist/integration/react";
import App from './App'

let persistor=persistStore(store)

export default function ReduxContainer(){
    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    )
}