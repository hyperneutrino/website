import { error, redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types.js";

const slugs: Record<string, string> = {
    "2024-11-20": "trans-day-of-remembrance",
};

export const load: PageLoad = async (request) => {
    const slug = slugs[request.params.date!];
    if (slug === request.params.slug) return;
    if (slug) throw redirect(308, `/blog/${request.params.date}/${slug}`);
    throw error(404);
};
