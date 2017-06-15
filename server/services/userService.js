/**
 * Services
 * Services are used to abstract out the logic needed to enact on data, before sending it off to the database. 
 */
import User from '../models/User';

export let createUser = (user, next) => {
    User.create(user, next);
};

export let getUsers = (next) => {
    User.find({}, next);
};

export let pushStatus = (userId, status, next) => {
    User.update({ _id: userId }, { $push: { statuses: status } }, () => {
        User.findOne({ _id: userId }, (err, data) => {
            next(err, data);
        });
    });
}

export let deleteStatus = (userId, statusId, next) => {
    User.findOne({ _id: userId }, (error, user) => {
        //console.log
        if (user && user.statuses) {
            let cloneArray = user.statuses.slice();
            
            user.statuses.forEach(function (s, index) {
                if (s._id.toString() === statusId) {
                    cloneArray.splice(index, 1);
                    console.log(cloneArray.length + ': ' + user.statuses.length);
                }
            });
            user.statuses = cloneArray;
            //console.log(`saving user ${user}`);
            user.save((err, data) => {
                next(err, data);
            });


            // User.update({ _id: userId }, (err, data) => {
            //     next(err, data);

            // });
        }

    });
}


export let userLogin = (user, next) => {
    User.findOne({ email: user.email, password: user.password }, next);
};

export let push = (userId, task, next) => {
    let newTask = new Task(task);
    User.update({ _id: userId }, { push: { friendsList: newTask } }, next)
};

export let updateFriendsList = (userId, friendsList, next) => {
    console.log(friendsList);
    User.update({ _id: userId }, { friendsList: friendsList }, next);
};

export let getAllUserFriends = (userId, next) => {
    User.findOne({ _id: userId }, (err, user) => {
        Users.find({ _id: { $in: user.friendsListIds } }, (err, users) => {
            next(err, users);
        });
    });

    let promises = [];

    promises.push(User.findOne({ _id: userId }));
    Promise.all(promises).then((data) => {
        next();
    });
};

