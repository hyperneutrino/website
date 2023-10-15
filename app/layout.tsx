import type { Metadata } from "next";
import { Share_Tech } from "next/font/google";
import "./globals.css";

interface IProps extends React.PropsWithChildren {}

const font = Share_Tech({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "HyperNeutrino",
    description: "HyperNeutrino's Portfolio Website",
    keywords: ["hyper", "neutrino", "hyperneutrino", "advent", "of", "code", "adventofcode", "teyvat", "collective", "network", "tcn"],
    openGraph: {
        type: "website",
        title: "HyperNeutrino",
        description: "Welcome to my portfolio website! Check out my projects, about me, and links to my various profiles here.",
        url: "https://hyper-neutrino.xyz",
        images: "https://hyper-neutrino.xyz/icon.png",
    },
    colorScheme: "dark",
    themeColor: "#ff0099",
};

const RootLayout: React.FC<IProps> = ({ children }) => {
    return (
        <html lang="en" className="scroll-smooth">
            <link rel="icon" href="icon.png" />
            <body className={`${font.className} h-screen text-gray-50 bg-gray-900 text-lg`}>{children}</body>
        </html>
    );
};

export default RootLayout;
