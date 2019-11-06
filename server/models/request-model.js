const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const requestSchema = new Schema({
    email: { type: String, trim: true, default: '' },
    img: { type: String, trim: true, default: '' },
    loc: { type: String, trim: true, default: '' },
    phone: { type: String, trim: true, default: '' },
    desc: { type: String, trim: true, default: '' },
});

module.exports = mongoose.model('Requests', requestSchema);
