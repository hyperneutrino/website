"use client";

import { getEmailAddress } from "@/lib/email-address";
import { Electrolize } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const font = Electrolize({ weight: ["400"], subsets: ["latin"] });

const Template: React.FC<React.PropsWithChildren<{ animate: boolean; setAnimate: React.Dispatch<React.SetStateAction<boolean>> }>> = ({
    animate,
    setAnimate,
    children,
}) => {
    const [email, setEmail] = useState("");
    const breathe = animate ? "breathe 5s infinite alternate" : undefined;

    const links: [string, string, string][] = [
        ["https://ko-fi.com/hyperneutrino", "kofi", "Ko-Fi"],
        ["https://discord.gg/j9uunTRRJm", "discord", "Discord"],
        ["https://bsky.app/profile/hyperneutrino.xyz", "bluesky", "Bluesky"],
        ["https://github.com/hyper-neutrino", "github", "GitHub"],
        ["https://youtube.com/@hyper-neutrino", "youtube", "YouTube"],
        ["https://www.twitch.tv/hyperneutrino", "twitch", "Twitch"],
        ["https://codegolf.stackexchange.com/users/68942/hyper-neutrino", "stack", "Stack Exchange"],
    ];

    return (
        <div className={`${font.className} w-full min-h-screen flex flex-col items-center bg-gray-900 lg:bg-black text-white`}>
            <div className="w-[min(800px,95vw)] min-h-screen flex gap-4 bg-gray-900">
                <div className="ml-1 md:ml-2 lg:ml-4 border-l-4 border-l-pink h-100" style={{ animation: breathe }} />
                <div className="mt-4 mb-20 mr-1 md:mr-2 lg:mr-4 mr-4 flex-grow flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <Image src="/icon.png" width={64} height={64} alt="pink lambda icon" style={{ animation: breathe }} />
                        <span className="text-[min(6vw,2rem)]">HyperNeutrino</span>
                    </div>
                    <hr className="border border-pink" style={{ animation: breathe }} />
                    <button className={`text-sm px-8 py-1 rounded-md border-2 border-pink md:w-max`} onClick={() => setAnimate((x) => !x)}>
                        {animate ? "disable" : "enable"} animations
                    </button>
                    <div className="flex flex-wrap items-center gap-2">
                        {links.map(([href, icon, name]) => (
                            <Link
                                key={href}
                                href={href}
                                target="_blank"
                                className={`p-2 rounded-md border-2 ${
                                    animate ? "opacity-90 md:opacity-75 hover:opacity-100 transition-opacity duration-250" : ""
                                }`}
                                title={name}
                            >
                                <Image src={`/${icon}.svg`} width={24} height={24} alt={`${name} icon`} />
                            </Link>
                        ))}
                    </div>
                    <div className="h-8" />
                    <p className="text-xl sm:text-2xl">
                        hey, i&prime;m <b>iris</b> a.k.a. hyperneutrino
                    </p>
                    <p>web dev &middot; discord bot dev &middot; youtuber</p>
                    <p className="text-gray-200">22 y/o &middot; she/her 🏳️‍⚧️ &middot; BCS 2025</p>
                    {email ? (
                        <p>
                            <Link href={`mailto:${email}`} className="text-teal">
                                {email}
                            </Link>
                        </p>
                    ) : (
                        <p className="text-gray-500 cursor-pointer" onClick={() => setEmail(getEmailAddress())}>
                            [ click for my business email ]
                        </p>
                    )}
                    <div className="h-8" />
                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="/" className="text-teal">
                            home
                        </Link>
                        &middot;
                        <Link href="/blog" className="text-teal">
                            blog
                        </Link>
                    </div>
                    <div className="h-8" />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Template;
