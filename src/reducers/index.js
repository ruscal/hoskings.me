import {combineReducers} from 'redux';
import app from './app';
import entities from './entities/index'

const combinedReducer = combineReducers({
    app,
    entities
});


export default combinedReducer;