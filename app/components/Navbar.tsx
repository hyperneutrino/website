"use client";

import interpolate from "@/lib/interpolate";
import Image from "next/image";
import React, { useState } from "react";
import useScroll from "../hooks/scroll";

interface IProps {}

const links: [string, string, boolean?, boolean?][] = [
    ["/blog", "blog"],
    ["/projects", "projects"],
    ["https://ko-fi.com/hyperneutrino", "kofi", true, true],
    ["https://discord.gg/j9uunTRRJm", "discord", true, true],
    ["https://bsky.app/profile/hyperneutrino.bsky.social", "bluesky", true, true],
    ["https://github.com/hyper-neutrino", "github", true, true],
    ["https://youtube.com/@hyper-neutrino", "youtube", true, true],
];

const Navbar: React.FC<IProps> = ({}) => {
    const [open, setOpen] = useState<boolean>(false);
    const scroll = useScroll();

    const padding = `${interpolate(scroll, [0, 200], [2.5, 1.5])}rem`;
    const bg = `rgb(250, 240, 245, ${interpolate(scroll, [0, 200], [0, 1])})`;
    const height = interpolate(scroll, [0, 200], [60, 40]);

    return (
        <nav
            className="z-10 fixed top-0 w-screen inline-flex flex-row items-center justify-between px-10 md:px-24 lg:px-32 xl:px-48"
            style={{ backgroundColor: bg }}
        >
            <a href="/" className="text-xl inline-flex flex-row items-center gap-4" style={{ paddingTop: padding, paddingBottom: padding }}>
                <Image src="/icon.png" alt="HyperNeutrino's Icon" width={height} height={height} />
                <b style={{ fontSize: (height * 2) / 3 }}>HyperNeutrino</b>
            </a>
            <div className="hidden xl:block">
                <div className="inline-flex flex-row items-center gap-3">
                    {links.map(([path, name, external, icon], index) => (
                        <React.Fragment key={path}>
                            {index === 0 ? null : <span className="text-black/50">/</span>}
                            <a href={path} target={external ? "_blank" : "_self"} className="text-2xl text-gray-600 hover:text-black transition duration-300">
                                {icon ? <Image src={`/${name}.svg`} alt={`${name} icon`} width={24} height={24} /> : name}
                            </a>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className="block xl:hidden h-6">
                <button className="w-6 h-6 cursor-default" onClick={() => setOpen(true)}>
                    <svg className="text-black stroke-current fill-transparent" viewBox="0 0 10 10">
                        <path d="M 0 1 L 10 1 M 0 5 L 10 5 M 0 9 L 10 9" />
                    </svg>
                </button>
            </div>
            <div
                className="fixed top-0 left-0 h-screen w-screen bg-gray-800/40 m-0"
                style={{ backdropFilter: "blur(2px)", opacity: open ? 1 : 0, transition: "opacity 320ms", pointerEvents: open ? "all" : "none" }}
                onClick={() => setOpen(false)}
            />
            <div
                className="flex flex-col fixed top-0 left-1/4 md:left-1/3 lg:left-1/2 h-screen w-3/4 md:w-2/3 lg:w-1/2 bg-gray-800/90 m-0"
                style={{ backdropFilter: "blur(2px)", translate: open ? 0 : "100vw", transition: "translate 320ms cubic-bezier(0.5, 0.5, 0.4, 1)" }}
            >
                <div className="h-6 pr-10 md:pr-24 lg:pr-32 flex flex-row items-center justify-end" style={{ height: `calc(${height}px + 2 * ${padding})` }}>
                    <button className="w-6 h-6 cursor-default" onClick={() => setOpen(false)}>
                        <svg className="text-white stroke-current fill-transparent" viewBox="0 0 10 10">
                            <path d="M 1 1 L 9 9 M 1 9 L 9 1" />
                        </svg>
                    </button>
                </div>
                <div className="pl-5 md:pl-12 lg:pl-16 flex flex-col gap-4">
                    {links
                        .filter(([, , , icon]) => !icon)
                        .map(([path, name, external]) => (
                            <a
                                key={path}
                                href={path}
                                target={external ? "_blank" : "_self"}
                                className="mx-4 text-xl text-gray-50 hover:text-white transition duration-300"
                            >
                                {name}
                            </a>
                        ))}
                </div>
                <div className="grow" />
                <hr className="border-white/40 mx-10 md:mx-24 lg:mx-32 my-4" />
                <div className="flex flex-col items-center pb-4">
                    <div className="flex flex-row gap-8">
                        {links
                            .filter(([, , , icon]) => icon)
                            .map(([path, name, external]) => (
                                <a key={path} href={path} target={external ? "_blank" : "self"}>
                                    <Image src={`/${name}.svg`} alt={`${name} icon`} width={24} height={24} />
                                </a>
                            ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
