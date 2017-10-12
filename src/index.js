import React from 'react';
import ReactDOM from 'react-dom';
import './styles/hoskings.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store.js';
import { Provider } from 'react-redux'
import {initialiseApp} from './actions/app'
import * as portfolioData from './data/portfolio'
import * as labsData from './data/labs'

let store = configureStore(true);

store.dispatch(initialiseApp({
    portfolio:{
        projects: portfolioData.projects
    },
    labs:{
        projects: labsData.projects
    }
}));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
