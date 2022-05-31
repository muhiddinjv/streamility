import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import{ legacy_createStore as createStore}  from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App tab="home" />
    </Provider>
);
