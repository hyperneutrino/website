<script lang="ts">
    import { emailAddress } from "$lib";
    let email: string = "";

    const badges: [string, string, string][] = [
        ["hexadecimaldinosaur", "https://hexadecimaldinosaur.com", "https://hexadecimaldinosaur.com/static/button.gif"],
        ["dundee zhang", "https://dundeezhang.com", "https://dundeezhang.com/badges/dundeezhang.gif"],
        ["siracha", "https://csclub.uwaterloo.ca/~s23adhik/", "https://csclub.uwaterloo.ca/~s23adhik/images/badge.png"],
    ];

    const now = new Date();
    const age = now.getFullYear() - 2002 - (now.getMonth() < 7 || (now.getMonth() === 7 && now.getDate() < 8) ? 1 : 0);
</script>

<h2 class="text-3xl">Hey, I'm hyperneutrino!</h2>
<p>Web Developer &middot; Discord Bot Developer &middot; YouTube Creator</p>
<p class="flex flex-wrap items-center gap-2 text-lg text-gray-200">
    <span class="gradient">it/they/she</span>
    <img src="/canada.png" alt="Canadian Flag" class="h-4" />
    <img src="/trans.png" alt="Transgender Flag" class="h-4" />
    <img src="/enby.png" alt="Nonbinary Flag" class="h-4" />
</p>
{#if email}
    <p>
        <a href="mailto:{email}">{email}</a>
    </p>
{:else}
    <p>
        <button class="text-gray-500" on:click={() => (email = emailAddress)}>(Click for business email)</button>
    </p>
{/if}
<div class="flex flex-col items-center gap-4">
    <div
        class="flex w-full flex-col gap-4 border-2 p-4 opacity-80 transition duration-500 hover:scale-100 hover:opacity-100 md:scale-[99%] md:opacity-80"
        style="border-image-slice: 1; border-image-source: linear-gradient(to bottom right, #c765ab 20%, #65abc7 80%)"
    >
        <h3 class="text-2xl">About Me</h3>
        <p>
            Hey, I'm <b>hyperneutrino</b>. I like music, coding, and video games :&rbrack; I completed my Bachelor's in Computer Science at UWaterloo in 2025.
        </p>
        <p>I'm {age}-y/o, transfem/nonbinary, poly, and bisexual.</p>
    </div>
    <div
        class="flex w-full flex-col gap-4 border-2 p-4 opacity-80 transition duration-500 hover:scale-100 hover:opacity-100 md:scale-[99%] md:opacity-80"
        style="border-image-slice: 1; border-image-source: linear-gradient(to bottom right, #c765ab 20%, #65abc7 80%)"
    >
        <h3 class="text-2xl">Badges</h3>
        <p>Here's my badge:</p>
        <div>
            <img src="/badge.png" alt="My own badge" style="w-[88px] h-[31px]" />
        </div>
        <p>Here are some cool people to check out :&rbrack;</p>
        <div class="flex flex-wrap items-center gap-2">
            {#each badges as [name, url, badge]}
                <a class="btn" href={url} target="_blank">
                    <img src={badge} alt="{name}'s badge" style="w-[88px] h-[31px]" />
                </a>
            {/each}
        </div>
    </div>
    <div
        class="flex w-full flex-col gap-4 border-2 p-4 opacity-80 transition duration-500 hover:scale-100 hover:opacity-100 md:scale-[99%] md:opacity-80"
        style="border-image-slice: 1; border-image-source: linear-gradient(to bottom right, #c765ab 20%, #65abc7 80%)"
    >
        <h3 class="text-2xl">Webrings</h3>
        <p>UWaterloo Webring</p>
        <div class="flex items-center gap-4">
            <a class="btn" href="https://cs.uwatering.com/#hyperneutrino.xyz?nav=prev">←</a>
            <a class="btn" href="https://cs.uwatering.com/#hyperneutrino.xyz" target="_blank">
                <img src="https://cs.uwatering.com/icon.white.svg" alt="uwaterloo webring logo" style="width: 24px; height: auto; opacity: 0.8;" />
            </a>
            <a class="btn" href="https://cs.uwatering.com/#hyperneutrino.xyz?nav=next">→</a>
        </div>
    </div>
</div>
