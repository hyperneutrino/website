"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";

interface IProps extends React.PropsWithChildren {
    title?: string;
    wide?: boolean;
    "w-2"?: boolean;
    still?: boolean;
}

const Card: React.FC<IProps> = ({ children, title, wide, "w-2": w2, still }) => {
    const [show, setShow] = useState<boolean>(still ?? false);
    const { ref, inView } = useInView({ threshold: 0.1 });

    if (!show && inView) setShow(true);

    return (
        <div
            ref={ref}
            className="w-full h-full relative bg-gray-700/40 hover:bg-gray-600/40 rounded-xl p-10 flex flex-col justify-between gap-6 backdrop-blur-sm"
            style={{
                gridColumn: wide ? "1 / -1" : w2 ? "span 2 / span 2" : "",
                opacity: show ? 1 : 0,
                transform: `translate(${show ? 0 : -20}px)`,
                transition: "background-color 250ms, opacity 1s, transform 1s",
            }}
        >
            <div className="w-full h-full flex flex-col gap-6">
                {title === undefined ? null : <b className="text-4xl text-teal/80">{title}</b>}
                {children}
            </div>
            <hr className="border-pink/80" />
        </div>
    );
};

export default Card;
