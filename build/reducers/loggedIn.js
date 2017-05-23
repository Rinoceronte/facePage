// a reducer is a method, that takes in two things:
// 1. the action
// 2. copy of current state
// and then returns the new state
// it is a pure function

let loggedIn = (state = [], action = {}) => {
     switch(action.type){
        case 'LOGIN':
        return true;
        case 'LOGOUT':
        return false;
        default:
        return state;
    }
};

export default loggedIn;