"use client";

import { attendees } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { VscLoading } from "react-icons/vsc";

interface TyperwriterProps {
    invitee: attendees;
}

const Typewriter: React.FC<TyperwriterProps> = ({ invitee }) => {
    const [showText, setShowText] = useState(false);
    const [loading, setLoading] = useState(false);
    const [responded, setResponded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowText(true);
        }, 1000);
        if (invitee.isAttending !== null) {
            setResponded(true);
        }
    }, []);

    if (!invitee) {
        return null;
    }

    const sendPost = async (url: string) => {
        try {
            setLoading(true);
            await axios.post(url, {
                id: invitee.id,
            });
            setLoading(false);
            setResponded(true);
            if (url.indexOf("accept") > -1) {
                toast("Looking forward to seeing you at the party");
            } else {
                toast("That's too bad, you'll be missed");
            }
        } catch (error) {
            setLoading(false);
            setResponded(false);
            console.error(error);
            toast.error("Error sending response, please try again");
        }
    };

    return (
        <div className="typewriter">
            {showText && (
                <>
                    <h1 className="m-auto text-3xl mb-4 font-bold animate-appear w-fit">
                        {invitee.name}
                    </h1>

                    <div className="animate-appear">
                        <p className="text-md mb-4">
                            You and several other guests have been invited to
                            attend a party. I have employed the Funderburk
                            residence to host the event:
                        </p>
                        <p className="text-center text-xl">
                            Saturday October 26th, 2024 at 7pm
                        </p>
                        <p className="text-center text-xl">
                            720 E Cleveland Ave.
                        </p>
                        <p className="text-center text-xl mb-4">
                            Guthrie, OK 73044
                        </p>

                        <p className="text-md mb-4">
                            Feel free to dress as &quot;yourself&quot;, or
                            seeing as the event will be so close to Halloween,
                            feel free to come in costume.
                        </p>
                        <p className="text-md mb-4">
                            My identity will remain a secret, but I assure you
                            that I am well aware of who you are and everything
                            that you have been up to. The other guests will
                            surely be glad to see you in attendance. Everything
                            shrouded in the dark will be brought to light for
                            all to see.
                        </p>

                        {!loading && !responded && (
                            <div>
                                <p>
                                    Please let me know if I can count on your
                                    attendance:
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            sendPost(`/api/rsvp/accept`);
                                        }}
                                        className="border rounded py-2 flex items-center justify-center"
                                    >
                                        <IoMdCheckmark size={32} />
                                    </button>
                                    <button
                                        onClick={() =>
                                            sendPost(`/api/rsvp/decline`)
                                        }
                                        className="border rounded py-2 flex items-center justify-center"
                                    >
                                        <IoMdClose size={32} />
                                    </button>
                                </div>
                            </div>
                        )}
                        {loading && !responded && (
                            <VscLoading
                                size={36}
                                className="m-auto animate-spin mt-8"
                            />
                        )}
                        {!loading && responded && (
                            <>
                                <img src="/skull.gif" className="m-auto" />
                                <a href="/" className="mt-4 underline">
                                    View your and the other attendees&apos; bios
                                </a>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Typewriter;
