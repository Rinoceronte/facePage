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

export let postedStatus = (status) => {
    return {
        type: 'POSTED_STATUS',
        status
    };
}

export let deleteStatus = (status) => {
    return {
        type: 'DELETE_STATUS',
        status
    };
}