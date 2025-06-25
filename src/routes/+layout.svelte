<script lang="ts">
    import "../app.css";

    const links: [string, string, string?][] = [
        ["https://ko-fi.com/hyperneutrino", "kofi", "ko-fi"],
        ["https://discord.gg/j9uunTRRJm", "discord"],
        ["https://bsky.app/profile/hyperneutrino.xyz", "bluesky"],
        ["https://github.com/hyperneutrino", "github"],
        ["https://youtube.com/@hyper-neutrino", "youtube"],
        ["https://www.twitch.tv/hyperneutrino", "twitch"],
        ["https://codegolf.stackexchange.com/users/68942/hyperneutrino", "stack", "stack exchange"],
        ["https://mastodon.social/@hyperneutrino", "mastodon"],
    ];
</script>

<div class="flex min-h-screen w-full flex-col items-center bg-gray-900 text-lg text-white lg:bg-black">
    <div class="flex min-h-screen w-[min(1000px,95vw)] gap-4 bg-gray-900">
        <div class="h-100 breathe ml-1 border-l-4 border-l-pink md:ml-2 lg:ml-4"></div>
        <div class="mr-1 mt-4 flex flex-grow flex-col justify-between md:mr-2 lg:mr-4">
            <div class="mb-8 flex flex-col gap-2">
                <div class="flex items-center gap-4">
                    <img src="/icon.png" width={64} height={64} alt="pink lambda icon" />
                    <h1 class="bg-[linear-gradient(to_bottom_right,#c765ab_20%,#65abc7_80%)] bg-clip-text py-1 text-[min(6vw,2rem)] text-transparent">
                        HyperNeutrino
                    </h1>
                </div>
                <hr class="border border-pink" />
                <div class="flex flex-wrap items-center gap-2">
                    {#each links as [href, icon, _name]}
                        {@const name = _name ?? icon}
                        <a
                            {href}
                            target="_blank"
                            class="btn duration-250 border-2 p-2 opacity-90 transition-opacity hover:opacity-100 md:opacity-75"
                            title={name}
                        >
                            <img src="/{icon}.svg" width={24} height={24} alt="{name} icon" />
                        </a>
                    {/each}
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    <a href="/">Home</a>
                    <span>&middot;</span>
                    <a href="/projects">Projects</a>
                    <span>&middot;</span>
                    <a href="/resume">Resume</a>
                </div>
                <slot />
            </div>
            <div>
                <hr class="border border-pink" />
                <p class="geo py-2 text-center text-sm text-gray-500">&copy; 2025 hyperneutrino</p>
            </div>
        </div>
    </div>
</div>
