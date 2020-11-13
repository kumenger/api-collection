import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import {createStore,compose,applyMiddleware} from 'redux'
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import reducer from './reducers'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
ReactDOM.render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>

    <App/>
    </PersistGate>

</Provider>
,
document.getElementById("root"))
