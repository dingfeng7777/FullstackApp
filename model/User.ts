import mongoose from "mongoose";
import { Schema } from "mongoose";

interface IUser extends Document {
    username: string;
    password: string;
    email: string;
    phone: string;
    accnumber: string;
    bsb: string;
    accname: string;
    bankname: string;
    courseslist?: string;
}

const userSchema: Schema<IUser> = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    accnumber: {
        type: String,
        required: true
    },
    bankname: {
        type: String,
        required: true
    },
    courseslist: [
        {
            coursecode: { type: String, required: true },
            coursename: { type: String, required: true },
        },
    ]
});

const User = mongoose.model("User", userSchema) || mongoose.models.User;

export default User;



