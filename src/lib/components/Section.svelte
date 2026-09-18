<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		id = '',
		eyebrow = '',
		title,
		description = '',
		variant = 'cream',
		children,
		class: className = ''
	}: {
		id?: string;
		eyebrow?: string;
		title: string;
		description?: string;
		variant?: 'cream' | 'night';
		children?: Snippet;
		class?: string;
	} = $props();

	const night = $derived(variant === 'night');
</script>

<section
	id={id || undefined}
	class="scroll-mt-16 {className} {night
		? 'starfield bg-night-900 text-cream-50'
		: 'bg-cream-50 text-ink-900 dark:bg-night-950 dark:text-cream-50'}"
>
	<div class="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
		{#if eyebrow || title || description}
			<header class="mx-auto mb-12 max-w-2xl text-center">
				{#if eyebrow}
					<p
						class="mb-3 font-display text-sm font-semibold tracking-[0.22em] uppercase {night
							? 'text-gold-300'
							: 'text-gold-700 dark:text-gold-300'}"
					>
						{eyebrow}
					</p>
				{/if}
				<h2
					class="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl {night
						? 'text-cream-50'
						: 'text-night-900 dark:text-cream-50'}"
				>
					{title}
				</h2>
				{#if description}
					<p
						class="mt-4 text-base leading-relaxed {night
							? 'text-night-200'
							: 'text-ink-500 dark:text-night-300'}"
					>
						{description}
					</p>
				{/if}
			</header>
		{/if}
		{#if children}{@render children()}{/if}
	</div>
</section>
