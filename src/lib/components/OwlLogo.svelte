<script lang="ts">
	import { assets } from '$app/paths';
	import { site } from '$lib/config/site';

	let {
		size = 40,
		wordmark = true,
		class: className = ''
	}: { size?: number; wordmark?: boolean; class?: string } = $props();
</script>

<span class="inline-flex items-center gap-2.5 {className}">
	<img
		src="{assets}/owl-logo.png"
		alt="{site.brand} owl mark"
		width={size}
		height={size}
		class="shrink-0 object-contain"
		style="width: {size}px; height: {size}px"
	/>
	{#if wordmark}
		<span class="flex flex-col leading-none">
			<span class="font-display font-bold tracking-tight" style="font-size: {size * 0.36}px">
				{site.brand}
			</span>
			<span
				class="font-sans font-semibold text-ink-500 uppercase dark:text-night-300"
				style="font-size: {Math.max(8, size * 0.2)}px; letter-spacing: 0.28em; margin-top: {size *
					0.08}px"
			>
				by J K T
			</span>
		</span>
	{/if}
</span>
