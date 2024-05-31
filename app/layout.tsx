import type { Metadata } from "next";
import { Share_Tech } from "next/font/google";
import "./globals.css";

interface IProps extends React.PropsWithChildren {}

const font = Share_Tech({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://hyper-neutrino.xyz"),
    title: "HyperNeutrino",
    description: "HyperNeutrino's Portfolio Website",
    keywords: ["hyper", "neutrino", "hyperneutrino", "advent", "of", "code", "adventofcode", "teyvat", "collective", "network", "tcn"],
    openGraph: {
        type: "website",
        title: "HyperNeutrino",
        description: "Welcome to my portfolio website! Check out my projects, about me, and links to my various profiles here.",
        url: "https://hyper-neutrino.xyz",
        images: { url: "https://hyper-neutrino.xyz/banner.png" },
    },
    twitter: { card: "summary_large_image" },
    colorScheme: "light",
    themeColor: "#df72c0",
};

const RootLayout: React.FC<IProps> = ({ children }) => {
    return (
        <html lang="en" className="bg-black scroll-smooth">
            <link rel="icon" href="/icon.png" />
            <body className={`${font.className} h-screen text-gray-900 bg-gray-50 text-lg`}>{children}</body>
        </html>
    );
};

export default RootLayout;
