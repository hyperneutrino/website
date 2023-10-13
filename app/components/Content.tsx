interface IProps extends React.PropsWithChildren {}

const Content: React.FC<IProps> = ({ children }) => {
    return <div className="mt-20 mx-10 lg:mx-32 xl:mx-48">{children}</div>;
};

export default Content;
