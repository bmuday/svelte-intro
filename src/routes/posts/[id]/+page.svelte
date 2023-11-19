<script lang="ts">
    // import type {Post} from "$lib/types"
	import type { PageData } from "./$types";

    export let data: PageData
    $: ({post} = data)

    // const getPosts = async() => {
    //     const res = await fetch("/api/posts")
    //     const posts: Post[] = await res.json()
    //     return posts
    // }
</script>

<h1>Post {post.id}</h1>
<i>{post.created_at}</i>

<hr>

<div class="content">
    {@html post.body}
</div>

<div class="posts">
    <h3>Posts</h3>

    <ul></ul>
</div>