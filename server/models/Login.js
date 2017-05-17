/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let loginSchema = mongoose.Schema({
    userName: String,
    password: String,
});

export default mongoose.model('Login', userSchema);