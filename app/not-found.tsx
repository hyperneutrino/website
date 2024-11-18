"use client";

import Link from "next/link";
import { useState } from "react";
import Template from "./components/template";

const NotFound: React.FC = () => {
    const [animate, setAnimate] = useState(true);

    return (
        <Template animate={animate} setAnimate={setAnimate}>
            <p className="mb-4 text-3xl">
                <b>404</b> Not Found
            </p>
            <p>
                this page does not exist &middot;{" "}
                <Link href="/" className="text-pink">
                    go home
                </Link>
            </p>
            <p>check your spelling (including capitalization) &mdash; if you arrived here from a link on this site, let me know!</p>
        </Template>
    );
};

export default NotFound;
