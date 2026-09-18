<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { navLinks, site } from '$lib/config/site';
	import { isDark, toggle } from '$lib/theme.svelte';
	import OwlLogo from './OwlLogo.svelte';

	let menuOpen = $state(false);

	const isActive = (href: string) =>
		href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
</script>

<header
	class="sticky top-0 z-50 border-b border-cream-200/70 bg-cream-50/85 backdrop-blur-md dark:border-night-800 dark:bg-night-950/85"
>
	<div class="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 px-5 sm:px-8">
		<a href={resolve('/')} class="shrink-0 text-night-900 dark:text-cream-50">
			<OwlLogo size={38} />
		</a>

		<nav class="ml-auto hidden items-center gap-1 md:flex" aria-label="Main navigation">
			{#each navLinks as link (link.href)}
				<a
					href={resolve(link.href)}
					aria-current={isActive(link.href) ? 'page' : undefined}
					class="rounded-full px-4 py-2 text-sm font-medium transition-colors {isActive(link.href)
						? 'bg-night-900/90 text-cream-50 dark:bg-night-800'
						: 'text-ink-700 hover:bg-cream-200/70 hover:text-night-900 dark:text-night-200 dark:hover:bg-night-800/70 dark:hover:text-cream-50'}"
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
			<button
				type="button"
				onclick={toggle}
				aria-label={isDark() ? 'Switch to light mode' : 'Switch to dark mode'}
				class="ml-3 inline-flex size-10 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-cream-200/70 hover:text-night-900 dark:text-night-200 dark:hover:bg-night-800 dark:hover:text-cream-50"
			>
				<svg
					class="dark:hidden"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					aria-hidden="true"
				>
					<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" stroke-linecap="round" />
				</svg>
				<svg
					class="hidden dark:block"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					aria-hidden="true"
				>
					<circle cx="12" cy="12" r="4" />
					<path
						d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
						stroke-linecap="round"
					/>
				</svg>
			</button>
		</nav>

		<button
			type="button"
			class="ml-auto inline-flex size-10 flex-col items-center justify-center gap-1.5 rounded-xl text-night-900 md:hidden dark:text-cream-50"
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
			class="border-t border-cream-200/70 bg-cream-50 px-5 pt-2 pb-5 md:hidden dark:border-night-800 dark:bg-night-950"
			aria-label="Mobile navigation"
		>
			{#each navLinks as link (link.href)}
				<a
					href={resolve(link.href)}
					onclick={() => (menuOpen = false)}
					aria-current={isActive(link.href) ? 'page' : undefined}
					class="block rounded-xl px-4 py-3 text-sm font-medium {isActive(link.href)
						? 'bg-night-900/90 text-cream-50 dark:bg-night-800'
						: 'text-ink-700 dark:text-night-200'}"
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
			<button
				type="button"
				onclick={toggle}
				aria-label={isDark() ? 'Switch to light mode' : 'Switch to dark mode'}
				class="mt-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-ink-700 dark:text-night-200"
			>
				<svg
					class="dark:hidden"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					aria-hidden="true"
				>
					<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" stroke-linecap="round" />
				</svg>
				<svg
					class="hidden dark:block"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					aria-hidden="true"
				>
					<circle cx="12" cy="12" r="4" />
					<path
						d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
						stroke-linecap="round"
					/>
				</svg>
				<span>{isDark() ? 'Light mode' : 'Dark mode'}</span>
			</button>
		</nav>
	{/if}
</header>
