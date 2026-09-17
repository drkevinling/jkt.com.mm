<script lang="ts">
	import { site } from '$lib/config/site';

	let { class: className = '' }: { class?: string } = $props();
</script>

<div class="flex flex-wrap items-center gap-4 {className}">
	<a
		href={site.stores.playStore}
		target="_blank"
		rel="external noopener noreferrer"
		class="flex items-center gap-3 rounded-xl bg-night-950 px-5 py-3 text-cream-50 ring-1 ring-white/15 transition hover:bg-night-800 hover:shadow-glow-gold"
	>
		<svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
			<path
				d="M3.6 1.8 13.7 12 3.6 22.2c-.37-.24-.6-.68-.6-1.24V3.04c0-.56.23-1 .6-1.24Z"
				fill="#34A853"
			/>
			<path d="M17.1 8.3 5.3 1.1l-.02.01 8.42 8.42 3.4-1.23Z" fill="#EA4335" />
			<path
				d="M17.1 15.7 13.7 14.5 5.28 22.92h.01l11.81-7.2c.48-.3.77-.77.77-1.31v-.01c0-.5-.28-.98-.77-1.31v.81Z"
				fill="#4285F4"
			/>
			<path d="m5.3 1.1 11.8 7.2-3.4 1.23L5.3 1.1Z" fill="#FBBC04" opacity=".9" />
		</svg>
		<span class="flex flex-col leading-tight">
			<span class="text-[0.65rem] tracking-wider uppercase opacity-80">Get it on</span>
			<span class="font-display text-base font-semibold">Google Play</span>
		</span>
	</a>

	<a
		href={site.stores.appStore}
		target="_blank"
		rel="external noopener noreferrer"
		class="flex items-center gap-3 rounded-xl bg-night-950 px-5 py-3 text-cream-50 ring-1 ring-white/15 transition hover:bg-night-800 hover:shadow-glow-gold"
	>
		<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path
				d="M16.36 12.78c.02 2.7 2.37 3.6 2.4 3.61-.02.06-.38 1.3-1.25 2.57-.75 1.1-1.53 2.19-2.76 2.21-1.21.02-1.6-.71-2.98-.71-1.38 0-1.81.69-2.96.73-1.19.04-2.09-1.18-2.85-2.27-1.65-2.39-2.91-6.76-1.22-9.71.84-1.47 2.35-2.4 3.99-2.42 1.17-.02 2.27.79 2.98.79.71 0 2.05-.98 3.46-.83.59.02 2.24.21 3.3 1.62-.09.05-1.97 1.15-1.95 3.41M14.3 4.66c.63-.76 1.05-1.82.94-2.87-.92.04-2.04.61-2.69 1.37-.59.67-1.1 1.75-.96 2.78 1.03.08 2.08-.52 2.71-1.28"
			/>
		</svg>
		<span class="flex flex-col leading-tight">
			<span class="text-[0.65rem] tracking-wider uppercase opacity-80">Download on the</span>
			<span class="font-display text-base font-semibold">App Store</span>
		</span>
	</a>
</div>
