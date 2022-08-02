//TODO: change index.js to reducers.js
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
// import streamSlice from './streamSlice';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});