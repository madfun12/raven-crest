"use client";
import Typewriter from "@/app/components/Typewriter";
import prisma from "@/app/lib/db";
import { attendees } from "@prisma/client";
import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function Home({ params }: { params: { id: string } }) {
    const id = decodeURIComponent(params.id);
    const [invitee, setInvitee] = useState<any>();

    const getInvitee = async () => {
        try {
            const response = await axios.get(`/api/attendees/${id}`);
            setInvitee(response.data);
        } catch (error) {
            console.error("Error retrieving invitee");
        }
    };

    useEffect(() => {
        getInvitee();
    }, []);

    if (!invitee) {
        return null;
    }

    return (
        <main className="p-8 max-w-[800px] m-auto">
            {invitee && <Typewriter invitee={invitee} />}
        </main>
    );
}
