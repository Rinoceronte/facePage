/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let photoSchema = mongoose.Schema({
    description: String,
    captions: String,
    url: String,
    takenLocation: String
});

export default mongoose.model('Photo', photoSchema);