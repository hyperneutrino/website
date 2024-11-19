import { derived, writable } from "svelte/store";

export const animate = writable(true);
export const card = derived(
    animate,
    ($animate) =>
        `w-full p-2 rounded-md border-2 border-pink bg-gray-800 ${
            $animate ? "opacity-80 md:opacity-80 hover:opacity-100 md:scale-[99%] hover:scale-100 transition duration-500" : ""
        } flex flex-col gap-4`,
);
