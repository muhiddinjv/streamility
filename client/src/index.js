import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import{ legacy_createStore as createStore, applyMiddleware, compose }  from 'redux';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware())
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App tab="home" />
    </Provider>
);
