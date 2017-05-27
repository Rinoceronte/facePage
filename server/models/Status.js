/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let statusSchema = mongoose.Schema({
    statusUser: String,
    createdDate: Date,
    status: String
});

export default mongoose.model('Status', statusSchema);