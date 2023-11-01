<script lang="ts">
    // import type {Post} from "$lib/types"
	import type { PageData } from "./$types";

    export let data: PageData
    $: ({posts} = data)

    // const getPosts = async() => {
    //     const res = await fetch("/api/posts")
    //     const posts: Post[] = await res.json()
    //     return posts
    // }
</script>

<h1>Posts</h1>

<p>Showing {posts.length} posts.</p>

    <ul>
        {#each posts as {id, title}}
            <li><a href={`/posts/${id}`}>{title}</a></li>
        {/each}
    </ul>

<!-- {#await getPosts()}
    <p>Loading...</p>
{:then posts} 
    <pre>
        {JSON.stringify(posts, null, 2)}
    </pre>

    {:catch error}
        <p>{error.message}</p>
{/await} -->