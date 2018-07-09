import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import { create } from "jss";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

import { form } from './components/reducers/form';

const reducers = combineReducers({ form });
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const styleNode = document.createComment("insertion-point-jss");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = "insertion-point-jss";


ReactDOM.render(
    <Provider store={store}>
        <JssProvider jss={jss} generateClassName={generateClassName}>
            <App />
        </JssProvider>
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
