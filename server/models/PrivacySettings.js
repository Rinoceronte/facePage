/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let privacySchema = mongoose.Schema({
    whoCanSeeMe: String,
    whoCanContactMe: String,
    howCanIBeFound: String
});

export default mongoose.model('Privacy', privacySchema);