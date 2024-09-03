/* eslint-disable react/no-unescaped-entities */
"use client";
import Typewriter from "@/app/components/Typewriter";
import { invitees } from "@/app/lib/invitees";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
export default function Home({ params }: { params: any }) {
    const invitation = decodeURIComponent(params.invitation);
    const [time, setTime] = useState("");

    const today = new Date();
    const targetDate = new Date("2024-09-14");

    const invitee = invitees.find(
        (person: { id: string }) => person.id === invitation
    );

    const updateTime = () => {};

    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            const tDate = new Date("2024-09-14");
            const difference: any = tDate - now;
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            const formattedHours = String(hours).padStart(2, "0");
            const formattedMinutes = String(minutes).padStart(2, "0");
            const formattedSeconds = String(seconds).padStart(2, "0");

            setTime(
                `${days}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`
            );
            return time;
        }, 1000);
    }, []);

    if (!invitee) {
        redirect("/");
    }

    return (
        <main className="p-8 max-w-[800px] m-auto">
            {today < targetDate && (
                <div className="text-6xl text-center">{time}</div>
            )}
            {today > targetDate && <Typewriter invitee={invitee} />}
        </main>
    );
}
