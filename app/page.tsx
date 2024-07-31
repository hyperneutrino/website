"use client";

import { Architects_Daughter } from "next/font/google";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Card from "./components/Card";
import Cards from "./components/Cards";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import useScroll from "./hooks/scroll";

const font = Architects_Daughter({ weight: "400", subsets: ["latin"] });

const skills: Record<string, number> = {
    JavaScript: 11,
    "HTML + CSS": 10,
    Java: 9,
    Python: 9,
    Git: 7,
    SQL: 7,
    Flask: 4,
    TypeScript: 3,
    "Mongo DB": 3,
    Kotlin: 2,
};

const Home: React.FC = () => {
    const scroll = useScroll();
    const [showEmail, setShowEmail] = useState<boolean>(false);
    const params = useSearchParams();

    return (
        <>
            <Navbar />
            <div
                className="h-full"
                style={{
                    backgroundImage: "url(parallax.png)",
                    backgroundAttachment: "fixed",
                    backgroundPositionX: "center",
                    backgroundPositionY: -scroll * 0.25,
                    backgroundSize: "auto cover",
                }}
            >
                <div className="h-full bg-white/40 flex flex-row items-center justify-center">
                    <div className="w-11/12 md:w-5/6 xl:w-3/4 2xl:w-7/12 flex flex-col gap-5 bg-white/50 p-8 rounded-2xl">
                        <p className={`${font.className} text-5xl lg:text-7xl bg-gradient-to-r from-teal/40 to-pink/40 p-2 rounded-2xl`}>
                            Hey! I&prime;m <b className="text-pink">Hyper&#8203;Neutrino</b>.
                        </p>
                        <p className="text-3xl lg:text-5xl">
                            web dev &middot; discord bot dev &middot;{" "}
                            <a href="https://youtube.com/@hyper-neutrino" target="_blank" className="text-pink">
                                youtuber
                            </a>
                        </p>
                        <p className="text-black/60 text-2xl lg:text-3xl">
                            22 y/o &middot; BCS 2025 &middot; backend intern @{" "}
                            <a href="https://faire.com" target="_blank" className="text-pink">
                                faire.com
                            </a>
                        </p>
                    </div>
                    <button className="absolute bottom-10 w-12 h-6 mb-2 cursor-default" onClick={() => window.scrollTo({ top: window.innerHeight - 80 })}>
                        <svg
                            className="text-black stroke-current fill-transparent"
                            viewBox="0 0 20 10"
                            style={{ animation: "oscillate 0.75s infinite alternate" }}
                        >
                            <path d="M 0 0 L 10 10 L 20 0" />
                        </svg>
                    </button>
                </div>
            </div>
            <Content noTopMargin>
                <Cards>
                    <Card title="/about">
                        <p className="text-xl">
                            Hey! I&prime;m <b className="text-teal">HyperNeutrino</b>, a 22-year old fourth-year computer science student. My hobbies include
                            music, coding, and video games. I am a Backend Engineer Intern at{" "}
                            <a href="https://faire.com" target="_blank" className="text-pink">
                                Faire
                            </a>{" "}
                            (May &ndash; December 2024).
                        </p>
                        <p className="text-xl">
                            I started coding as early as about Grade 5, starting out with Scratch and Python, but my passion for coding really started in Grade
                            6 with THREE.js. Since then, coding has been my main hobby and my career path and I hope to inspire a passion for coding and problem
                            solving in others.
                        </p>
                        <p className="text-xl">
                            I work with a wide variety of technologies for my side projects, including React, Svelte, discord.js, Elysia, and more.
                        </p>
                        <p className="text-xl">
                            In my spare time, I also enjoy creating educational videos on my{" "}
                            <a href="https://youtube.com/@hyper-neutrino" target="_blank" className="text-pink">
                                YouTube channel
                            </a>
                            .
                        </p>
                        <p className="text-xl">
                            I have my own{" "}
                            <a href="https://discord.gg/j9uunTRRJm" target="_blank" className="text-pink">
                                Discord server
                            </a>{" "}
                            and have experience in community management through my ownership of a Genshin Impact-focused gaming server and experience as an
                            admin of the{" "}
                            <a href="https://teyvatcollective.network" target="_blank" className="text-pink">
                                Teyvat Collective Network
                            </a>
                            , a network of gaming servers on Discord.
                        </p>
                        <p className="text-xl">
                            I&prime;m known for my performance on the{" "}
                            <a href="https://adventofcode.com" target="_blank" className="text-pink">
                                Advent of Code
                            </a>
                            , an annual speed-coding challenge, scoring 11<sup>th</sup> in 2020, 5<sup>th</sup> in 2021, 10<sup>th</sup> in 2022, and 11
                            <sup>th</sup> in 2023.
                        </p>
                    </Card>
                    <Card title="/skills">
                        <b className="text-2xl">Technical</b>
                        <div className="flex flex-col gap-2">
                            {Object.entries(skills).map(([item, years]) => (
                                <div key={item} className="grid items-center gap-2" style={{ gridTemplateColumns: "auto 1fr auto" }}>
                                    <span>{item}</span>
                                    <hr className="border-teal/60" />
                                    <span>
                                        {years} year{years === 1 ? "" : "s"}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <ul className="list-disc list-inside">
                            <li>Teaching (varying ages, mathematics, coding)</li>
                            <li>Community Management (Discord)</li>
                        </ul>
                    </Card>
                    <Card title="/my-work">
                        <p className="text-xl">
                            Here are some of the projects of which I am the most proud. Find a full list of my projects{" "}
                            <a href="/projects" className="text-pink">
                                here
                            </a>
                            .
                        </p>
                        <b className="text-2xl flex flex-row flex-wrap items-center gap-2">
                            <Image src="/daedalus.png" alt="Daedalus Icon" className="rounded-full" width={40} height={40} />
                            <span>Daedalus</span>
                            <span className="text-black/25">/</span>
                            <a href="https://daedalus.hyper-neutrino.xyz" target="_blank" className="text-pink">
                                website
                            </a>
                        </b>
                        <p className="text-xl">
                            Daedalus is a highly customizable, modern, and transparent general-purpose Discord bot featuring a wide array of functionalities. If
                            you run a Discord server with a need for moderation, automation, or community features, check out Daedalus!
                        </p>
                        <p className="text-xl">
                            New features are added all the time, and if there&prime;s something you need that it doesn&prime;t have, feature requests are always
                            appreciated.
                        </p>
                        <b className="text-2xl flex flex-row flex-wrap items-center gap-2">
                            <Image src="/tcn.png" alt="TCN Icon" width={40} height={40} />
                            <span>Teyvat&nbsp;Collective&nbsp;Network</span>
                            <span className="text-black/25">/</span>
                            <a href="https://teyvatcollective.network" target="_blank" className="text-pink">
                                website
                            </a>
                            <span className="text-black/25">/</span>
                            <a href="https://github.com/Teyvat-Collective-Network" target="_blank" className="text-pink">
                                github
                            </a>
                        </b>
                        <p className="text-xl">
                            The <b>Teyvat Collective Network</b> (TCN) is a network of Genshin Impact Discord servers. Although it was not founded by me, I
                            organize most of the internal operations, community management, and public relations.
                        </p>
                        <p className="text-xl">
                            I also own the technical side of the network, including a website, a custom Discord bot with many internal tools, a chat bot that
                            links channels between servers so members can talk to each other from anywhere, and a public-facing RESTful API.
                        </p>
                        <b className="text-2xl flex flex-row flex-wrap items-center gap-2">
                            <Image src="/proton.png" alt="Proton Icon" width={40} height={40} />
                            <span>Proton</span>
                            <span className="text-black/25">/</span>
                            <a href="https://tio.run#proton" target="_blank" className="text-pink">
                                try&nbsp;it&nbsp;online
                            </a>
                            <span className="text-black/25">/</span>
                            <a href="https://github.com/hyper-neutrino/proton" target="_blank" className="text-pink">
                                github
                            </a>
                        </b>
                        <p className="text-xl">
                            <b>Proton</b> is a general-purpose multi-paradigm programming language. It is inspired by Python&prime;s features and simplicity but
                            with C-like syntax and integrates functional language utilities.
                        </p>
                        <p className="text-xl">
                            While Proton is not a production-ready language and is not efficient nor stable, I created this in high school well before I learned
                            parser and compiler design and programming language theory in university, and so I am still proud of being able to put together an
                            entire (mostly) functional language without formal education on the subject.
                        </p>
                    </Card>
                    <Card title="/others">
                        <b className="text-2xl">YouTube</b>
                        <p className="text-xl">
                            Interested in educational videos, coding challenge walk-throughs and full solutions, deep-dives on theoretical concepts and
                            practical subjects, and coding tutorials? Check out my{" "}
                            <a href="https://youtube.com/@hyper-neutrino" target="_blank" className="text-pink">
                                YouTube channel
                            </a>
                            !
                        </p>
                        <b className="text-2xl">Discord</b>
                        <p className="text-xl">
                            I have a{" "}
                            <a href="https://discord.gg/j9uunTRRJm" target="_blank" className="text-pink">
                                Discord server
                            </a>
                            , where you can talk to me, receive notifications for new uploads, request topics for videos, and more.
                        </p>
                        <p className="text-xl">
                            Looking for support with{" "}
                            <a href="https://daedalus.hyper-neutrino.xyz" target="_blank" className="text-pink">
                                Daedalus
                            </a>
                            ? Check out the Daedalus support server{" "}
                            <a href="https://discord.gg/7TRKfSK7EU" target="_blank" className="text-pink">
                                here
                            </a>
                            .
                        </p>
                        <b className="text-2xl">Twitch</b>
                        <p className="text-xl">
                            I don&prime;t stream much right now, but if you&prime;re interested in potential future educational streams and/or gameplay streams,
                            feel free to give me a follow on my{" "}
                            <a href="https://twitch.tv/hyperneutrino" target="_blank" className="text-pink">
                                Twitch channel
                            </a>
                            !
                        </p>
                        <b className="text-2xl">Stack Exchange</b>
                        <p className="text-xl">
                            I&prime;m active on Stack Exchange, specifically the Code Golf and Coding Challenges site. Check out my profile{" "}
                            <a href="https://codegolf.stackexchange.com/users/68942/hyper-neutrino" target="_blank" className="text-teal">
                                here
                            </a>
                            !
                        </p>
                        <div
                            className={`flex flex-col gap-6 p-4 rounded-xl ${params.has("hl-contact") ? "bg-white/10 border-pink/60 border-2" : ""}`}
                            style={{ margin: "-1rem" }}
                        >
                            <b id="contact" className="text-2xl">
                                Contact Me
                            </b>
                            <p className="text-xl">
                                My preferred contact method is through Discord. Join my{" "}
                                <a href="https://discord.gg/j9uunTRRJm" target="_blank" className="text-pink">
                                    Discord server
                                </a>{" "}
                                and DM me. Do not send me friend requests as I will most likely reject them.
                            </p>
                            <p className="text-xl">
                                You may also email me at{" "}
                                {showEmail ? (
                                    <span className="text-teal">hyperneutrino15@gmail.com</span>
                                ) : (
                                    <button className="text-gray-400" onClick={() => setShowEmail(true)}>
                                        [show email]
                                    </button>
                                )}
                                .
                            </p>
                        </div>
                    </Card>
                </Cards>
            </Content>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 bg-white/90 w-screen">
                &copy; hyper-neutrino 2024 &mdash; image credits:{" "}
                <a href="https://flaticon.com/free-icon/proton_341533" target="_blank" className="text-pink">
                    proton icon from flaticon
                </a>
            </div>
        </>
    );
};

export default Home;
