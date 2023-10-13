import Content from "./components/Content";

interface IProps {}

const Home: React.FC<IProps> = ({}) => {
    return (
        <Content>
            {new Array(100).fill(0).map((_, x) => (
                <p key={x}>Hello, World!</p>
            ))}
        </Content>
    );
};

export default Home;
