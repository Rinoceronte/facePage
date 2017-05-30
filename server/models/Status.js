/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let statusSchema = mongoose.Schema({
    createdDate: {type: Date, default: Date.now},
    status: {type: String, required: true}
});

export let Status =  mongoose.model('Status', statusSchema);
export let StatusSchema = statusSchema;