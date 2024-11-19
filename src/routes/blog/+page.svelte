<script lang="ts">
    import { card } from "$lib";
</script>

<p class="mb-4 text-3xl">my blog</p>
<div class="flex flex-col items-center gap-4">
    <div class={$card} style="border-color: red; background: repeating-linear-gradient(45deg, #f882, #f882 20px, #fff2 20px, #fff2 40px);">
        <p class="text-xl">
            <span class="mono text-lg text-gray-400">2024-11-18</span> under construction
        </p>
        <p>this section is under construction right now. please check back later &lt;3</p>
    </div>
    <!-- <div class={$card}>
        <p class="text-xl">
            <span class="mono text-lg text-gray-400">2024-11-20</span> international transgender day of remembrance
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac purus ornare, pulvinar nisi ut, suscipit lacus. Donec erat dui, iaculis in
            dui sed, ornare accumsan libero. Praesent sagittis gravida ultricies.
        </p>
        <p>
            <a href="/blog/2024-11-20/trans-day-of-remembrance" class="text-teal sliding-underline">read this article &rarr;</a>
        </p>
    </div> -->
</div>
