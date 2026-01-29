module.exports =
    {
        apps: [
            {
                name: "website",
                exec: "pnpm start",
                env: {
                    PORT: 5161,
                },
            },
        ],
    };
