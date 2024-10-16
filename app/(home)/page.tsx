"use client";

import { attendees } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [attendees, setAttendees] = useState<attendees[]>([]);
  const getAttendees = async () => {
    try {
      const response = await axios.get("/api/attendees");
      setAttendees(response.data);
    } catch (error) {
      toast.error("Error retrieving attendees");
      console.log(error);
    }
  };
  useEffect(() => {
    getAttendees();
  }, []);
  return (
    <>
      <main className="p-8">
        <h1 className="text-3xl font-black ">Attendees</h1>
        <p>Attending</p>
        <p className="text-neutral-400">No response</p>
        <p className="text-neutral-500 line-through">Not attending</p>
        <ul className="mt-8">
          {attendees.map((attendee, index) => (
            <li key={index}>
              <a
                href={`/attendees/${attendee.id}`}
                className={`${
                  attendee.isAttending === null && "text-neutral-400"
                } ${
                  attendee.isAttending === false &&
                  " text-neutral-500 line-through"
                }`}
              >
                {attendee.name}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
