<script lang="ts">
    import { emailAddress } from "$lib";

    let email: string = "";
</script>

<h1 class="text-3xl">Resume</h1>
<p>
    Alex Liao &middot; {#if email}<a href="mailto:{email}">{email}</a>{:else}<button class="text-gray-500" on:click={() => (email = emailAddress)}>
            (Click for business email)
        </button>{/if}
</p>
<h2 class="text-2xl">About</h2>
<p>
    Detail-oriented problem-solver with over 13 years of designing and developing software from middle school passion projects to scalable services. Proficient
    in full-stack web development, several database systems, developer tools, and VPS hosting end-to-end. Experienced in coordinating and collaborating with
    cross-functional teams.
</p>
<h2 class="text-2xl">Experience</h2>
<p><b>Backend Engineer &mdash; Carrier Integrations</b> &middot; Canopy Connect &middot; September 2025 &ndash; Present</p>
<ul class="list-disc pl-4">
    <li>Designing secure, SOC 2&ndash;compliant integrations to intake and process sensitive customer information.</li>
    <li>
        Built a now widely used debugging/issue tracking system to allow developers to better access logs, identify error rates, and analyze usage statistics.
    </li>
    <li>Coordinated a project to process customer-uploaded documents and developed a test corpus and framework to iterate based on real accuracy metrics.</li>
</ul>
<p><b>Backend Software Engineer</b> (Co-op internship) &middot; Faire &middot; May 2024 &ndash; December 2024</p>
<ul class="list-disc pl-4">
    <li>Improved retailer experience with guideposts to assist the decision-making flow in browsing and checkout.</li>
    <li>Scoped a project independently and co-ordinated an engineering team for a complex project.</li>
    <li>Demonstrated flexibility by completing frontend tasks to support the team's needs and availability.</li>
</ul>
<p><b>Solo Developer</b> (Personal Project) &middot; Daedalus &middot; December 2020 &ndash; Present</p>
<ul class="list-disc pl-4">
    <li>Maintaining a Discord bot with moderation tools, server automation, and other utilities for over 750,000 users across over 1,800 servers.</li>
    <li>
        Designing robust but intuitive features supporting customizability to make a wide variety of use cases accessible to server administrators of all
        experience levels.
    </li>
    <li>Operating Daedalus' deployment via a VPS including a MySQL database, backups, analytics and metrics, etc.</li>
</ul>
<p><b>Other Previous Work Experience</b></p>
<ul class="list-disc pl-4">
    <li><b>Frontend Software Engineer</b> (Co-op) &middot; Faire</li>
    <li><b>Full-stack Software Developer</b> (Co-op) &middot; OpenText Corporation</li>
    <li><b>Computer Programming Instructor</b> (Part-time) &middot; Grand River Chinese School</li>
</ul>
<h2 class="text-2xl">Education</h2>
<p><b>Bachelor's of Computer Science</b> (Co-op) &middot; University of Waterloo &middot; September 2020 &ndash; April 2025</p>
<ul class="list-disc pl-4">
    <li>Cumulative 89% GPA, 90% Major and Faculty Average</li>
    <li>Oversaw day-to-day operations of the Computer Science Club on the executive committee for four terms (16 months).</li>
    <li>As president of the CS Club for one term (4 months), maintained relationship with faculty staff and student body, pushed policy changes to improve member safety and engagement, and ensured longstanding committee feedback was addressed.</li>
</ul>
<h2 class="text-2xl">Skills</h2>
<ul class="list-disc pl-4">
    <li><b>Web development:</b> TypeScript/JS (Node.js, Bun, Browser), React, Svelte, Next.js, Astro, HTML, CSS, Tailwind</li>
    <li><b>Proficient languages:</b> Java, C/C++, Python</li>
    <li><b>Databases:</b> MySQL, PostgreSQL, MongoDB</li>
    <li><b>Miscellaneous:</b> Discord.js, Docker</li>
</ul>

<style lang="css">
    h1,
    h2 {
        width: 100%;
        border-bottom: 1px solid black;
    }
</style>
