<script lang="ts">
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource-variable/inter';
	import './layout.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { site } from '$lib/config/site';
	import { assets } from '$app/paths';
	import { isDark } from '$lib/theme.svelte';

	let { children } = $props();

	const themeColor = $derived(isDark() ? '#0b1026' : '#faf7ef');
</script>

<svelte:head>
	<link rel="icon" href="{assets}/favicon.svg" type="image/svg+xml" />
	<link rel="icon" href="{assets}/favicon.ico" sizes="48x48" />
	<link rel="apple-touch-icon" href="{assets}/apple-touch-icon.png" />
	<meta name="theme-color" content={themeColor} />
	<meta property="og:site_name" content={site.legalName} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="{site.url}/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-gold-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-night-950"
>
	Skip to content
</a>

<div
	class="flex min-h-dvh flex-col bg-cream-50 font-sans text-ink-900 antialiased dark:bg-night-950 dark:text-cream-50"
>
	<Header />
	<main id="main" class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
