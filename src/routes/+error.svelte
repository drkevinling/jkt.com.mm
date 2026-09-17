<script lang="ts">
	import { resolve } from '$app/paths';
	import OwlLogo from '$lib/components/OwlLogo.svelte';
</script>

<svelte:head>
	<title>Page not found — Owl Reward</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section
	class="starfield flex min-h-[70dvh] flex-col items-center justify-center bg-night-900 px-5 py-24 text-center text-cream-50"
>
	<OwlLogo size={72} wordmark={false} class="text-cream-50" />
	<p class="mt-8 font-display text-6xl font-bold text-gold-400">404</p>
	<h1 class="mt-3 font-display text-2xl font-semibold">The owl looked everywhere…</h1>
	<p class="mt-2 max-w-md text-night-200">
		…but this page doesn't exist. It may have moved, or the link was mistyped.
	</p>
	<a
		href={resolve('/')}
		class="mt-8 rounded-full bg-gold-500 px-7 py-3 font-display font-semibold text-night-950 transition hover:bg-gold-400"
	>
		Back to home
	</a>
</section>
