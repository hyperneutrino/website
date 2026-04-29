import { redirect } from "@sveltejs/kit";

export function load() {
    redirect(307, "https://en.pronouns.page/@pat.5621.me");
}
