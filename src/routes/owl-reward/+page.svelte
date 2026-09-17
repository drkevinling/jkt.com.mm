<script lang="ts">
	import PhoneMockup from '$lib/components/PhoneMockup.svelte';
	import Section from '$lib/components/Section.svelte';
	import StoreBadges from '$lib/components/StoreBadges.svelte';
	import { site } from '$lib/config/site';

	const pillars = [
		{
			title: 'Owl Points wallet',
			lead: 'One balance, every partner.',
			body: 'Points from every qualifying purchase pool into a single wallet with a live balance, tier progress and a full earning history — so nothing gets lost between shops.'
		},
		{
			title: 'Digital stamp cards',
			lead: 'The punch card, upgraded.',
			body: 'Each partner can run its own stamp programme inside Owl Reward. Collect, track progress to the next free item, and redeem automatically at the counter — no plastic cards, no stamps lost in the wash.'
		},
		{
			title: 'Campaigns',
			lead: 'Seasonal, social, rewarding.',
			body: 'Double-point weekends, festival campaigns and birthday treats keep the programme fresh. Merchants launch campaigns from their console; members see them in a single feed.'
		},
		{
			title: 'Voucher redemption',
			lead: 'From points to perks in a tap.',
			body: 'Browse the rewards catalogue, redeem points for vouchers, and show the QR code at checkout. Vouchers are tracked with clear expiry dates — no fine print ambushes.'
		},
		{
			title: 'Merchant QR checkout',
			lead: 'Fast at the counter.',
			body: 'Every member has a personal QR code. One scan from the merchant app posts points, stamps and redemptions to the right account in seconds — even on busy mornings.'
		},
		{
			title: 'Tiers that glow up',
			lead: 'Loyalty deserves a spotlight.',
			body: 'Climb from Fledgling to Silver, Gold and Elite Owl tiers with better earn rates, early campaign access and member-only vouchers as you go.'
		}
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
</script>

<svelte:head>
	<title>Owl Reward App — Points, Stamps &amp; Vouchers | JKT Co.,Ltd</title>
	<meta
		name="description"
		content="Owl Reward is the loyalty app by JKT Co.,Ltd: owl points, digital stamp cards, campaigns and voucher redemption at partner shops across Myanmar."
	/>
	<link rel="canonical" href="{site.url}/owl-reward" />
	<meta property="og:title" content="Owl Reward App — Points, Stamps & Vouchers" />
	<meta
		property="og:description"
		content="One loyalty wallet for Myanmar: points, digital stamps, campaigns and vouchers. Download Owl Reward by JKT Co.,Ltd."
	/>
	<meta property="og:url" content="{site.url}/owl-reward" />
</svelte:head>

<!-- Overview hero -->
<section class="starfield relative overflow-hidden bg-night-900 text-cream-50">
	<div
		class="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-night-600/30 blur-3xl"
		aria-hidden="true"
	></div>
	<div
		class="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28"
	>
		<div>
			<p
				class="inline-flex items-center rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-gold-300 uppercase"
			>
				The app
			</p>
			<h1
				class="mt-6 font-display text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-5xl"
			>
				A whole loyalty programme, <span class="text-gold-400">living in your pocket.</span>
			</h1>
			<p class="mt-6 max-w-lg text-lg leading-relaxed text-night-200">
				Owl Reward brings together points, stamp cards, campaigns and vouchers from partner shops
				across Myanmar into one calm, friendly app — built by {site.legalName}.
			</p>
			<div class="mt-8">
				<StoreBadges />
			</div>
		</div>
		<div class="flex justify-center lg:justify-end">
			<PhoneMockup />
		</div>
	</div>
</section>

<!-- Feature pillars -->
<Section
	eyebrow="Inside the app"
	title="Six things the owl does for you"
	description="Every feature is designed around one goal: making loyalty effortless for members and merchants alike."
>
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each pillars as pillar (pillar.title)}
			<article class="rounded-card border border-cream-200 bg-white/80 p-6 shadow-card">
				<h3 class="font-display text-lg font-semibold text-night-900">{pillar.title}</h3>
				<p class="mt-1 text-sm font-semibold text-gold-600">{pillar.lead}</p>
				<p class="mt-3 text-sm leading-relaxed text-ink-500">{pillar.body}</p>
			</article>
		{/each}
	</div>
</Section>

<!-- How it works -->
<Section variant="night" eyebrow="How it works" title="Three steps, zero paperwork">
	<div class="grid gap-6 md:grid-cols-3">
		{#each steps as step, i (step.title)}
			<article
				class="relative rounded-card border border-night-700/60 bg-night-800/70 p-6 shadow-card"
			>
				<span
					class="absolute top-5 right-5 font-display text-5xl font-bold text-night-700 select-none"
					aria-hidden="true"
				>
					0{i + 1}
				</span>
				<h3 class="font-display text-lg font-semibold text-cream-50">{step.title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-night-200">{step.description}</p>
			</article>
		{/each}
	</div>
</Section>

<!-- Download -->
<section
	id="download"
	class="starfield relative overflow-hidden bg-gradient-to-b from-night-900 to-night-950 text-cream-50"
>
	<div
		class="pointer-events-none absolute top-0 left-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/15 blur-3xl"
		aria-hidden="true"
	></div>
	<div class="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
		<h2 class="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
			Ready when you are — <span class="text-gold-400">day or night.</span>
		</h2>
		<p class="mx-auto mt-4 max-w-xl text-night-200">
			Owl Reward is available on Google Play and the App Store. Sign up with your phone number and
			start collecting today.
		</p>
		<div class="mt-10 flex justify-center">
			<StoreBadges />
		</div>
		<p class="mt-6 text-xs text-night-400">
			Store links open the official listings on Google Play and the Apple App Store.
		</p>
	</div>
</section>
