"use client";

import { Share_Tech_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import Template from "../components/template";

const mono = Share_Tech_Mono({ weight: ["400"], subsets: ["latin"] });

const NotFound: React.FC = () => {
    const [animate, setAnimate] = useState(true);

    const card = `p-2 rounded-md border-2 border-pink bg-gray-800 ${
        animate ? "opacity-80 md:opacity-80 hover:opacity-100 md:scale-[99%] hover:scale-100 transition duration-500" : ""
    } flex flex-col gap-4`;

    return (
        <Template animate={animate} setAnimate={setAnimate}>
            <p className="mb-4 text-3xl">my blog</p>
            <div
                className={card}
                style={{ borderColor: "red", background: "repeating-linear-gradient(45deg, #ff888822, #ff888822 20px, #ffffff22 20px, #ffffff22 40px)" }}
            >
                <p className="text-xl">
                    <span className={`${mono.className} text-lg text-gray-400`}>2024-11-18</span> under construction
                </p>
                <p>this section is under construction right now. please check back later!</p>
            </div>
            {/* <div className={card}>
                <p className="text-xl">
                    <span className={`${mono.className} text-lg text-gray-400`}>2024-11-20</span> international transgender day of remembrance
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac purus ornare, pulvinar nisi ut, suscipit lacus. Donec erat dui,
                    iaculis in dui sed, ornare accumsan libero. Praesent sagittis gravida ultricies.
                </p>
                <p>
                    <Link href="/blog/2024-11-20/trans-day-of-remembrance" className="text-teal sliding-underline">
                        read this article &rarr;
                    </Link>
                </p>
            </div> */}
        </Template>
    );
};

export default NotFound;
