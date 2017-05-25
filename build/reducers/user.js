// a reducer takes in two things:
// 1. the action
// 2. copy of current state
// and then returns the new state
// it is a pure function

let users = (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
        console.log('I am the User, trying to LOGIN.', action);
        return {...action.user};
        case 'LOGOUT':
        return {
            _id: null,
            email: null,
            name: null
        };
        default:
        return state;
    }
}

export default users;

    // switch(action.type){
    //     case 'SELECT_USER':
    //         console.log('Selecting user ');
    //         let newUserState = state.map(user => {
    //             if(user.id === action.userId){
    //                 return {...user, selected: true};
    //             }
    //             else {
    //                 return {...user, selected: false};
    //             }
    //         });
    //         return newUserState;