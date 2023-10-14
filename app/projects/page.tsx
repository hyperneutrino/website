import Card from "../components/Card";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

const techs: [string, string][] = [
    ["Bun (JS/TS Runtime)", "https://bun.sh/"],
    ["TypeScript", "https://www.typescriptlang.org/"],
    ["discord.js", "https://discord.js.org/"],
    ["Svelte (Web Framework)", "https://svelte.dev/"],
    ["MongoDB (Document Database)", "https://www.mongodb.com/"],
];

const Projects: React.FC = () => {
    return (
        <>
            <Navbar transparent />
            <Content>
                <Title>My Projects</Title>
                <div className="grid pt-6 pb-24 gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(600px, 100%), 1fr))" }}>
                    <Card title="/preface">
                        <p className="text-xl">
                            You can find a full list of my projects on my{" "}
                            <a href="https://github.com/hyper-neutrino" target="_blank" className="text-pink">
                                GitHub
                            </a>
                            .
                        </p>
                        <p className="text-xl">
                            This is just a collection of projects I would like to show off, and if you&apos;d like to browse through them, I hope you enjoy
                            scrolling through these and find them interesting and/or inspiring!
                        </p>
                        <p className="text-xl">
                            If you want to know how I built something or want a tutorial on something you found cool, you&apos;re welcome to join my{" "}
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
                    <Card title="/project-list" wide>
                        <b className="text-3xl underline underline-offset-8">Daedalus</b>
                        <p className="text-xl">
                            Daedalus is a Discord bot I made in 2022 to address a problem I had with other bots &mdash; most other general-purpose bots felt
                            outdated, had too much bloat and not enough useful features / customizability, or had other issues. This sentiment was shared by
                            others in the Discord sub-community in which I participated. Thus, Daedalus was born.
                        </p>
                        <p className="text-xl">
                            Initially, I joined a server&apos;s development team to work as a bot developer and wrote a custom bot for that server. Later, more
                            servers heard about my work and wanted to use my bot as well, so I started deploying multiple copies of my bot. Eventually, I was
                            given the idea to work on a public bot, which became Daedalus.
                        </p>
                        <p className="text-xl">
                            The bot&apos;s source code is proprietary, but you can check out and try the bot for yourself{" "}
                            <a href="https://daedalus.hyper-neutrino.xyz/" target="_blank" className="text-pink">
                                here
                            </a>
                            !
                        </p>
                        <b className="text-3xl underline underline-offset-8">Advent of Code</b>
                        <p className="text-xl">
                            I&apos;ve been competing in the Advent of Code for many years and have multiple leaderboard rankings: 11th in 2020, 5th in 2021, and
                            10th in 2022. I think the AoC is a great opportunity for beginners to get started with programming, novices to hone their skills in
                            particular areas, and experienced coders to push their limits and train their problem solving alike.
                        </p>
                        <p className="text-xl">
                            I&apos;ve been creating walk-through videos on my{" "}
                            <a href="https://youtube.com/@hyper-neutrino" target="_blank" className="text-pink">
                                YouTube channel
                            </a>
                            , which I hope inspires others to challenge themselves and continuously develop their skills.
                        </p>
                        <b className="text-3xl underline underline-offset-8">Proton</b>
                        <p className="text-xl">
                            Early on in my coding career, I got interested in code golf, a style of competition where the objective is to write the shortest
                            possible code to accomplish a given task. Although not a particularly useful skill in the real-world, thinking outside of the box,
                            problem-solving, and being forced to look at problems from different perspectives were very valuable skills.
                        </p>
                        <p className="text-xl">
                            Although not created solely for code golf, Proton was born out of a desire to combine the simplicity and convenience of Python with
                            some syntactical components inspired by other languages such as JavaScript, Ruby, etc. Python&apos;s lambda syntax and use of
                            indentation can be clunky and not always ideal for code golf, so although Proton was created to be a general-use language, it still
                            offers many features that make it great for code golf.
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
                        <p className="text-3xl underline underline-offset-8">Remotion</p>
                        <p className="text-xl">
                            Remotion is a React-based video framework. Rather than editing videos in a video editor like Premiere Pro or After Effects, you can
                            programmatically create a video using React and render it to a real MP4.
                        </p>
                        <p className="text-xl">
                            I&apos;ve been using it to make my video assets, and it&apos;s been an incredible way for me to translate my coding skills into
                            production quality for my channel without needing to learn video software or pay for Adobe products.
                        </p>
                        <b className="text-3xl underline underline-offset-8">Jelly Compendium</b>
                        <p className="text-xl">
                            Jelly is a language made by Dennis Mitchell specifically for the purpose of code golf. It is extremely terse and although it has not
                            been updated in several years, it remains competitive even when put against modern languages undergoing continuous development. It
                            is a tacit language, meaning functions do not explicitly refer to their arguments and instead the programmer chains functions
                            together to manipulate inputs. It is both extremely powerful and extremely difficult to both learn and master.
                        </p>
                        <p className="text-xl">
                            Jelly was my introduction to functional programming and taught me many valuable and transferrable skills despite being an
                            impractical language for production usage. Although it is brilliantly designed, its documentation and tutorials are not as complete
                            or in-depth. As such, I created the{" "}
                            <a href="https://jht.hyper-neutrino.xyz" target="_blank" className="text-pink">
                                Jelly Compendium
                            </a>{" "}
                            to pass on my knowledge and expertise in this language. You can also check out its GitHub repository{" "}
                            <a href="https://github.com/hyper-neutrino/jelly-compendium" target="_blank" className="text-pink">
                                here
                            </a>
                            .
                        </p>
                        <b className="text-3xl underline underline-offset-8">Terminal Minesweeper</b>
                        <p className="text-xl">
                            Minesweeper is a well-known and well-loved game, and I wanted to try making my version of it in the terminal. This was one of my
                            first projects interacting with keypresses in the terminal directly instead of using STDIN.
                        </p>
                        <p className="text-xl">
                            You can view the code for the game and download it to try it out on{" "}
                            <a href="https://github.com/hyper-neutrino/terminal-minesweeper" target="_blank" className="text-pink">
                                GitHub
                            </a>
                            .
                        </p>
                        <b className="text-3xl underline underline-offset-8">Terminal Christmas Tree</b>
                        <p className="text-xl">
                            It&apos;s just a Christmas tree! You can check it out on{" "}
                            <a href="https://github.com/hyper-neutrino/christmas-tree" target="_blank" className="text-pink">
                                GitHub
                            </a>
                            . Although fairly simple, this was one of my earliest terminal-oriented projects and was my introduction to ANSI codes.
                        </p>
                    </Card>
                </div>
            </Content>
        </>
    );
};

export default Projects;
