import dbConnect from "@/lib/db";
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: { id: string };
}

export async function GET(req: NextRequest, props: Props) {
    await dbConnect();

    try {
        const user = await User.findById(props.params.id);
        if (!user) {
            return NextResponse.json(
                { user: user, message: "No such user" },
                { status: 404 }
            );
        }
        return NextResponse.json(
            { user: user, message: "user here" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Error to fetch userInfo", error },
            { status: 500 }
        );
    }
}