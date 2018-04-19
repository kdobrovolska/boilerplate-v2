import { createStore, combineReducers ,applyMiddleware, compose} from 'redux';
import thunk  from 'redux-thunk';

import AuthReducer from '../reducers/auth.js';


const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const ConfigureStore = ()=>{
    const store=createStore(combineReducers(
        {
              auth:AuthReducer
        }
    ),
    composeEnhancers(applyMiddleware(thunk))
     //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     //  window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
    return store;
};
