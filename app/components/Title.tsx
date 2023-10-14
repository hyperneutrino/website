interface IProps extends React.PropsWithChildren {}

const Title: React.FC<IProps> = ({ children }) => {
    return (
        <b className="p-10 bg-black/20 rounded-lg backdrop-blur text-4xl grid items-center gap-8" style={{ gridTemplateColumns: "1fr auto 1fr" }}>
            <hr className="border-white/20" />
            {children}
            <hr className="border-white/20" />
        </b>
    );
};

export default Title;
