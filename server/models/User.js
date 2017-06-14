/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';
import { StatusSchema, Status } from './Status';
import { friendSchema, Friend } from './Friends';

let userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true },
    password: String,
    age: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    school: String,
    job: String,
    statuses: [StatusSchema],
    // statuses: [{ type: Schema.Types.ObjectId, ref: 'Status' }],
    // friends: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    profilePicture: String
});

export default mongoose.model('User', userSchema);