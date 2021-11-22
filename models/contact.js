import mongoose from 'mongoose';
const ContactSchema = new mongoose.Schema({
    name:  {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    phone:  {
        type: Number,
        required: true,
    },
    email:  {
        type: String,
        trim: true,
        required: true,
    },
    message:  {
        type: String,
        trim: true,
        required: true,
        maxLength: 1000
    }
},{ timestamps: true});
module.exports = mongoose.model("Contact", ContactSchema);