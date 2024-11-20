<script lang="ts">
    import { animate, emailAddress } from "$lib";
    import { derived } from "svelte/store";
    import "../app.css";

    const breathe = derived(animate, ($animate) => ($animate ? "breathe 5s infinite alternate" : "none"));

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

    let email: string = "";
</script>

<div class="flex min-h-screen w-full flex-col items-center bg-gray-900 text-lg text-white lg:bg-black">
    <div class="flex min-h-screen w-[min(800px,95vw)] gap-4 bg-gray-900">
        <div class="h-100 breathe ml-1 border-l-4 border-l-pink md:ml-2 lg:ml-4" style="animation: {$breathe};"></div>
        <div class="mr-1 mt-4 flex flex-grow flex-col justify-between md:mr-2 lg:mr-4">
            <div class="mb-20 flex flex-col gap-2">
                <div class="flex items-center gap-4">
                    <img src="/icon.png" width={64} height={64} alt="pink lambda icon" style="animation: {$breathe};" />
                    <h1 class="text-[min(6vw,2rem)]">hyperneutrino</h1>
                </div>
                <hr class="border border-pink" style="animation: {$breathe};" />
                <button class="rounded-md border-2 border-pink px-8 py-1 text-sm md:w-max" on:click={() => animate.update((x) => !x)}>
                    {$animate ? "disable" : "enable"} animations
                </button>
                <div class="flex flex-wrap items-center gap-2">
                    {#each links as [href, icon, _name]}
                        {@const name = _name ?? icon}
                        <a
                            {href}
                            target="_blank"
                            class="rounded-md border-2 p-2 {$animate ? 'duration-250 opacity-90 transition-opacity hover:opacity-100 md:opacity-75' : ''}"
                            title={name}
                        >
                            <img src="/{icon}.svg" width={24} height={24} alt="{name} icon" />
                        </a>
                    {/each}
                </div>
                <div class="h-8"></div>
                <h2 class="text-xl sm:text-2xl">hey, i'm <b>iris</b> a.k.a. hyperneutrino</h2>
                <p>web dev &middot; discord bot dev &middot; youtuber</p>
                <p class="text-gray-200">22 y/o &middot; she/her 🏳️‍⚧️ &middot; BCS 2025</p>
                {#if email}
                    <p>
                        <a href="mailto:{email}" class="text-teal">{email}</a>
                    </p>
                {:else}
                    <p>
                        <button class="text-gray-500" on:click={() => (email = emailAddress)}>[ click for business email ]</button>
                    </p>
                {/if}
                <div class="h-8"></div>
                <div class="flex flex-wrap items-center gap-4">
                    <a href="/" class="text-teal">home</a>
                    <span>&middot;</span>
                    <a href="/blog" class="text-teal">blog</a>
                </div>
                <div class="h-8"></div>
                <slot />
            </div>
            <div>
                <hr class="border border-pink" style="animation: {breathe};" />
                <p class="py-2 text-center text-sm text-gray-500">&copy; 2024 hyperneutrino</p>
            </div>
        </div>
    </div>
</div>
