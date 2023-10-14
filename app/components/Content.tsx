interface IProps extends React.PropsWithChildren {
    noTopMargin?: boolean;
}

const Content: React.FC<IProps> = ({ children, noTopMargin }) => {
    return (
        <div className="bg-cover" style={{ backgroundImage: "url(background.png)" }}>
            <div className="bg-gradient-to-b from-black/80 to-black">
                <div className="bg-gradient-to-bl via-pink/20">
                    <div className="bg-gradient-to-br via-teal/20">
                        <div className={`${noTopMargin ? "" : "pt-80"} mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32`}>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
