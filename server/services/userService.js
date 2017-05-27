/**
 * Services
 * Services are used to abstract out the logic needed to enact on data, before sending it off to the database. 
 */
import User from '../models/User';

export let createUser = (user, next) => {
    User.create(user, next);
};

export let userLogin = (user, next) => {
    User.findOne({email: user.email, password: user.password}, next);
};