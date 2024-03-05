import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    metadataBase: new URL("https://hyper-neutrino.xyz"),
    title: "HyperNeutrino | Wave 26 Election Additional Information",
    description: "HyperNeutrino's Wave 26 Election Statement, Supplementary Material",
    keywords: ["hyper", "neutrino", "hyperneutrino", "teyvat", "collective", "network", "tcn"],
    openGraph: {
        type: "website",
        title: "HyperNeutrino | Wave 26 Election Additional Information",
        description: "I am accepting my nomination for the 26th TCN observer election. Please visit this page for additional information.",
        url: "https://hyper-neutrino.xyz",
        images: { url: "https://hyper-neutrino.xyz/profile.png" },
    },
    twitter: { card: "summary" },
    colorScheme: "dark",
    themeColor: "#df72c0",
};

export default function Layout({ children }: { children: ReactNode }) {
    return children;
}
