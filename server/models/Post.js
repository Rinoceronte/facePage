/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let postSchema = mongoose.Schema({
    createdTime: Date,
    content: String
});

export default mongoose.model('Post', postSchema);