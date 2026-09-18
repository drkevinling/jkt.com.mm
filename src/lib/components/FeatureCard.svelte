<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		icon,
		title,
		description,
		variant = 'light',
		extra,
		class: className = ''
	}: {
		icon: Snippet;
		title: string;
		description: string;
		variant?: 'light' | 'dark';
		extra?: Snippet;
		class?: string;
	} = $props();
</script>

<article
	class="group rounded-card p-6 transition-transform duration-300 hover:-translate-y-1 {variant ===
	'dark'
		? 'border border-night-700/60 bg-night-800/70 shadow-card'
		: 'border border-cream-200 bg-white/80 shadow-card dark:border-night-700/60 dark:bg-night-800/70'} {className}"
>
	<div
		class="mb-4 inline-flex size-12 items-center justify-center rounded-2xl {variant === 'dark'
			? 'bg-gold-500/15 text-gold-400'
			: 'bg-gold-100 text-gold-600 dark:bg-gold-500/15 dark:text-gold-400'}"
	>
		{@render icon()}
	</div>
	<h3
		class="font-display text-lg font-semibold {variant === 'dark'
			? 'text-cream-50'
			: 'text-night-900 dark:text-cream-50'}"
	>
		{title}
	</h3>
	<p
		class="mt-2 text-sm leading-relaxed {variant === 'dark'
			? 'text-night-200'
			: 'text-ink-500 dark:text-night-300'}"
	>
		{description}
	</p>
	{#if extra}{@render extra()}{/if}
</article>
