<script lang="ts">
	import { addressLine, navLinks, site } from '$lib/config/site';
	import { resolve } from '$app/paths';
	import JktLogo from './JktLogo.svelte';
	import OwlLogo from './OwlLogo.svelte';

	const year = new Date().getFullYear();
	const hasSocials = Boolean(
		site.social.facebook || site.social.instagram || site.social.x || site.social.linkedin
	);
</script>

<footer class="starfield bg-night-950 text-night-200">
	<div class="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
		<div class="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
			<div>
				<a href={resolve('/')} class="text-cream-50">
					<OwlLogo size={40} />
				</a>
				<p class="mt-5 max-w-sm text-sm leading-relaxed text-night-300">
					{site.brand} by {site.legalName} — business software for Myanmar. The Owlvyra ERP suite runs
					the back office; the Owl Reward app rewards the customers who keep it busy.
				</p>
				<p
					class="mt-3 font-display text-xs font-semibold tracking-[0.22em] text-gold-300 uppercase"
				>
					Silent · Swift · Smart — see what others miss
				</p>
				<div class="mt-10 space-y-1.5 text-sm leading-relaxed text-night-300 not-italic">
					<div class="mb-3 flex items-center gap-3">
						<JktLogo height={28} />
						<span class="font-display font-semibold text-cream-50">{site.legalName}</span>
					</div>
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
				{#if hasSocials}
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
				{/if}
				<h2
					class="font-display text-sm font-semibold tracking-[0.18em] text-gold-300 uppercase {hasSocials
						? 'mt-8'
						: ''}"
				>
					Get the app
				</h2>
				<ul class="mt-4 space-y-2.5 text-sm">
					{#if site.stores.live}
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
					{:else}
						<li>
							<a href={resolve('/owl-reward')} class="transition-colors hover:text-cream-50"
								>Google Play — soon</a
							>
						</li>
						<li>
							<a href={resolve('/owl-reward')} class="transition-colors hover:text-cream-50"
								>App Store — soon</a
							>
						</li>
					{/if}
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
