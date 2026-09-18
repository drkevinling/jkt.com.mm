<script lang="ts">
	let {
		size = 40,
		wordmark = true,
		class: className = ''
	}: { size?: number; wordmark?: boolean; class?: string } = $props();
</script>

<span class="inline-flex items-center gap-2.5 {className}">
	<svg width={size} height={size} viewBox="0 0 96 96" role="img" aria-label="Owl Reward owl mark">
		<!-- ear tufts -->
		<path d="M17 24 L27 5 L34 25 Z" fill="currentColor" />
		<path d="M79 24 L69 5 L62 25 Z" fill="currentColor" />
		<!-- body -->
		<path
			d="M48 10 C27 10 13 25 13 46 C13 69 28 86 48 86 C68 86 83 69 83 46 C83 25 69 10 48 10 Z"
			fill="currentColor"
		/>
		<!-- wings -->
		<path d="M21 44 C15 52 15 64 21 72 C24 66 25 52 24 45 Z" fill="rgb(255 255 255 / 0.14)" />
		<path d="M75 44 C81 52 81 64 75 72 C72 66 71 52 72 45 Z" fill="rgb(255 255 255 / 0.14)" />
		<!-- belly -->
		<path
			d="M48 62 C40 62 34 69 33 77 C37 82 42 84 48 84 C54 84 59 82 63 77 C62 69 56 62 48 62 Z"
			fill="rgb(255 255 255 / 0.1)"
		/>
		<!-- eyes -->
		<circle cx="34" cy="44" r="13" fill="#ffffff" />
		<circle cx="62" cy="44" r="13" fill="#ffffff" />
		<circle cx="34" cy="44" r="7" class="fill-gold-500" />
		<circle cx="62" cy="44" r="7" class="fill-gold-500" />
		<circle cx="34" cy="44" r="3" fill="#121a3c" />
		<circle cx="62" cy="44" r="3" fill="#121a3c" />
		<circle cx="31.5" cy="41" r="1.4" fill="#ffffff" />
		<circle cx="59.5" cy="41" r="1.4" fill="#ffffff" />
		<!-- beak -->
		<path d="M48 51 L54.5 58.5 L48 66 L41.5 58.5 Z" class="fill-gold-400" />
	</svg>
	{#if wordmark}
		<span class="flex flex-col leading-none">
			<span class="font-display font-bold tracking-tight" style="font-size: {size * 0.34}px">
				Owl&nbsp;Reward
			</span>
			<span
				class="font-sans font-medium text-ink-500 uppercase dark:text-night-300"
				style="font-size: {size * 0.17}px; letter-spacing: 0.22em"
			>
				by JKT
			</span>
		</span>
	{/if}
</span>
