/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';
import {StatusSchema, Status} from './Status';
import {friendSchema, Friend} from './Friends';

let userSchema = mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
    statuses: [StatusSchema],
    // friends: [friendSchema]
    // birthday: Date,
    // licenseAgreement: Boolean,
    // gender: String
});

export default mongoose.model('User', userSchema);