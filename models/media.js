const mongoose = require('mongoose');

const MediaSchema = mongoose.Schema({
    filePath: {
        type: String,
        required: true,
        trim: true
    }
});

const Media = module.exports = mongoose.model('uploads', MediaSchema)