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
                <Title>Blog</Title>
                <Cards>
                    <Card title="/nothing-here-yet">
                        <p className="text-xl text-white/50">Coming soon!</p>
                    </Card>
                </Cards>
            </Content>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 bg-black w-screen">&copy; hyper-neutrino 2023</div>
        </>
    );
};

export default Projects;
