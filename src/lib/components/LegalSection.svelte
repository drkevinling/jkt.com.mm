<script lang="ts">
	let { id, title, children }: { id: string; title: string; children: import('svelte').Snippet } =
		$props();
</script>

<section
	{id}
	class="scroll-mt-24 border-t border-cream-200 py-8 first:border-t-0 dark:border-night-700/60"
>
	<h2 class="font-display text-xl font-semibold text-night-900 sm:text-2xl dark:text-cream-50">
		{title}
	</h2>
	<div class="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-ink-700 dark:text-night-200">
		{@render children()}
	</div>
</section>
