/**
 * actionCreator is the file that gives Redux a blueprint of what each event looks like.
 */

export let login = (user, loggedIn) => {
    console.log('dispatch LOGIN');
    return {
        type: 'LOGIN',
        user,
        loggedIn
    };
}

export let logout = () => {
    console.log('dispatch LOGOUT');
    return {
        type: 'LOGOUT',
    };
}

export let changeStatus = (user) => {
    return {
        type: 'STATUS',
        user
    }
}