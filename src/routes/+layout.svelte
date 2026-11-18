<script lang="ts">
    import "../app.css";

    const links: [string, string, string?][] = [
        ["https://discord.gg/j9uunTRRJm", "discord"],
        ["https://github.com/hyperneutrino", "github"],
        ["https://youtube.com/@hyper-neutrino", "youtube"],
        ["https://www.twitch.tv/hyperneutrino", "twitch"],
    ];
</script>

<div class="flex min-h-screen w-full flex-col items-center bg-gray-5 text-lg text-gray-900 lg:bg-gray-50">
    <div class="flex min-h-screen w-[min(1000px,95vw)] gap-4 bg-gray-5">
        <div class="h-100 ml-1 animate-[breathe_5s_infinite] border-l-4 border-l-orange md:ml-2 lg:ml-4"></div>
        <div class="mr-1 mt-4 flex flex-grow flex-col justify-between md:mr-2 lg:mr-4">
            <div class="mb-8 flex flex-col gap-2">
                <div class="hidden items-center gap-4 sm:flex">
                    <img src="/icon.png" width={64} height={64} alt="orange lambda icon" />
                    <div class="flex flex-col gap-2">
                        <h1
                            class="flex items-center gap-2 bg-[linear-gradient(to_bottom_right,#dd7113_20%,#71bb13_80%)] bg-clip-text py-1 text-[min(6vw,2rem)] text-transparent"
                        >
                            hyperneutrino <span class="opacity-60">&middot;</span> <span class="opacity-60">they/them</span> <span></span>
                            <img src="/canada.png" alt="Canadian Flag" class="h-6" />
                        </h1>
                        <h3>Web developer &middot; Discord bot developer</h3>
                    </div>
                </div>
                <div class="flex items-center gap-4 sm:hidden">
                    <div>
                        <img src="/icon.png" width={64} height={64} alt="orange lambda icon" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <h1 class="bg-[linear-gradient(to_bottom_right,#dd7113_20%,#71bb13_80%)] bg-clip-text py-1 text-[min(6vw,2rem)] text-transparent">
                            hyperneutrino
                        </h1>
                        <h3 class="flex items-center gap-2">they/them <img src="/canada.png" alt="Canadian Flag" class="h-4" /></h3>
                        <h3>Web developer &middot; Discord bot developer</h3>
                    </div>
                </div>
                <hr class="border border-orange" />
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
                <hr class="border border-orange" />
                <p class="py-2 text-center text-sm text-gray-500">&copy; 2026 hyperneutrino</p>
            </div>
        </div>
    </div>
</div>
