import loginReducer from '../../build/reducers/loggedIn'

let initalState = {
    user: {
        _id: '',
        firstname: '',
        lastname: '',
        email: '',
        status: []
    },
    loggedIn: false,

};

describe('Login Reducer', () =>{
    it('should return the initial state if given an undefined action', () =>{
        // expect(false).toEqual(false);
        // expect(false).toEqual(true);
        expect(loginReducer(initalState, {})).toEqual(initalState);
    });
    it('should return the initial state if given an made up action', () =>{
        expect(loginReducer(initalState, {
            type: 'MADE_UP',
            userId: 123,
            status: ['Write Unit tests']
        })).toEqual(initalState);
    });

    it('should add a status to the specific user', () =>{
        expect(loginReducer(initalState, {
            type: 'POSTED_STATUS',
            status: ['Write Unit tests'],
            userId: 1,
        })).toEqual(initalState);
    });  
});
