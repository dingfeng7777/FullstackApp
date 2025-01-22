import dbConnect from "@/lib/db";
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await dbConnect();
    const { username, password, email, phone, accname, accnumber, bsb, bankname } = await req.json();
    try {
        const newUser = new User({
            username: username,
            password: password,
            email: email,
            phone: phone,
            accname: accname,
            accnumber: accnumber,
            bsb: bsb,
            bankname: bankname
        })

        await newUser.save()
        return NextResponse.json({ message: 'User created successfully!', userId: newUser._id }, { status: 201 })
    }
    catch (error) {
        return NextResponse.json({ error: 'Error in creating new user!' }, { status: 500 })
    }
}