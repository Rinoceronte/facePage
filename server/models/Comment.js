/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let commentSchema = mongoose.Schema({
        userCommented: String,
        date: Date,
        comment: String
});

export default mongoose.model('Comment', commentSchema);