"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Template from "./components/template";

const Home: React.FC = () => {
    const [animate, setAnimate] = useState(true);

    const card = `p-2 rounded-md border-2 border-pink bg-gray-800 ${
        animate ? "opacity-80 md:opacity-80 hover:opacity-100 md:scale-[99%] hover:scale-100 transition duration-500" : ""
    } flex flex-col gap-4`;

    return (
        <Template animate={animate} setAnimate={setAnimate}>
            <div className="flex flex-col items-center gap-4">
                <div className={card}>
                    <p>
                        hey! i&prime;m <b>hyperneutrino</b>, a 22-year-old transfem computer science student. my hobbies include music, coding, and video games
                    </p>
                    <p>
                        i started coding as early as about grade 5 starting with scratch and python, but my passion for coding really started in grade 6 with{" "}
                        <Link href="https://threejs.org/">three.js</Link> making random graphics projects including a rubik&prime;s cube simulator
                    </p>
                    <p>
                        i've worked with a wide variety of technologies with languages ranging from c++ and java to python and typescript, frameworks like react
                        and svelte, libraries like discord.js and elysia, and more
                    </p>
                    <p>
                        i'm known for my performance in the{" "}
                        <Link href="https://adventofcode.com" target="_blank" className="text-teal">
                            advent of code
                        </Link>
                        , an annual speed-coding challenge, with a placement of 11<sup>th</sup>, 5<sup>th</sup>, 10<sup>th</sup>, and 11<sup>th</sup> over the
                        past four years
                    </p>
                </div>
                <div className={card}>
                    <p>
                        <b>technical skills:</b> javascript, html, css, java, python (over 10 years) + git, sql, flask, typescript, svelte, react, mongodb,
                        kotlin, c++, discord.js, elysia, next.js, vercel, tailwindcss, drizzle orm
                    </p>
                    <p>
                        <b>other skills:</b> teaching (ranging from grade 1 through high school in mathematics and coding), community management & leadership
                        (discord, university clubs), public speaking (debate club, university clubs)
                    </p>
                </div>
                <div className={card}>
                    <p>here are some of the projects i'm the most proud of! you can find an (incomplete) list of stuff i've made on my github</p>
                    <span className="flex flex-wrap items-center gap-4">
                        <Image src="/daedalus.png" width={40} height={40} alt="daedalus icon" className="rounded-full" />
                        <b>daedalus</b>
                        <div className="text-gray">/</div>
                        <Link href="https://daedalusbot.xyz" target="_blank" className="text-teal">
                            website
                        </Link>
                    </span>
                    <p>
                        <b>daedalus</b> is a highly customizable, modern, and transparent general-purpose discord bot featuring a wide array of functionalities.
                        if you run a discord server with a need for moderation, automation, or community features, check out daedalus :)
                    </p>
                    <span className="flex flex-wrap items-center gap-4">
                        <Image src="/aoc.svg" width={40} height={40} alt="aoc icon" className="rounded-full" />
                        <b>advent of code</b>
                        <div className="text-gray">/</div>
                        <Link href="https://adventofcode.com" target="_blank" className="text-teal">
                            website
                        </Link>
                        <div className="text-gray">/</div>
                        <Link href="https://youtube.com/playlist?list=PLnNm9syGLD3zLoIGWeHfnEekEKxPKLivw" target="_blank" className="text-teal">
                            2023 playlist
                        </Link>
                        <div className="text-gray">/</div>
                        <Link href="https://youtube.com/playlist?list=PLnNm9syGLD3yf-YW-a5XNh1CJN07xr0Kz" target="_blank" className="text-teal">
                            2022 playlist
                        </Link>
                    </span>
                    <p>
                        i've been competing in the <b>advent of code</b> for many years and have consistently high leaderboard rankings (11<sup>th</sup>, 5
                        <sup>th</sup>, 10<sup>th</sup>, and 11<sup>th</sup> over the past four years)
                    </p>
                    <p>
                        i think the advent of code is a great opportunity for beginners to get started with programming, novices to hone their skills in
                        particular areas, and experienced coders to push their limits and train their problem solving alike
                    </p>
                    <p>
                        i've been creating solution videos on my{" "}
                        <Link href="https://youtube.com/@hyper-neutrino" target="_blank" className="text-teal">
                            youtube channel
                        </Link>{" "}
                        which i hope can inspire others to challenge themselves and develop their skills
                    </p>
                    <span className="flex flex-wrap items-center gap-4">
                        <Image src="/tcn.png" width={40} height={40} alt="tcn icon" className="rounded-full" />
                        <b>tcn</b>
                        <div className="text-gray">/</div>
                        <Link href="https://teyvatcollective.network/" target="_blank" className="text-teal">
                            website
                        </Link>
                        <div className="text-gray">/</div>
                        <Link href="https://github.com/teyvat-collective-network" target="_blank" className="text-teal">
                            github
                        </Link>
                    </span>
                    <p>
                        the <b>teyvat collective network</b> is a network of genshin impact discord servers. although it was not founded by me, i organized most
                        of the internal operations, community management, and public relations for a few years as well. during this time, i also owned the
                        technical infrastructure including a website, a custom discord bot with many internal tools, a chat bot linking channels between servers
                        to allow for a cross-server community, and a public-facing RESTful API
                    </p>
                    <span className="flex flex-wrap items-center gap-4">
                        <Image src="/proton.png" width={40} height={40} alt="proton icon" className="rounded-full" />
                        <b>proton</b>
                        <div className="text-gray">/</div>
                        <Link href="https://tio.run/#proton" target="_blank" className="text-teal">
                            try it online
                        </Link>
                        <div className="text-gray">/</div>
                        <Link href="https://github.com/hyper-neutrino/proton" target="_blank" className="text-teal">
                            github
                        </Link>
                    </span>
                    <p>
                        <b>proton</b> is a multi-paradigm programming language inspired by python's simplicity with c-like syntax and functional features. it's
                        not a production-ready language and not too stable, but i made this in high school well before i learned parser and compiler design and
                        programming language theory in university
                    </p>
                </div>
            </div>
        </Template>
    );
};

export default Home;
