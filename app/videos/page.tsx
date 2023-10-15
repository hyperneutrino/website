import Card from "../components/Card";
import Cards from "../components/Cards";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

const Videos: React.FC = () => {
    return (
        <>
            <Navbar />
            <Content>
                <Title>Videos</Title>
                <Cards>
                    <Card title="/preface">
                        <p className="text-xl">
                            This is a list of most of my YouTube videos, including some unlisted ones. You can browse through them by tags or by searching for
                            the title.
                        </p>
                        <p className="text-xl">
                            Check out my YouTube channel directly{" "}
                            <a href="https://www.youtube.com/@hyper-neutrino" target="_blank" className="text-pink">
                                here
                            </a>
                            !
                        </p>
                    </Card>
                    <Card title="/info">
                        <p className="text-xl">
                            I record my videos using{" "}
                            <a href="https://obsproject.com" target="_blank" className="text-pink">
                                OBS
                            </a>
                            . I use{" "}
                            <a href="https://audacityteam.org" target="_blank" className="text-pink">
                                Audacity
                            </a>{" "}
                            for touching up audio.
                        </p>
                        <p className="text-xl">
                            Videos made before 2023 were essentially unedited, which shows in its production quality being just one continuous shot and the
                            relatively poor audio quality (it&apos;s all recorded using my headset microphone).
                        </p>
                        <p className="text-xl">
                            From 2023 and beyond, my videos are recorded using OBS and I use Audacity as needed to fix up and edit the audio, and the video
                            editing and all animated assets are done using{" "}
                            <a href="https://remotion.dev" target="_blank" className="text-pink">
                                Remotion
                            </a>{" "}
                            (feel free to check out my assets&apos; source code on{" "}
                            <a href="https://github.com/hyper-neutrino/remotion" target="_blank" className="text-pink">
                                GitHub
                            </a>{" "}
                            &mdash; just please credit me if you&apos;re adapting any of them for your own usage, and please do not take them directly!)
                        </p>
                    </Card>
                </Cards>
            </Content>
        </>
    );
};

export default Videos;
