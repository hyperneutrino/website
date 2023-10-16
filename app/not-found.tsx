import Navbar from "./components/Navbar";

const NotFound: React.FC = () => {
    return (
        <>
            <Navbar transparent />
            <div
                className="h-full"
                style={{
                    backgroundImage: "url(parallax.png)",
                    backgroundAttachment: "fixed",
                    backgroundPositionX: "center",
                    backgroundSize: "auto cover",
                }}
            >
                <div className="h-full bg-black/60 flex flex-row items-center justify-center">
                    <div className="w-11/12 md:w-5/6 xl:w-3/4 2xl:w-7/12 flex flex-col gap-5 bg-gray-900/40 p-8 rounded-2xl">
                        <p className="text-5xl lg:text-7xl bg-gradient-to-r from-teal/40 to-pink/40 p-2 rounded-2xl">
                            404 <b className="text-teal">Not Found</b>
                        </p>
                        <p className="text-white/60 text-3xl lg:text-5xl">
                            this page does not exist &middot;{" "}
                            <a href="/" className="text-pink">
                                go home
                            </a>
                        </p>
                        <p className="text-white/60 text-2xl lg:text-3xl">
                            check your spelling (including capitalization) &mdash; if you arrived here from a link on this page,{" "}
                            <a href="/?hl-contact#contact" className="text-pink">
                                let me know
                            </a>
                            !
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
