/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let friendSchema = mongoose.Schema({
    friends: Array
});

export let Friends = mongoose.model('Friends', friendSchema);
export let friendSchema = friendSchema;