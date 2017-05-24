import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

// EXAMPLE CODE... you can combine multiple reducers to help reduce the changes of State in your app.
import users from './user';
import loggedIn from './loggedIn';

// const rootReducer = combineReducers({loggedIn, user, routing: routerReducer});
const rootReducer = combineReducers({users: users, loggedIn: loggedIn, routing: routerReducer});

export default rootReducer;