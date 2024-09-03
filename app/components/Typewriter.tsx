"use client";

import { useEffect, useState } from "react";

interface TyperwriterProps {
    invitee: {
        name: string;
        murderer: boolean;
    };
}

const Typewriter: React.FC<TyperwriterProps> = ({ invitee }) => {
    const [text, setText] = useState("");
    const [showText, setShowText] = useState(false);

    const endText = `Heello, ${invitee.name}.`;

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setText((prevText) => prevText + endText[index]);
            index++;

            if (index === endText.length - 1) {
                clearInterval(interval);
                setTimeout(() => {
                    setShowText(true);
                }, 1000);
            }
        }, 100); // Adjust the speed by changing the interval time

        return () => clearInterval(interval);
    }, [endText]);

    return (
        <div className="typewriter">
            <h1 className="m-auto text-3xl mb-4 font-bold border-r-4 animate-typing w-fit">
                {text}
            </h1>
            {showText && (
                <div className="animate-appear">
                    <p className="text-md mb-4">
                        You and several other guests have been invited to attend
                        a party. I have employed the Funderburk residence to
                        host the event:
                    </p>
                    <p className="text-center text-xl">
                        {" "}
                        Saturday October 26th, 2024 at 7pm
                    </p>
                    <p className="text-center text-xl">720 E Cleveland Ave.</p>
                    <p className="text-center text-xl mb-4">
                        Guthrie, OK 73044
                    </p>

                    <p className="text-md mb-4">
                        Feel free to dress as yourself, or seeing as the event
                        will be so close to Halloween, feel free to come in
                        costume.
                    </p>
                    <p className="text-md mb-4">
                        My identity will remain a secret, but I assure you that
                        I am well aware of who you are and everything that you
                        have been up to. The other guests will surely be glad to
                        see you in attendance. Everything shrouded in the dark
                        will be brought to light for all to see.
                    </p>

                    <img src="/skull.gif" className="m-auto" />
                </div>
            )}
        </div>
    );
};

export default Typewriter;
