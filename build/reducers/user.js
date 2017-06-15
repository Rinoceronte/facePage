// a reducer takes in two things:
// 1. the action
// 2. copy of current state
// and then returns the new state
// it is a pure function

let users = (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
        console.log('I am the User, trying to LOGIN.', action);
        return {...state, ...action.user};

        case 'POSTED_STATUS':
        return {...state, status: action.status};

        case 'DELETE_STATUS':
        console.log('Deleted a Status', action);
        return {...state, status: action.status};
        
        case 'LOGOUT':
        return {
            _id: null,
            email: null,
            firstName: null,
            lastName: null,
            statuses: []
        };
        default:
        return state;
    }
}

export default users;