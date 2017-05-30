/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let FriendSchema = mongoose.Schema({
    friend: String 
});

export let Friends = mongoose.model('Friends', FriendSchema);
export let friendSchema = FriendSchema;