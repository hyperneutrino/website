import Card from "../components/Card";
import Cards from "../components/Cards";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

const Projects: React.FC = () => {
    return (
        <>
            <Navbar transparent />
            <Content>
                <Title>Commissions</Title>
                <Cards>
                    <Card title="/status" wide>
                        <p className="text-xl">Commissions are currently closed. Check back later!</p>
                    </Card>
                    <Card title="/preface">
                        <p className="text-xl">
                            If you&prime;d like a professionally made custom website or Discord bot, you&prime;ve come to the right place!
                        </p>
                        <p className="text-xl">
                            I can work very quickly and on short notice, being able to complete simple bots in as little as a couple of hours if I'm not busy.
                        </p>
                        <p className="text-xl">
                            If you'd like to discuss a commission, reach out to me on Discord at <span className="text-teal">@hyperneutrino</span>! (Join my{" "}
                            <a href="https://discord.gg/j9uunTRRJm" target="_blank" className="text-pink">
                                Discord server
                            </a>{" "}
                            to DM me).
                        </p>
                    </Card>
                    <Card title="/portfolio">
                        <p className="text-xl">
                            Feel free to take a look at{" "}
                            <a href="/projects" className="text-pink">
                                my projects
                            </a>
                            !
                        </p>
                        <p className="text-xl">
                            I&prime;ve been working with JavaScript on the web since 2013 and making full websites since 2018 and Discord bots since 2020. I'm
                            the solo developer of{" "}
                            <a href="https://daedalus.hyper-neutrino.xyz/" target="_blank" className="text-pink">
                                Daedalus
                            </a>
                            , a public bot in over 200 servers, and have worked on websites focused on style (such as this portfolio) and on highly advanced
                            functionality (such as Daedalus and the{" "}
                            <a href="https://teyvatcollective.network" target="_blank" className="text-pink">
                                Teyvat Collective Network
                            </a>
                            &prime;s website).
                        </p>
                        <p className="text-xl text-gray-400">I haven&prime;t done any commissions yet, so I have nothing to show here.</p>
                    </Card>
                    <Card title="/info">
                        <p className="text-xl">Here's a (very incomplete) list of things I can do:</p>
                        <ul className="list-disc list-inside">
                            <li>dynamic, fully animated websites</li>
                            <li>mobile-friendly webpages</li>
                            <li>single-page web applications</li>
                            <li>Discord bot dashboards &amp; admin dashboards / panels</li>
                            <li>slash commands, prefix commands, and automation</li>
                        </ul>
                        <p className="text-xl">Here's a rough outline of my policy.</p>
                        <ul className="list-disc list-inside">
                            <li>Bug fixes and minor adjustments for features that do not meet your requirements will be done for free.</li>
                            <li>I will not do anything that violates the ToS of anything I am working with or that I believe is harmful or malicious.</li>
                            <li>I reserve the right to cancel ongoing commissions for any reason (and you will, of course, receive a full refund).</li>
                            <li>I reserve the right to halt hosting or raise prices if necessary.</li>
                        </ul>
                        <p className="text-xl">
                            Your data will be safe and will not be given to anyone else for any reasons without your consent. If I am hosting, I will provide
                            your data to you in full upon reasonable request whenever possible. If you would like to discuss a formal privacy policy or
                            contract, feel free to mention it in your commission.
                        </p>
                        <p className="text-xl">
                            Payment is preferred through{" "}
                            <a href="https://ko-fi.com/hyperneutrino" target="_blank" className="text-pink">
                                Ko-Fi
                            </a>
                            , but I am willing to discuss other methods.
                        </p>
                    </Card>
                    <Card title="/payment">
                        <p className="text-xl">These are just rough estimates / guidelines. Contact me on Discord to discuss your request for a quote!</p>
                        <ul className="list-disc list-inside">
                            <li>
                                Implementation
                                <ul className="list-disc list-inside pl-12">
                                    <li>Simple websites: $10 &ndash; $50</li>
                                    <li>Websites with simple interactivity: $25 &ndash; $80</li>
                                    <li>Advanced websites: $50+</li>
                                    <li>Simple Discord bots: $10 &ndash; $50</li>
                                    <li>More complex Discord bots: $25 &ndash; $100</li>
                                    <li>Advanced Discord bots: $50 &ndash; $200</li>
                                    <li>Large public multi-server Discord bots: $100+</li>
                                </ul>
                            </li>
                            <li>
                                Code Rights
                                <ul className="list-disc list-inside pl-12">
                                    <li>You own the code: +10% &ndash; +25%</li>
                                    <li>Remove credits: +10% &ndash; +25%</li>
                                    <li>May be waived for smaller projects or increased for very large projects</li>
                                </ul>
                            </li>
                            <li>
                                Hosting
                                <ul className="list-disc list-inside pl-12">
                                    <li>Websites: $1 &ndash; $5 / mo</li>
                                    <li>Discord bots: $3 &ndash; $10 / mo</li>
                                    <li>Pricing will be decided based on resource usage for more complex items</li>
                                </ul>
                            </li>
                            <li>
                                Others
                                <ul className="list-disc list-inside pl-12">
                                    <li>Prices may be slightly increased for tight deadlines due to increased stress and workload</li>
                                    <li>Pricing will be roughly the same whether you have your own design already or just ideas and want me to design</li>
                                </ul>
                            </li>
                        </ul>
                    </Card>
                </Cards>
            </Content>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 bg-black w-screen">&copy; hyper-neutrino 2023</div>
        </>
    );
};

export default Projects;
