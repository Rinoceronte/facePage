import {Status} from '../models/Status';

export let createStatus = (status, next) => {
    Status.create(status, next);
};