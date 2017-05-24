/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let userSchema = mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
    // birthday: Date,
    // licenseAgreement: Boolean,
    // gender: String
});

export default mongoose.model('User', userSchema);