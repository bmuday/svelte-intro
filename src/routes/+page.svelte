<script lang="ts">
    const subscribe = async (event: Event) => {
        const form = event.target as HTMLFormElement
        const data = new FormData(form)

        await fetch("/api/newsletter", {
            method: "POST",
            body: data
        })
    }
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>hello</h1>
<form on:submit|preventDefault={subscribe}>
    <input type="email" name="email" placeholder="Enter your email">
    <button type="submit">Suscribe</button>
</form>

<style>
</style>
