import { NextRequest, NextResponse } from "next/server";

let users = [{ id: 1, name: "Tom", email: "tom@gmail.com" }, { id: 2, name: "Alice", email: "Alice@gmail.com" }];

interface Props {
    params: {
        id: string
    }
}
export async function GET(req: NextRequest, props: Props) {
    const userID = parseInt(props.params.id)
    if (userID > 10) return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    const user = users.find((user: any) => user.id === userID)
    if (!user) return NextResponse.json({ error: "No such user" }, { status: 400 })
    return NextResponse.json({ user: user }, { status: 200 });
}

export async function PUT(req: NextRequest, props: Props) {
    const userId = parseInt(props.params.id);
    const body = await req.json();
    if (userId > 10 || !body.name || !body.email) {
        return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        return NextResponse.json({ error: "No such user" }, { status: 404 });
    }
    users[userIndex] = { id: userId, ...body };
    return NextResponse.json({ user: users[userIndex] }, { status: 200 });
}

export async function DELETE(req: NextRequest, props: Props) {
    if (parseInt(props.params.id) > 10) {
        return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const user = users.find((user) => user.id == parseInt(props.params.id));
    if (!user)
        return NextResponse.json({ error: "No such user" }, { status: 404 });

    let newUsers = users.filter((user) => user.id !== parseInt(props.params.id));

    return NextResponse.json({ newUsers }, { status: 200 });
}
