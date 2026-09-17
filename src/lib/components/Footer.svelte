<script lang="ts">
	import { addressLine, navLinks, site } from '$lib/config/site';
	import { resolve } from '$app/paths';
	import OwlLogo from './OwlLogo.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="starfield bg-night-950 text-night-200">
	<div class="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
		<div class="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
			<div>
				<a href={resolve('/')} class="text-cream-50" aria-label="Owl Reward home">
					<OwlLogo size={40} />
				</a>
				<p class="mt-5 max-w-sm text-sm leading-relaxed text-night-300">
					The loyalty companion that never sleeps. Collect points, stamps and rewards every day at
					your favourite shops across Myanmar.
				</p>
				<div class="mt-6 space-y-1.5 text-sm not-italic">
					<p class="font-display font-semibold text-cream-50">{site.legalName}</p>
					<p>{addressLine}</p>
					<p>
						<a href="tel:{site.phone}" class="transition-colors hover:text-gold-300" rel="external"
							>{site.phoneDisplay}</a
						>
					</p>
					<p>
						<a href="mailto:{site.email}" class="transition-colors hover:text-gold-300"
							>{site.email}</a
						>
					</p>
				</div>
			</div>

			<nav aria-label="Footer navigation">
				<h2 class="font-display text-sm font-semibold tracking-[0.18em] text-gold-300 uppercase">
					Explore
				</h2>
				<ul class="mt-4 space-y-2.5 text-sm">
					{#each navLinks as link (link.href)}
						<li>
							<a href={resolve(link.href)} class="transition-colors hover:text-cream-50"
								>{link.label}</a
							>
						</li>
					{/each}
					<li>
						<a href={resolve('/privacy-policy')} class="transition-colors hover:text-cream-50">
							Privacy Policy
						</a>
					</li>
					<li>
						<a href={resolve('/terms')} class="transition-colors hover:text-cream-50">
							Terms &amp; Conditions
						</a>
					</li>
				</ul>
			</nav>

			<div>
				<h2 class="font-display text-sm font-semibold tracking-[0.18em] text-gold-300 uppercase">
					Follow us
				</h2>
				<ul class="mt-4 space-y-2.5 text-sm">
					{#if site.social.facebook}
						<li>
							<a
								href={site.social.facebook}
								target="_blank"
								rel="external noopener noreferrer"
								class="transition-colors hover:text-cream-50">Facebook</a
							>
						</li>
					{/if}
					{#if site.social.instagram}
						<li>
							<a
								href={site.social.instagram}
								target="_blank"
								rel="external noopener noreferrer"
								class="transition-colors hover:text-cream-50">Instagram</a
							>
						</li>
					{/if}
					{#if site.social.x}
						<li>
							<a
								href={site.social.x}
								target="_blank"
								rel="external noopener noreferrer"
								class="transition-colors hover:text-cream-50">X (Twitter)</a
							>
						</li>
					{/if}
					{#if site.social.linkedin}
						<li>
							<a
								href={site.social.linkedin}
								target="_blank"
								rel="external noopener noreferrer"
								class="transition-colors hover:text-cream-50">LinkedIn</a
							>
						</li>
					{/if}
				</ul>
				<h2
					class="mt-8 font-display text-sm font-semibold tracking-[0.18em] text-gold-300 uppercase"
				>
					Get the app
				</h2>
				<ul class="mt-4 space-y-2.5 text-sm">
					<li>
						<a
							href={site.stores.playStore}
							target="_blank"
							rel="external noopener noreferrer"
							class="transition-colors hover:text-cream-50">Google Play</a
						>
					</li>
					<li>
						<a
							href={site.stores.appStore}
							target="_blank"
							rel="external noopener noreferrer"
							class="transition-colors hover:text-cream-50">App Store</a
						>
					</li>
				</ul>
			</div>
		</div>

		<div
			class="mt-14 flex flex-col items-center justify-between gap-3 border-t border-night-800 pt-6 text-xs text-night-400 sm:flex-row"
		>
			<p>&copy; {year} {site.legalName}. All rights reserved.</p>
			<p>
				<a href={resolve('/privacy-policy')} class="transition-colors hover:text-cream-50"
					>Privacy</a
				>
				<span class="mx-2" aria-hidden="true">·</span>
				<a href={resolve('/terms')} class="transition-colors hover:text-cream-50">Terms</a>
			</p>
		</div>
	</div>
</footer>
