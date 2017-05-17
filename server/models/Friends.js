/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let friendSchema = mongoose.Schema({
    friends: Array
});

export default mongoose.model('Friends', friendSchema);