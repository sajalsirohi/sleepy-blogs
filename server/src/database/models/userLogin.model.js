const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userLoginSchema = new Schema({
    email: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = UserLogin = mongoose.model("UserLogin", userLoginSchema);