import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import promise from 'redux-promise';
import {logger } from 'redux-logger';
import thunk from 'redux-thunk';

export default function configureStore(debug) {

    const middlewares = debug ? [thunk, promise, logger ] : [thunk, promise ];
    return createStore(rootReducer, {}, applyMiddleware(...middlewares));
};

