<script lang="ts">
    import { emailAddress } from "$lib";
    let email: string = "";

    const badges: [string, string, string][] = [
        ["dundee zhang", "https://dundeezhang.com", "https://dundeezhang.com/badges/dundeezhang.gif"],
        ["siracha", "https://csclub.uwaterloo.ca/~s23adhik/", "https://csclub.uwaterloo.ca/~s23adhik/images/badge.png"],
    ];
</script>

<h2 class="text-xl sm:text-2xl">hey, I'm <b>Iris</b> a.k.a. hyperneutrino</h2>
<p>web dev &middot; discord bot dev &middot; youtuber</p>
<p class="flex items-center gap-2 text-lg text-gray-200">
    22 &middot; she/they
    <img src="/canada.png" alt="canadian flag" class="h-4" />
    <img src="/trans.png" alt="trans flag" class="h-4" />
    <img src="/enby.png" alt="non-binary flag" class="h-4" />
    &middot; BCS 2025
</p>
{#if email}
    <p>
        <a href="mailto:{email}">{email}</a>
    </p>
{:else}
    <p>
        <button class="text-gray-500" on:click={() => (email = emailAddress)}>( click for business email )</button>
    </p>
{/if}
<div class="flex flex-col items-center gap-4">
    <div
        class="flex w-full flex-col gap-4 border-2 p-2 opacity-80 transition duration-500 hover:scale-100 hover:opacity-100 md:scale-[99%] md:opacity-80"
        style="border-image-slice: 1; border-image-source: linear-gradient(to bottom right, #c765ab 20%, #65abc7 80%)"
    >
        <p>
            hey! I'm <b>hyperneutrino</b>, a 22-y/o trans/non-binary computer science student. my hobbies include music, coding, and video games
        </p>
        <p>
            I started coding around grade 5 starting with miscellaneous three.js projects including a rubik's cube simulator. since then, I've worked with many
            languages, frameworks, and libraries
        </p>
        <p>
            I'm known for my performance in the
            <a href="https://adventofcode.com" target="_blank">advent of code</a>, an annual speed-coding challenge, with a placement of 11<sup>th</sup>, 5<sup
                >th</sup
            >, 10<sup>th</sup>, 11<sup>th</sup>, and 86<sup>th</sup> (thanks to AI cheaters) over the past five years
        </p>
    </div>
    <div
        class="flex w-full flex-col items-center gap-4 border-2 p-2 opacity-80 transition duration-500 hover:scale-100 hover:opacity-100 md:scale-[99%] md:opacity-80"
        style="border-image-slice: 1; border-image-source: linear-gradient(to bottom right, #c765ab 20%, #65abc7 80%)"
    >
        <p>cool people to check out</p>
        <div class="flex flex-wrap items-center gap-2">
            {#each badges as [name, url, badge]}
                <a class="btn" href={url} target="_blank">
                    <img src={badge} alt="{name}'s badge" style="w-[88px] h-[31px]" />
                </a>
            {/each}
        </div>
        <p>uwaterloo webring</p>
        <div class="flex items-center gap-4">
            <a class="btn" href="https://cs.uwatering.com/#hyperneutrino.xyz?nav=prev">←</a>
            <a class="btn" href="https://cs.uwatering.com/#hyperneutrino.xyz" target="_blank">
                <img src="https://cs.uwatering.com/icon.white.svg" alt="uwaterloo webring logo" style="width: 24px; height: auto; opacity: 0.8;" />
            </a>
            <a class="btn" href="https://cs.uwatering.com/#hyperneutrino.xyz?nav=next">→</a>
        </div>
    </div>
</div>
