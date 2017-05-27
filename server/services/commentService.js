import Comment from '../models/Comment';

export let createComment = (comment, next) => {
    Comment.create(comment, next);
};
