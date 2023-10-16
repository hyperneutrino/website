import Card from "../components/Card";
import Cards from "../components/Cards";
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
                    <Card title="/project-list" wide>
                        <b className="text-3xl underline underline-offset-8">Daedalus</b>
                        <p className="text-xl">
                            Daedalus is a Discord bot I made in 2022 to address a problem I had with other bots &mdash; most other general-purpose bots felt
                            outdated, had too much bloat and not enough useful features / customizability, or had other issues. This sentiment was shared by
                            others in the Discord sub-community in which I participated. Thus, Daedalus was born.
                        </p>
                        <p className="text-xl">
                            Initially, I joined a server&prime;s development team to work as a bot developer and wrote a custom bot for that server. Later, more
                            servers heard about my work and wanted to use my bot as well, so I started deploying multiple copies of my bot. Eventually, I was
                            given the idea to work on a public bot, which became Daedalus.
                        </p>
                        <p className="text-xl">
                            The bot&prime;s source code is proprietary, but you can check out and try the bot for yourself{" "}
                            <a href="https://daedalus.hyper-neutrino.xyz/" target="_blank" className="text-pink">
                                here
                            </a>
                            !
                        </p>
                        <b className="text-3xl underline underline-offset-8">Advent of Code</b>
                        <p className="text-xl">
                            I&prime;ve been competing in the Advent of Code for many years and have multiple leaderboard rankings: 11th in 2020, 5th in 2021, and
                            10th in 2022. I think the AoC is a great opportunity for beginners to get started with programming, novices to hone their skills in
                            particular areas, and experienced coders to push their limits and train their problem solving alike.
                        </p>
                        <p className="text-xl">
                            I&prime;ve been creating walk-through videos on my{" "}
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
                            some syntactical components inspired by other languages such as JavaScript, Ruby, etc. Python&prime;s lambda syntax and use of
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
                            I&prime;ve been using it to make my video assets, and it&prime;s been an incredible way for me to translate my coding skills into
                            production quality for my channel without needing to learn video software or pay for Adobe products.
                        </p>
                        <b className="text-3xl underline underline-offset-8">Wall of Hope</b>
                        <p className="text-xl">
                            The{" "}
                            <a href="https://sites.google.com/view/wallofhope" target="_blank" className="text-pink">
                                Wall of Hope
                            </a>{" "}
                            was a community effort inspired by the teaser for the Genshin Impact character Dehya, in which she donates to an orphanage. We
                            decided to use our reach and community influence for the greater good and ran a charity campaign through Save the Children, an NGO
                            focusing on children&prime;s issues around the world. This organization was formed by its founder to end children&prime;s suffering
                            across war-torn places in Europe affected by World War I, which mirrored Dehya&prime;s teaser in which she gave to help children that
                            were suffering from conflicts between the desert and forest people in her nation.
                        </p>
                        <p className="text-xl">
                            We raised almost $4,000, and although we did not reach out intended $5,000 goal, I am still proud of the community for being able to
                            put together this much to donate for no other purpose than we felt like it and were inspired by a video game character.
                        </p>
                        <p className="text-xl">
                            You can see the code for the bot used to automatically assign reward roles, a non-monetary incentive we used to recognize those who
                            supported our efforts, on{" "}
                            <a href="https://github.com/hyper-neutrino/wall-of-hope" target="_blank" className="text-pink">
                                GitHub
                            </a>
                            .
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
                            It&prime;s just a Christmas tree! You can check it out on{" "}
                            <a href="https://github.com/hyper-neutrino/christmas-tree" target="_blank" className="text-pink">
                                GitHub
                            </a>
                            . Although fairly simple, this was one of my earliest terminal-oriented projects and was my introduction to ANSI codes.
                        </p>
                    </Card>
                </Cards>
            </Content>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 bg-black w-screen">&copy; hyper-neutrino 2023</div>
        </>
    );
};

export default Projects;
