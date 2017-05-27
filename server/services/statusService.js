import Status from '../models/Status';

export let createStatus = (comment, next) => {
    Status.create(comment, next);
};