<script lang="ts">
    import { emailAddress } from "$lib";
    let email: string = "";
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
        class="flex w-full flex-col gap-4 border-2 p-2 opacity-80 transition duration-500 hover:scale-100 hover:opacity-100 md:scale-[99%] md:opacity-80"
        style="border-image-slice: 1; border-image-source: linear-gradient(to bottom right, #c765ab 20%, #65abc7 80%)"
    >
        <p>here are some of the projects I'm the most proud of! you can find an (incomplete) list of stuff I've made on my github</p>
        <span class="flex flex-wrap items-center gap-4">
            <img src="/daedalus.png" width={40} height={40} alt="daedalus icon" class="rounded-full" />
            <a href="https://daedalusbot.xyz" target="_blank"><b>daedalus</b></a>
        </span>
        <p>
            <b>daedalus</b> is a customizable general-purpose discord bot with a wide variety of features
        </p>
        <span class="flex flex-wrap items-center gap-4">
            <img src="/aoc.svg" width={40} height={40} alt="aoc icon" class="rounded-full" />
            <a href="https://adventofcode.com" target="_blank"><b>advent of code</b></a>
            <div class="text-gray">/</div>
            <a href="https://youtube.com/playlist?list=PLnNm9syGLD3z5MSpszQaN5kinAELELnLP" target="_blank">2024 playlist</a>
            <div class="text-gray">/</div>
            <a href="https://youtube.com/playlist?list=PLnNm9syGLD3zLoIGWeHfnEekEKxPKLivw" target="_blank">2023 playlist</a>
        </span>
        <p>
            I've been competing in the <b>advent of code</b> for many years with consistently high leaderboard rankings. I think the advent of code is a great opportunity
            to develop and refine your coding skills no matter your level
        </p>
        <p>
            I've been creating solution videos on my
            <a href="https://youtube.com/@hyper-neutrino" target="_blank">youtube channel</a>
            which I hope can inspire others to challenge themselves and develop their skills
        </p>
        <span class="flex flex-wrap items-center gap-4">
            <img src="/tcn.png" width={40} height={40} alt="tcn icon" class="rounded-full" />
            <a href="https://teyvatcollective.network/" target="_blank"><b>tcn</b></a>
            <div class="text-gray">/</div>
            <a href="https://github.com/teyvat-collective-network" target="_blank">github</a>
        </span>
        <p>
            the <b>teyvat collective network</b> is a network of genshin impact discord servers. during my time as admin, I organized much of the internal operations,
            community management, and public relations and owned the technical infrastructure including two discord bots, a website, and an API
        </p>
        <span class="flex flex-wrap items-center gap-4">
            <img src="/proton.png" width={40} height={40} alt="proton icon" class="rounded-full" />
            <a href="https://tio.run/#proton" target="_blank"><b>proton</b></a>
            <div class="text-gray">/</div>
            <a href="https://github.com/hyperneutrino/proton" target="_blank">github</a>
        </span>
        <p>
            <b>proton</b> is a multi-paradigm programming language inspired by python's simplicity with C-like syntax and functional features. it's not a production-ready
            language and not too stable, but I made this in high school well before I learned parser and compiler design and programming language theory in university
        </p>
    </div>
    <div
        class="flex w-full flex-col gap-4 border-2 p-2 opacity-80 transition duration-500 hover:scale-100 hover:opacity-100 md:scale-[99%] md:opacity-80"
        style="border-image-slice: 1; border-image-source: linear-gradient(to bottom right, #c765ab 20%, #65abc7 80%)"
    >
        <p>cool people to check out</p>
        <div class="flex flex-wrap items-center gap-2">
            <a href="https://dundeezhang.com" target="_blank">
                <img src="https://dundeezhang.com/badges/dundeezhang.gif" alt="dundee zhang's badge" style="w-[88px] h-[31px]" />
            </a>
            <a href="https://csclub.uwaterloo.ca/~s23adhik/" target="_blank">
                <img src="https://csclub.uwaterloo.ca/~s23adhik/images/badge.png" alt="sourojeet adhikari's badge" style="w-[88px] h-[31px]" />
            </a>
        </div>
        <p>uwaterloo webring</p>
        <div class="flex items-center gap-4">
            <a href="https://cs.uwatering.com/#hyperneutrino.xyz?nav=prev">←</a>
            <a href="https://cs.uwatering.com/#hyperneutrino.xyz" target="_blank">
                <img src="https://cs.uwatering.com/icon.white.svg" alt="uwaterloo webring logo" style="width: 24px; height: auto; opacity: 0.8;" />
            </a>
            <a href="https://cs.uwatering.com/#hyperneutrino.xyz?nav=next">→</a>
        </div>
    </div>
</div>
