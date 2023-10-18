import Image from "next/image";
import React from "react";
import Card from "./Card";

interface IProps {
    icon: string;
    alt: string;
    links: [string, string][];
}

const ProjectPageSide: React.FC<IProps> = ({ icon, alt, links }) => {
    return (
        <Card>
            <div className="w-full h-full grid items-center justify-items-center">
                <div className="flex flex-col items-center gap-8">
                    <Image src={`/${icon}`} alt={alt} width={160} height={160} className="rounded-xl" />
                    <p className="text-2xl flex flex-row flex-wrap gap-2">
                        {links.map(([label, href], index) => (
                            <React.Fragment key={href}>
                                {index === 0 ? null : <span className="text-white/50">/</span>}
                                <a href={href} target="_blank" className="text-pink">
                                    {label}
                                </a>
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default ProjectPageSide;
