"use client";
import { attendees } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Attendee({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log(id);
  const [invitee, setInvitee] = useState<attendees>();
  const getInvitee = async () => {
    try {
      console.log(id);
      const response = await axios.get(`/api/attendees/${id}`);
      setInvitee(response.data);
    } catch (error) {
      console.error("Error retrieving invitee");
    }
  };

  useEffect(() => {
    getInvitee();
  }, []);
  if (!invitee) return null;
  return (
    <div>
      <h1 className="text-center m-auto text-3xl font-black mt-8">
        {invitee.name}
      </h1>
      <p className="block m-auto mt-8 p-4 w-fit">{invitee.description}</p>
    </div>
  );
}
