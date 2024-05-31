import Card from "../components/Card";
import Cards from "../components/Cards";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import ProjectPageSide from "../components/ProjectPageSide";
import Title from "../components/Title";

const techs: [string, string][] = [
    ["TypeScript", "https://www.typescriptlang.org/"],
    ["Node (JS Runtime)", "https://nodejs.org/"],
    ["discord.js", "https://discord.js.org/"],
    ["Svelte (Web Framework)", "https://svelte.dev/"],
    ["MongoDB (Document Database)", "https://www.mongodb.com/"],
    ["React (Web Framework)", "https://reactjs.org/"],
    ["MySQL (Relational Database)", "https://www.mysql.com/"],
    ["Drizzle (ORM)", "https://drizzle.dev/"],
];

const Projects: React.FC = () => {
    return (
        <>
            <Navbar />
            <Content>
                <Title>My Projects</Title>
                <Cards>
                    <Card title="/preface">
                        <p className="text-xl">
                            You can find a full list of my projects on my{" "}
                            <a href="https://github.com/hyper-neutrino" target="_blank" className="text-pink">
                                GitHub
                            </a>
                            .
                        </p>
                        <p className="text-xl">
                            This is just a collection of projects I would like to show off, and if you&prime;d like to browse through them, I hope you enjoy
                            scrolling through these and find them interesting and/or inspiring!
                        </p>
                        <p className="text-xl">
                            If you want to know how I built something or want a tutorial on something you found cool, you&prime;re welcome to join my{" "}
                            <a href="https://discord.gg/j9uunTRRJm" target="_blank" className="text-pink">
                                Discord server
                            </a>{" "}
                            and make a request!
                        </p>
                    </Card>
                    <Card title="/tech">
                        These are the frameworks/languages I use the most often:
                        <ul className="list-disc list-inside">
                            {techs.map(([name, url]) => (
                                <li key={name}>
                                    <a href={url} target="_blank" className="text-pink">
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Card>
                    <div
                        className="grid gap-4"
                        style={{ gridColumn: "1 / -1", gridTemplateColumns: "repeat(auto-fit, minmax(max(min(200px, 100%), calc(33.333% - 1rem)), 1fr))" }}
                    >
                        <Card title="/daedalus" w-2>
                            <p className="text-xl">
                                Daedalus is a Discord bot I made in 2022 to address a problem I had with other bots &mdash; most other general-purpose bots felt
                                outdated, had too much bloat and not enough useful features / customizability, or had other issues. This sentiment was shared by
                                others in the Discord sub-community in which I participated. Thus, Daedalus was born.
                            </p>
                            <p className="text-xl">
                                Initially, I joined a server&prime;s development team to work as a bot developer and wrote a custom bot for that server. Later,
                                more servers heard about my work and wanted to use my bot as well, so I started deploying multiple copies of my bot. Eventually,
                                I was given the idea to work on a public bot, which became Daedalus.
                            </p>
                        </Card>
                        <ProjectPageSide icon="daedalus.png" alt="Daedalus Icon" links={[["website", "https://daedalus.hyper-neutrino.xyz"]]} />
                        <ProjectPageSide
                            icon="aoc.svg"
                            alt="Advent of Code Icon"
                            links={[["2022 playlist", "https://www.youtube.com/playlist?list=PLnNm9syGLD3yf-YW-a5XNh1CJN07xr0Kz"]]}
                        />
                        <Card title="/advent-of-code" w-2>
                            <p className="text-xl">
                                I&prime;ve been competing in the Advent of Code for many years and have multiple leaderboard rankings: 11<sup>th</sup> in 2020,
                                5<sup>th</sup> in 2021, 10<sup>th</sup> in 2022, and 11<sup>th</sup> in 2023. I think the AoC is a great opportunity for
                                beginners to get started with programming, novices to hone their skills in particular areas, and experienced coders to push
                                their limits and train their problem solving alike.
                            </p>
                            <p className="text-xl">
                                I&prime;ve been creating walk-through videos on my{" "}
                                <a href="https://youtube.com/@hyper-neutrino" target="_blank" className="text-pink">
                                    YouTube channel
                                </a>
                                , which I hope inspires others to challenge themselves and continuously develop their skills.
                            </p>
                        </Card>
                        <Card title="/proton" w-2>
                            <p className="text-xl">
                                Early on in my coding career, I got interested in code golf, a style of competition where the objective is to write the shortest
                                possible code to accomplish a given task. Although not a particularly useful skill in the real-world, thinking outside of the
                                box, problem-solving, and being forced to look at problems from different perspectives were very valuable skills.
                            </p>
                            <p className="text-xl">
                                Although not created solely for code golf, Proton was born out of a desire to combine the simplicity and convenience of Python
                                with some syntactical components inspired by other languages such as JavaScript, Ruby, etc. Python&prime;s lambda syntax and use
                                of indentation can be clunky and not always ideal for code golf, so although Proton was created to be a general-use language, it
                                still offers many features that make it great for code golf.
                            </p>
                            <p className="text-xl">
                                You can try the language on{" "}
                                <a href="https://tio.run#proton" target="_blank" className="text-pink">
                                    Try It Online!
                                </a>{" "}
                                or check out the source code on{" "}
                                <a href="https://github.com/hyper-neutrino/proton" target="_blank" className="text-pink">
                                    GitHub
                                </a>
                                .
                            </p>
                        </Card>
                        <ProjectPageSide
                            icon="proton.png"
                            alt="Proton Icon"
                            links={[
                                ["try the language", "https://tio.run#proton"],
                                ["github", "https://github.com/hyper-neutrino/proton"],
                            ]}
                        />
                        <ProjectPageSide
                            icon="remotion.png"
                            alt="Remotion Icon"
                            links={[
                                ["remotion", "https://www.remotion.dev"],
                                ["github", "https://github.com/hyper-neutrino/remotion"],
                            ]}
                        />
                        <Card title="/remotion-assets" w-2>
                            <p className="text-xl">
                                Remotion (not made by me) is a React-based video framework. Rather than editing videos in a video editor like Premiere Pro or
                                After Effects, you can programmatically create a video using React and render it to a real MP4.
                            </p>
                            <p className="text-xl">
                                I&prime;ve been using it to make my video assets, and it&prime;s been an incredible way for me to translate my coding skills
                                into production quality for my channel without needing to learn video software or pay for Adobe products. Feel free to draw
                                inspiration from my assets! Please credit me if you use my code as a template and please don&prime;t take anything directly.
                            </p>
                        </Card>
                        <Card title="/wall-of-hope" w-2>
                            <p className="text-xl">
                                The Wall of Hope is a charity campaign run by a community effort in the Genshin Impact Discord community through Save the
                                Children, an NGO focusing on children&prime;s issues around the world.
                            </p>
                            <p className="text-xl">
                                We raised almost $4,000, and although we did not reach out intended $5,000 goal, I am still proud of the community for being
                                able to put together this much to donate for no other purpose than we felt like it and were inspired by a video game character.
                            </p>
                            <p className="text-xl">
                                In addition to organizing and coordinating the effort alongside 5 other organizers, I created a bot used to automatically assign
                                reward roles, a non-monetary incentive we used to recognize those who supported our efforts.
                            </p>
                        </Card>
                        <ProjectPageSide
                            icon="wallofhope.png"
                            alt="Wall of Hope Icon"
                            links={[
                                ["website", "https://sites.google.com/view/wallofhope"],
                                ["github", "https://github.com/hyper-neutrino/wall-of-hope"],
                            ]}
                        />
                        <ProjectPageSide
                            icon="jht.png"
                            alt="Jelly Compendium Icon"
                            links={[
                                ["website", "https://jht.hyper-neutrino.xyz"],
                                ["github", "https://github.com/hyper-neutrino/jelly-compendium"],
                            ]}
                        />
                        <Card title="/jelly-compendium" w-2>
                            <p className="text-xl">
                                Jelly is a language made by Dennis Mitchell specifically for the purpose of code golf. It is both extremely powerful and
                                extremely difficult to both learn and master.
                            </p>
                            <p className="text-xl">
                                Jelly was my introduction to functional programming and taught me many valuable and transferrable skills despite being an
                                impractical language for production usage. I created the Jelly Compendium to pass on my knowledge and expertise in this language
                                and to supplement its own documentation and tutorials.
                            </p>
                        </Card>
                    </div>
                </Cards>
            </Content>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 bg-white/90 w-screen">&copy; hyper-neutrino 2024</div>
        </>
    );
};

export default Projects;
