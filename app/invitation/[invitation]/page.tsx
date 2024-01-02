/* eslint-disable react/no-unescaped-entities */
import { invitees } from "@/app/lib/invitees";
import { redirect } from "next/navigation";
export default function Home({ params }: { params: any }) {
    const invitation = decodeURIComponent(params.invitation);

    const invitee = invitees.find(
        (person: { url: string }) => person.url === invitation
    );

    if (!invitee) {
        redirect("/");
    }

    return (
        <main className="p-8 max-w-[800px] m-auto">
            <h1 className="text-5xl mb-4 font-bold text-center">
                Hello, {invitee?.name}.
            </h1>
            <p className="text-2xl">
                You have been cordially invited to attend a party on Saturday,
                the 24th of February at:
            </p>
            <p className="text-center text-3xl mt-4">Raven Crest</p>
            <p className="text-center text-3xl">720 E Cleveland Ave.</p>
            <p className="text-center text-3xl mb-4">Guthrie, OK 73044</p>
            <p className="text-2xl">
                Dress code is not enforced, formal attire is encouraged. We will
                be serving dinner and drinks, and entertainment will be provided
                by an anonymous benefactor.
            </p>
            {invitee.murderer && (
                <p className="text-red-800 border-black border p-4 my-4 ridge">
                    You are the only one who can see this section. Let no one
                    else see this invitation. You're going to use this party as
                    an excuse to murder -insert victim here-. Your motive is
                    that they -insert motive here-. The murder will be in the
                    heat of the moment, so the method will not be revealed until
                    the party. There will be evidence that implicates you in the
                    murder. It will be your job to escape judgement. Gaslight,
                    deflect, blame others, play the part of an innocent
                    bystander. You can read more about your character, the
                    victim and the other invitees here:
                </p>
            )}
            {!invitee.murderer && (
                <p className="text-2xl my-4">
                    You can read more about your character and the others
                    invited in the biographies section. See you
                    https://assets.eflorist.com/themes/custom-templates/7/75411691/videos/everyday_portrait.mp4
                </p>
            )}
        </main>
    );
}
