import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const id = params.id[0];
    console.log(id);
    if (!id) {
        return new NextResponse("Id not provided", { status: 400 });
    }

    try {
        if (id) {
            const response = await prisma.attendees.findUnique({
                where: {
                    id: id,
                },
            });
            return NextResponse.json(response, { status: 200 });
        }
    } catch (error) {
        console.error("Error retrieving attendee info: ", error);
        return new NextResponse("Error getting attendee from db", {
            status: 500,
        });
    }
}
