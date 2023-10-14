"use client";

import { useEffect, useState } from "react";

export default function () {
    const [scroll, setScroll] = useState<number>(0);
    const handle = () => setScroll(window.scrollY);

    useEffect(() => {
        setScroll(window.scrollY);
        window.addEventListener("scroll", handle, { passive: true });
        return () => window.removeEventListener("scroll", handle);
    }, []);

    return scroll;
}
