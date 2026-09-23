<script lang="ts">
	import { assets } from '$app/paths';
	import { site } from '$lib/config/site';

	let { height = 28, class: className = '' }: { height?: number; class?: string } = $props();
</script>

<img
	src="{assets}/JKT-logo.png"
	alt="{site.legalName} logo"
	class="w-auto object-contain {className}"
	style="height: {height}px"
/>
