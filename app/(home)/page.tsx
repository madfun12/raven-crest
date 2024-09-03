"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [time, setTime] = useState("");

    const today = new Date();
    const targetDate = new Date("2024-09-14");
    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            const tDate = new Date("2024-09-14");
            const difference = tDate.getTime() - now.getTime();
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
    return (
        <>
            {today < targetDate && (
                <main className="flex items-center justify-center p-8">
                    <div className="text-5xl text-center w-fit m-auto">
                        {time}
                    </div>
                </main>
            )}
            {today > targetDate && (
                <main className="flex items-center justify-center p-8">
                    <h1 className="text-3xl">Attendees</h1>
                </main>
            )}
        </>
    );
}
