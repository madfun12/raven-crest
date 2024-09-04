import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const response = await prisma.attendees.findMany();
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.error("Error retrieving attendee info: ", error);
        return new NextResponse("Error getting attendee from db", {
            status: 500,
        });
    }
}
