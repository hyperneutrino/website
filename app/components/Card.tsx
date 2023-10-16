interface IProps extends React.PropsWithChildren {
    title: string;
    wide?: boolean;
}

const Card: React.FC<IProps> = ({ children, title, wide }) => {
    return (
        <div
            className="relative bg-gray-700/40 hover:bg-gray-600/40 rounded-xl p-10 flex flex-col justify-between gap-6 backdrop-blur-sm transition duration-250"
            style={{ gridColumn: wide ? "1 / -1" : "" }}
        >
            <div className="flex flex-col gap-6">
                <b className="text-4xl text-teal/80">{title}</b>
                {children}
            </div>
            <hr className="border-pink/80" />
        </div>
    );
};

export default Card;
