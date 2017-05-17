/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let userSchema = mongoose.Schema({
    name: String,
    email: String,
    birthday: Date,
    licenseAgreement: Boolean,
    gender: String
});

export default mongoose.model('User', userSchema);