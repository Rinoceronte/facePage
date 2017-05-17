/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let statusSchema = mongoose.Schema({
    createdDate: Date,
    status: String
});

export default mongoose.model('Status', statusSchema);