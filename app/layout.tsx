import type { Metadata } from "next";
import { Share_Tech } from "next/font/google";
import "./globals.css";

interface IProps extends React.PropsWithChildren {}

const font = Share_Tech({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://hyperneutrino.xyz"),
    title: "HyperNeutrino",
    description: "HyperNeutrino's Portfolio Website",
    keywords: ["hyper", "neutrino", "hyperneutrino", "advent", "of", "code", "adventofcode"],
    openGraph: {
        type: "website",
        title: "HyperNeutrino",
        description: "hey~ i'm hyperneutrino, come check out my projects, about me, and links to my socials here :D",
        url: "https://hyperneutrino.xyz",
        images: { url: "https://hyperneutrino.xyz/banner.png" },
    },
    twitter: { card: "summary_large_image" },
    colorScheme: "dark",
    themeColor: "#c765ab",
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
