<script lang="ts">
	import { page } from "$app/stores";
	import type { LayoutData } from "./$types";

    export let data: LayoutData
</script>

<svelte:head>
    <title>{$page.data.post?.title ?? "Posts"}</title>
</svelte:head>

<div class="layout">
    <aside>
        <h4>Showing {$page.data.posts.length} posts</h4>
        <nav>
            <ul>
                {#each data.posts as {id, title}}
                    <li><a href={`/posts/${id}`}>{title}</a></li>
                {/each}
            </ul>
        </nav>
    </aside>
    <main>
        <slot/>
    </main>
</div>

<style>
    .layout{
        display: grid;
        grid-template-columns: 200px minmax(auto, 60ch);
        gap: 4rem;
        margin-top: 2rem;
    }
</style>