<svelte:head>
	<title>{title}</title>
</svelte:head>

<nav>
	<a class:active={pathname === '/'} href="/">Home</a>
	<a class:active={pathname === '/posts'} href="/posts">Posts</a>
	<a class:active={pathname === '/posts/1'} href="/posts/1">Post 1</a>
</nav>

<main>
{#await component}
	Loading...
{:then component}
	{#if component}
	<svelte:component 
		this={component.default || component} 
		{...params}
	/>
	{/if}
{/await}
</main>

<script>
	export let component = null, 
		querystring,
		pathname,
		params,
		title,
		state,
		hash;
</script>

<style>
	.active { color: red }
</style>