"use client";

import interpolate from "@/lib/interpolate";
import { useEffect, useState } from "react";

interface IProps {}

const links: [string, string][] = [
    ["/", "Home"],
    ["/projects", "Projects"],
];

const Navbar: React.FC<IProps> = ({}) => {
    const [scroll, setScroll] = useState<number>(0);
    const handle = () => setScroll(window.scrollY);

    useEffect(() => {
        setScroll(window.scrollY);
        window.addEventListener("scroll", handle, { passive: true });
        return () => window.removeEventListener("scroll", handle);
    }, []);

    const pad1 = `${interpolate(scroll, [0, 100], [2.5, 1.5])}rem`;
    const pad2 = `${interpolate(scroll, [0, 100], [1.5, 0.75])}rem`;
    const bg = `rgb(${interpolate(scroll, [0, 100], [17, 33])}, ${interpolate(scroll, [0, 100], [18, 34])}, ${interpolate(scroll, [0, 100], [20, 37])})`;

    return (
        <nav
            className="fixed top-0 w-screen inline-flex flex-row justify-between px-10 lg:px-32 xl:px-48"
            style={{ paddingBottom: `calc(${pad1} - ${pad2})`, backgroundColor: bg }}
        >
            <a href="/" className="text-xl" style={{ paddingTop: pad1, paddingBottom: pad2 }}>
                <img src="icon.png" style={{ height: "2em" }} />
            </a>
            <div className="inline-flex flex-row">
                {links.map(([path, name], index) => (
                    <a
                        key={path}
                        href={path}
                        className="border-b-2 border-transparent hover:border-pink mx-6 box-border text-xl text-gray-50 hover:text-white transition duration-300"
                        style={{ paddingTop: pad1, paddingBottom: pad2 }}
                    >
                        {index === 0 ? <b>{name}</b> : name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
