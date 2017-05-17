/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let profileSchema = mongoose.Schema({
    twitterLink: String,
    linkedIn: String,
    instagram: String,
    displayName: String,
    displayGender: Boolean,
    displayBirthday: Boolean,
    about: String,
    relationshipWith: String
});

export default mongoose.model('Profile', profileSchema);