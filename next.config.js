/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/discord",
                destination: "https://discord.gg/j9uunTRRJm",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
