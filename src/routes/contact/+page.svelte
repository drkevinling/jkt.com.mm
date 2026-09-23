<script lang="ts">
	import { site } from '$lib/config/site';
	import { addressLine } from '$lib/config/site';

	const socials = [
		{ label: 'Facebook', href: site.social.facebook },
		{ label: 'Instagram', href: site.social.instagram },
		{ label: 'X (Twitter)', href: site.social.x },
		{ label: 'LinkedIn', href: site.social.linkedin }
	].filter((s) => s.href !== null);
</script>

<svelte:head>
	<title>Contact {site.legalName} — {site.brand} &amp; {site.appName} Support</title>
	<meta
		name="description"
		content="Get in touch with J K T Company Limited — the company behind Owlvyra ERP and the Owl Reward app. Email, hotline and office address in Yangon, Myanmar."
	/>
	<link rel="canonical" href="{site.url}/contact" />
	<meta
		property="og:title"
		content="Contact {site.legalName} — {site.brand} & {site.appName} Support"
	/>
	<meta
		property="og:description"
		content="Email, hotline and office address for J K T Company Limited, the Yangon company behind Owlvyra ERP and the Owl Reward loyalty app."
	/>
	<meta property="og:url" content="{site.url}/contact" />
</svelte:head>

<!-- Intro -->
<section class="starfield bg-night-900 text-cream-50">
	<div class="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
		<p
			class="inline-flex items-center rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-gold-300 uppercase"
		>
			Contact
		</p>
		<h1
			class="mt-6 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl"
		>
			Questions about {site.brand}, {site.appName}, or working with us?
		</h1>
		<p class="mt-6 max-w-2xl text-lg leading-relaxed text-night-200">
			Whether you want Owlvyra ERP for your business, need help with points in the app, or have a
			partnership in mind — we read everything and reply as quickly as the owl flies.
		</p>
	</div>
</section>

<!-- Contact cards -->
<section class="bg-cream-50 dark:bg-night-950">
	<div class="mx-auto grid w-full max-w-6xl gap-6 px-5 py-20 sm:px-8 md:grid-cols-3">
		<a
			href="mailto:{site.email}"
			rel="external"
			class="group rounded-card border border-cream-200 bg-white/80 p-8 shadow-card transition-transform hover:-translate-y-1 dark:border-night-700/60 dark:bg-night-800/70"
		>
			<span
				class="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-600 dark:bg-gold-500/15 dark:text-gold-400"
			>
				<svg
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					aria-hidden="true"
				>
					<rect x="3" y="5" width="18" height="14" rx="3" />
					<path d="m4 7.5 8 6 8-6" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</span>
			<h2 class="font-display text-lg font-semibold text-night-900 dark:text-cream-50">Email us</h2>
			<p class="mt-2 text-sm text-ink-500 dark:text-night-300">
				General questions, support and partnerships.
			</p>
			<p
				class="mt-3 font-semibold break-all text-gold-700 group-hover:text-gold-600 dark:text-gold-300 dark:group-hover:text-gold-200"
			>
				{site.email}
			</p>
		</a>

		<a
			href="tel:{site.phone}"
			rel="external"
			class="group rounded-card border border-cream-200 bg-white/80 p-8 shadow-card transition-transform hover:-translate-y-1 dark:border-night-700/60 dark:bg-night-800/70"
		>
			<span
				class="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-600 dark:bg-gold-500/15 dark:text-gold-400"
			>
				<svg
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					aria-hidden="true"
				>
					<path
						d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</span>
			<h2 class="font-display text-lg font-semibold text-night-900 dark:text-cream-50">
				Call the hotline
			</h2>
			<p class="mt-2 text-sm text-ink-500 dark:text-night-300">
				Customer support, Monday to Saturday, 9:00–18:00 (MMT).
			</p>
			<p
				class="mt-3 font-semibold text-gold-700 group-hover:text-gold-600 dark:text-gold-300 dark:group-hover:text-gold-200"
			>
				{site.phoneDisplay}
			</p>
		</a>

		<div
			class="rounded-card border border-cream-200 bg-white/80 p-8 shadow-card dark:border-night-700/60 dark:bg-night-800/70"
		>
			<span
				class="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-600 dark:bg-gold-500/15 dark:text-gold-400"
			>
				<svg
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					aria-hidden="true"
				>
					<path
						d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<circle cx="12" cy="10" r="2.5" />
				</svg>
			</span>
			<h2 class="font-display text-lg font-semibold text-night-900 dark:text-cream-50">Visit us</h2>
			<p class="mt-2 text-sm text-ink-500 dark:text-night-300">Head office:</p>
			<p class="mt-1 text-sm leading-relaxed text-ink-700 dark:text-night-200">{addressLine}</p>
		</div>
	</div>
</section>

<!-- Socials -->
{#if socials.length}
	<section class="bg-cream-50 pb-20 dark:bg-night-950">
		<div class="mx-auto max-w-6xl px-5 text-center sm:px-8">
			<h2 class="font-display text-2xl font-bold text-night-900 dark:text-cream-50">
				Follow the owl
			</h2>
			<p class="mt-2 text-ink-500 dark:text-night-300">
				Campaign announcements and new partners land on our socials first.
			</p>
			<div class="mt-8 flex flex-wrap justify-center gap-4">
				{#each socials as social (social.label)}
					<a
						href={social.href}
						target="_blank"
						rel="external noopener noreferrer"
						class="rounded-full border border-night-900/15 bg-white/70 px-6 py-3 font-display text-sm font-semibold text-night-900 transition hover:border-gold-500 hover:text-gold-600 dark:border-cream-50/15 dark:bg-night-800/70 dark:text-cream-50 dark:hover:border-gold-400 dark:hover:text-gold-300"
					>
						{social.label}
					</a>
				{/each}
			</div>
		</div>
	</section>
{/if}
