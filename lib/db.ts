import mongoose from "mongoose";
declare global {
    var mongoose: any;
}

const MONGODB_URI =
    "mongodb+srv://dingfeng7777:19951106Df@#$@userinfo.5yd0u.mongodb.net/?retryWrites=true&w=majority&appName=UserInfo"

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    console.log("Connected");
    return cached.conn;
}

export default dbConnect;