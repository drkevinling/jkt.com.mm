<script lang="ts">
	import { assets } from '$app/paths';

	let { class: className = '' }: { class?: string } = $props();
</script>

<picture class="block {className}">
	<source srcset="{assets}/happy-owl.webp" type="image/webp" />
	<img
		src="{assets}/happy_owl.png"
		alt=""
		aria-hidden="true"
		decoding="async"
		class="pointer-events-none block h-auto w-full select-none"
	/>
</picture>
