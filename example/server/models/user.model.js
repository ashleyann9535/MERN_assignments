const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    //_id is auto created
    name: String,
    age: Number,
    isActive: Boolean
},
{
    timestamps: true,
});

const User = mongoose.model('User', UserSchema);

module.exports = User; 