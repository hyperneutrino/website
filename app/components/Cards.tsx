interface IProps extends React.PropsWithChildren {}

const Cards: React.FC<IProps> = ({ children }) => {
    return (
        <div className="grid pt-6 pb-24 gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(max(min(600px, 100%), calc(50% - 1rem)), 1fr))" }}>
            {children}
        </div>
    );
};

export default Cards;
