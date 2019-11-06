const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: { type: String, trim: true, default: '' },
    lname: { type: String, trim: true, default: '' },
    phone: { type: String, trim: true, default: '' },
    requests: [{
        type: Schema.Types.ObjectId,
        ref: 'Requests'
    }],
    email: { type: String, trim: true, default: '' },
    password: { type: String, trim: true, default: ' ' }
});

const blog = mongoose.model('maindb', userSchema);

module.exports = blog;
