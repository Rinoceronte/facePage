import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

// You can combine multiple reducers to help reduce the changes of State in your app.
import users from './user';
import loggedIn from './loggedIn';

const rootReducer = combineReducers({loggedIn, users, routing: routerReducer});

export default rootReducer;