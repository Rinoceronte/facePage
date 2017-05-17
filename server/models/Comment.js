/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let commentSchema = mongoose.Schema({
    comment: String,
    createdTime: Date
});

export default mongoose.model('Comment', commentSchema);