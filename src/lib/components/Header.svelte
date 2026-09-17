<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { navLinks, site } from '$lib/config/site';
	import OwlLogo from './OwlLogo.svelte';

	let menuOpen = $state(false);

	const isActive = (href: string) =>
		href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
</script>

<header class="sticky top-0 z-50 border-b border-cream-200/70 bg-cream-50/85 backdrop-blur-md">
	<div class="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 px-5 sm:px-8">
		<a href={resolve('/')} class="shrink-0 text-night-900" aria-label="Owl Reward home">
			<OwlLogo size={38} />
		</a>

		<nav class="ml-auto hidden items-center gap-1 md:flex" aria-label="Main navigation">
			{#each navLinks as link (link.href)}
				<a
					href={resolve(link.href)}
					aria-current={isActive(link.href) ? 'page' : undefined}
					class="rounded-full px-4 py-2 text-sm font-medium transition-colors {isActive(link.href)
						? 'bg-night-900/90 text-cream-50'
						: 'text-ink-700 hover:bg-cream-200/70 hover:text-night-900'}"
				>
					{link.label}
				</a>
			{/each}
			<a
				href={resolve('/owl-reward#download')}
				class="ml-3 rounded-full bg-gold-500 px-5 py-2.5 font-display text-sm font-semibold text-night-950 shadow-card transition hover:bg-gold-400 hover:shadow-glow-gold"
			>
				Download
			</a>
		</nav>

		<button
			type="button"
			class="ml-auto inline-flex size-10 flex-col items-center justify-center gap-1.5 rounded-xl text-night-900 md:hidden"
			aria-expanded={menuOpen}
			aria-controls="mobile-nav"
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span
				class="h-0.5 w-5 rounded bg-current transition-transform {menuOpen
					? 'translate-y-1 rotate-45'
					: ''}"
			></span>
			<span
				class="h-0.5 w-5 rounded bg-current transition-transform {menuOpen
					? '-translate-y-1 -rotate-45'
					: ''}"
			></span>
		</button>
	</div>

	{#if menuOpen}
		<nav
			id="mobile-nav"
			class="border-t border-cream-200/70 bg-cream-50 px-5 pt-2 pb-5 md:hidden"
			aria-label="Mobile navigation"
		>
			{#each navLinks as link (link.href)}
				<a
					href={resolve(link.href)}
					onclick={() => (menuOpen = false)}
					aria-current={isActive(link.href) ? 'page' : undefined}
					class="block rounded-xl px-4 py-3 text-sm font-medium {isActive(link.href)
						? 'bg-night-900/90 text-cream-50'
						: 'text-ink-700'}"
				>
					{link.label}
				</a>
			{/each}
			<a
				href={resolve('/owl-reward#download')}
				onclick={() => (menuOpen = false)}
				class="mt-2 block rounded-xl bg-gold-500 px-4 py-3 text-center font-display text-sm font-semibold text-night-950"
			>
				Download {site.appName}
			</a>
		</nav>
	{/if}
</header>
