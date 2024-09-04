import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { id } = body;
    try {
        console.log(id);
        await prisma.attendees.update({
            where: {
                id,
            },
            data: {
                isAttending: false,
            },
        });
        return new NextResponse("Successfully RSVPd", { status: 200 });
    } catch (error) {
        return new NextResponse("Error sending RSVP", { status: 500 });
    }
}
