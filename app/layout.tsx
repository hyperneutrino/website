import type { Metadata } from "next";
import { Share_Tech } from "next/font/google";
import "./globals.css";

interface IProps extends React.PropsWithChildren {}

const font = Share_Tech({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "HyperNeutrino",
    description: "HyperNeutrino's Personal Website",
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
