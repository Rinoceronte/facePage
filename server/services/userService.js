/**
 * Services
 * Services are used to abstract out the logic needed to enact on data, before sending it off to the database. 
 */
import User from '../models/User';

export let createUser = (user, next) => {
    User.create(user, next);
};

export let pushStatus = (userId, status, next) => {
    User.update({_id: userId}, {$push: {statuses: status}}, next);
}
export let userLogin = (user, next) => {
    User.findOne({email: user.email, password: user.password}, next);
};

export let push = (userId, task, next) => {
    let newTask = new Task(task);
    User.update({_id: userId}, {push: {friendsList: newTask}}, next)
};

export let updateFriendsList = (userId, friendsList, next) => {
    console.log(friendsList);
    User.update({_id: userId}, {friendsList: friendsList}, next);
};

export let getAllUserFriends = (userId, next) => {
    User.findOne({_id: userId}, (err, user) => {
        Users.find({_id: {$in: user.friendsListIds}}, (err, users) => {
            next(err, users);
        });
    });

    let promises = [];

    promises.push(User.findOne({_id: userId}));
    Promise.all(promises).then((data) => {
        next();
    });
};

