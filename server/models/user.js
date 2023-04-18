const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
       lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            require: true,
            min: 5,
            max: 50,
        },
        picturePath: {
            type: String,
            default: '',
        },
        friends:{
            type: Array,
            default: []
        },
    },
    {timestamps: true} //gives current date and time when the user has been created
    );

    const User = mongoose.model('user', UserSchema);

    module.exports = { User };