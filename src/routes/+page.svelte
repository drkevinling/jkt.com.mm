<script lang="ts">
	import { resolve } from '$app/paths';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import PhoneMockup from '$lib/components/PhoneMockup.svelte';
	import Section from '$lib/components/Section.svelte';
	import StoreBadges from '$lib/components/StoreBadges.svelte';
	import OwlLogo from '$lib/components/OwlLogo.svelte';
	import { addressLine, site } from '$lib/config/site';

	const categories = [
		'Food & Beverage',
		'Fashion',
		'Health & Beauty',
		'Lifestyle',
		'Healthcare',
		'Travel & Leisure'
	];

	const steps = [
		{
			title: 'Download & sign up',
			description:
				'Install Owl Reward, create your account with just a phone number, and start collecting in under a minute.'
		},
		{
			title: 'Shop & scan',
			description:
				'Pay at any partner shop and show your personal QR code — points and stamps land in your wallet instantly.'
		},
		{
			title: 'Redeem rewards',
			description:
				'Turn points into vouchers, free items and member-only deals. The more you collect, the higher you climb.'
		}
	];

	const features = [
		{
			title: 'Owl Points',
			description:
				'Every qualifying purchase adds points to your balance. Watch your tier glow up from Fledgling to Gold Owl and unlock better rates.'
		},
		{
			title: 'Stamp cards',
			description:
				'Beloved punch cards, reborn. Collect digital stamps at your regular spots and never lose a free coffee to a lost card again.'
		},
		{
			title: 'Campaigns & vouchers',
			description:
				'Seasonal campaigns, double-point weekends and member vouchers from partner brands — all in one feed, all redeemable in a tap.'
		}
	];
</script>

<svelte:head>
	<title>Owl Reward — Loyalty &amp; Rewards App by JKT Co.,Ltd</title>
	<meta
		name="description"
		content="Owl Reward by JKT Co.,Ltd is Myanmar's loyalty app. Collect points, stamps and vouchers at your favourite shops in Yangon and beyond."
	/>
	<link rel="canonical" href={site.url} />
	<meta property="og:title" content="Owl Reward — Loyalty & Rewards App by JKT Co.,Ltd" />
	<meta
		property="og:description"
		content="Collect points, stamps and vouchers at your favourite shops across Myanmar. Loyalty that never sleeps."
	/>
	<meta property="og:url" content={site.url} />
</svelte:head>

<!-- Hero -->
<section class="starfield relative overflow-hidden bg-night-900 text-cream-50">
	<div
		class="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-gold-500/15 blur-3xl"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-night-600/30 blur-3xl"
		aria-hidden="true"
	></div>

	<div
		class="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28"
	>
		<div>
			<p
				class="animate-owl-twinkle inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-gold-300 uppercase"
			>
				Loyalty that never sleeps
			</p>
			<h1
				class="mt-6 font-display text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
			>
				Every purchase earns you <span class="text-gold-400">more than a receipt.</span>
			</h1>
			<p class="mt-6 max-w-lg text-lg leading-relaxed text-night-200">
				Owl Reward turns everyday shopping into points, stamps and real rewards at partner shops
				across Myanmar — one app in your pocket instead of a drawer full of punch cards.
			</p>
			<div class="mt-8 flex flex-wrap items-center gap-4">
				<a
					href={resolve('/owl-reward#download')}
					class="rounded-full bg-gold-500 px-7 py-3.5 font-display font-semibold text-night-950 shadow-glow-gold transition hover:bg-gold-400"
				>
					Get the app
				</a>
				<a
					href="#how-it-works"
					class="rounded-full border border-night-600 px-7 py-3.5 font-display font-semibold text-cream-50 transition hover:border-gold-400 hover:text-gold-300"
				>
					How it works
				</a>
			</div>
			<div class="mt-10">
				<StoreBadges />
			</div>
		</div>

		<div class="flex justify-center lg:justify-end">
			<PhoneMockup />
		</div>
	</div>

	<div class="relative border-t border-night-800/80 bg-night-950/60">
		<div
			class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-6 sm:px-8"
		>
			<span class="text-xs font-semibold tracking-[0.2em] text-night-400 uppercase">Earn at</span>
			{#each categories as category (category)}
				<span class="text-sm font-medium text-night-200">{category}</span>
			{/each}
		</div>
	</div>
</section>

<!-- How it works -->
<Section
	id="how-it-works"
	eyebrow="How it works"
	title="From counter to reward in three steps"
	description="No cards to carry, no paperwork to sign. Your phone is the loyalty programme."
>
	<div class="grid gap-6 md:grid-cols-3">
		{#each steps as step, i (step.title)}
			<article
				class="relative rounded-card border border-cream-200 bg-white/80 p-6 shadow-card dark:border-night-700/60 dark:bg-night-800/70"
			>
				<span
					class="absolute top-5 right-5 font-display text-5xl font-bold text-night-400 select-none dark:text-night-700"
					aria-hidden="true"
				>
					0{i + 1}
				</span>
				<h3 class="font-display text-lg font-semibold text-night-900 dark:text-cream-50">
					{step.title}
				</h3>
				<p class="mt-2 text-sm leading-relaxed text-ink-500 dark:text-night-300">
					{step.description}
				</p>
			</article>
		{/each}
	</div>
</Section>

<!-- Key features -->
<Section
	variant="night"
	eyebrow="Why Owl Reward"
	title="Three ways the owl pays you back"
	description="A loyalty wallet designed for how Myanmar actually shops — daily, local and mobile-first."
>
	<div class="grid gap-6 md:grid-cols-3">
		{#each features as feature (feature.title)}
			<FeatureCard variant="dark" title={feature.title} description={feature.description}>
				{#snippet icon()}
					{#if feature.title === 'Owl Points'}
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.8"
							aria-hidden="true"
						>
							<circle cx="9" cy="9" r="5.5" />
							<circle cx="15" cy="9" r="5.5" />
							<path
								d="M12 14v7M8.5 18l3.5-3 3.5 3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					{:else if feature.title === 'Stamp cards'}
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.8"
							aria-hidden="true"
						>
							<rect x="3.5" y="5" width="17" height="14.5" rx="2.5" />
							<circle cx="8.5" cy="10" r="1.6" />
							<circle cx="15.5" cy="10" r="1.6" />
							<circle cx="8.5" cy="15" r="1.6" />
							<circle cx="15.5" cy="15" r="1.6" />
						</svg>
					{:else}
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.8"
							aria-hidden="true"
						>
							<path
								d="M4 8.5 20 4l-4.5 16-4-6.5L4 8.5Z"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path d="m11.5 13.5 8.5-9.5" stroke-linecap="round" />
						</svg>
					{/if}
				{/snippet}
			</FeatureCard>
		{/each}
	</div>
</Section>

<!-- About teaser -->
<section class="bg-cream-50 dark:bg-night-950">
	<div
		class="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-[auto_1fr_auto]"
	>
		<OwlLogo size={72} wordmark={false} class="text-night-900 dark:text-cream-50" />
		<div>
			<h2
				class="font-display text-2xl font-bold tracking-tight text-night-900 sm:text-3xl dark:text-cream-50"
			>
				Built in Yangon by {site.legalName}
			</h2>
			<p class="mt-3 max-w-2xl leading-relaxed text-ink-500 dark:text-night-300">
				{site.legalName} builds practical digital products for Myanmar's consumers and retailers. Owl
				Reward is our loyalty platform connecting shoppers with the local businesses they love.
			</p>
			<p class="mt-3 text-sm text-ink-500 dark:text-night-300">{addressLine}</p>
		</div>
		<a
			href={resolve('/about')}
			class="rounded-full border border-night-900/20 px-6 py-3 text-center font-display text-sm font-semibold text-night-900 transition hover:border-gold-500 hover:text-gold-700 dark:border-cream-50/20 dark:text-cream-50 dark:hover:border-gold-400 dark:hover:text-gold-300"
		>
			About JKT
		</a>
	</div>
</section>

<!-- Download CTA -->
<section class="starfield relative overflow-hidden bg-night-950 text-cream-50">
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl"
		aria-hidden="true"
	></div>
	<div class="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
		<h2 class="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
			Start earning tonight. <span class="text-gold-400">Redeem by morning.</span>
		</h2>
		<p class="mx-auto mt-4 max-w-xl text-night-200">
			Download Owl Reward, find partner shops near you, and let every kyat work a little harder.
		</p>
		<div class="mt-10 flex justify-center">
			<StoreBadges />
		</div>
	</div>
</section>
