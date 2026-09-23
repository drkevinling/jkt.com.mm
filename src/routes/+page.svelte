<script lang="ts">
	import { resolve } from '$app/paths';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import JktLogo from '$lib/components/JktLogo.svelte';
	import OwlMascot from '$lib/components/OwlMascot.svelte';
	import Section from '$lib/components/Section.svelte';
	import StoreBadges from '$lib/components/StoreBadges.svelte';
	import OwlLogo from '$lib/components/OwlLogo.svelte';
	import { addressLine, site } from '$lib/config/site';

	const modules = [
		'Accounting',
		'Inventory',
		'Sales & POS',
		'HR & Payroll',
		'Loyalty',
		'Finance',
		'Fixed assets',
		'Expense'
	];

	const motto = [
		{
			title: 'Silent',
			description:
				'Quiet precision. The owl works without a sound — and so does Owlvyra. Journals post, stock moves and books balance quietly in the background, with no double entry and no noise.'
		},
		{
			title: 'Swift',
			description:
				'Excellent performance. Like an owl striking in one motion, a counter sale finishes in one tap and reports render while you watch. Fast where it counts.'
		},
		{
			title: 'Smart',
			description:
				'Intelligent workflow. Screens unfold at your pace, modules post to each other, and the software never asks twice for what it already knows.'
		}
	];

	const growSteps = [
		{
			title: 'Start with one module',
			description:
				'Accounting, a till, payroll, or a loyalty programme — every Owlvyra module works on its own, on day one.'
		},
		{
			title: 'Run them together',
			description:
				'Books, stock and selling post to each other: a sale decrements inventory and journals itself. No re-entry, no spreadsheets in between.'
		},
		{
			title: 'The whole back office',
			description:
				'The full suite on one plan. Group features — multiple companies, industry packs — are on the way for Enterprise.'
		}
	];
</script>

<svelte:head>
	<title>{site.brand} — Business Software &amp; Loyalty Apps by {site.legalName}</title>
	<meta
		name="description"
		content="Owlvyra by J K T Company Limited builds the Owlvyra ERP suite — accounting, inventory, POS and HR & payroll web apps — and the Owl Reward loyalty app for businesses in Myanmar."
	/>
	<link rel="canonical" href={site.url} />
	<meta
		property="og:title"
		content="{site.brand} — Business Software & Loyalty Apps by {site.legalName}"
	/>
	<meta
		property="og:description"
		content="The Owlvyra ERP suite runs the back office; the Owl Reward app rewards the customers who keep it busy. Built in Yangon, Myanmar."
	/>
	<meta property="og:url" content={site.url} />
</svelte:head>

<!-- Hero -->
<section class="starfield relative overflow-hidden bg-night-900 text-cream-50">
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
				See what others miss
			</p>
			<h1
				class="mt-6 font-display text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
			>
				Run the back office. <span class="text-gold-400">Reward the front.</span>
			</h1>
			<p class="mt-6 max-w-lg text-lg leading-relaxed text-night-200">
				{site.brand} is the product family from {site.legalName}: a web-based ERP suite that runs
				accounting, stock, sales and payroll — and {site.appName}, the loyalty app your customers
				carry in their pocket. Built in Yangon for Myanmar businesses.
			</p>
			<div class="mt-8 flex flex-wrap items-center gap-4">
				<a
					href={resolve('/erp')}
					class="rounded-full bg-gold-500 px-7 py-3.5 font-display font-semibold text-night-950 shadow-glow-gold transition hover:bg-gold-400"
				>
					Explore Owlvyra ERP
				</a>
				<a
					href={resolve('/owl-reward#download')}
					class="rounded-full border border-night-600 px-7 py-3.5 font-display font-semibold text-cream-50 transition hover:border-gold-400 hover:text-gold-300"
				>
					Get Owl Reward
				</a>
			</div>
		</div>

		<div class="flex items-end justify-center sm:justify-end">
			<OwlMascot class="animate-owl-float w-56 sm:w-72 lg:w-80" />
		</div>
	</div>

	<div class="relative border-t border-night-800/80 bg-night-950/60">
		<div
			class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-6 sm:px-8"
		>
			<span class="text-xs font-semibold tracking-[0.2em] text-night-400 uppercase">
				One suite, every module
			</span>
			{#each modules as module (module)}
				<span class="text-sm font-medium text-night-200">{module}</span>
			{/each}
		</div>
	</div>
</section>

<!-- Product family -->
<Section
	eyebrow="The product family"
	title="Two products, one owl watching your business"
	description="The ERP suite serves the business; Owl Reward serves its customers. They connect — a sale can earn points — but each stands on its own."
>
	<div class="grid gap-6 lg:grid-cols-2">
		<article
			class="flex flex-col rounded-card border border-cream-200 bg-white/80 p-8 shadow-card dark:border-night-700/60 dark:bg-night-800/70"
		>
			<p
				class="inline-flex w-fit items-center rounded-full border border-gold-500/40 bg-gold-500/10 px-3.5 py-1 text-xs font-semibold tracking-[0.14em] text-gold-700 uppercase dark:text-gold-300"
			>
				Web apps
			</p>
			<h3 class="mt-4 font-display text-2xl font-bold text-night-900 dark:text-cream-50">
				Owlvyra ERP
			</h3>
			<p class="mt-3 leading-relaxed text-ink-500 dark:text-night-300">
				Accounting, inventory &amp; purchasing, sales and the till, HR &amp; payroll — one web suite
				that posts to itself. Start with a single module and unfold the rest as the business grows,
				without switching software or losing history.
			</p>
			<ul class="mt-5 flex flex-wrap gap-2">
				{#each ['Accounting', 'Inventory', 'Sales & POS', 'HR & Payroll', 'Loyalty'] as chip (chip)}
					<li
						class="rounded-full border border-night-900/10 bg-cream-100 px-3 py-1 text-xs font-medium text-ink-700 dark:border-cream-50/10 dark:bg-night-700/60 dark:text-night-200"
					>
						{chip}
					</li>
				{/each}
			</ul>
			<div class="mt-7 flex flex-wrap gap-3 pt-1">
				<a
					href={resolve('/erp')}
					class="rounded-full bg-night-900 px-6 py-2.5 font-display text-sm font-semibold text-cream-50 transition hover:bg-night-700 dark:bg-gold-500 dark:text-night-950 dark:hover:bg-gold-400"
				>
					Explore the suite
				</a>
				<a
					href="mailto:{site.email}?subject={encodeURIComponent('Owlvyra ERP — access request')}"
					class="rounded-full border border-night-900/15 px-6 py-2.5 font-display text-sm font-semibold text-night-900 transition hover:border-gold-500 hover:text-gold-700 dark:border-cream-50/15 dark:text-cream-50 dark:hover:border-gold-400 dark:hover:text-gold-300"
				>
					Request access
				</a>
			</div>
		</article>

		<article
			class="flex flex-col rounded-card border border-cream-200 bg-white/80 p-8 shadow-card dark:border-night-700/60 dark:bg-night-800/70"
		>
			<p
				class="inline-flex w-fit items-center rounded-full border border-gold-500/40 bg-gold-500/10 px-3.5 py-1 text-xs font-semibold tracking-[0.14em] text-gold-700 uppercase dark:text-gold-300"
			>
				Mobile app
			</p>
			<h3 class="mt-4 font-display text-2xl font-bold text-night-900 dark:text-cream-50">
				{site.appName}
			</h3>
			<p class="mt-3 leading-relaxed text-ink-500 dark:text-night-300">
				The loyalty app for Myanmar shoppers: points, digital stamp cards, campaigns and vouchers
				from partner shops — one wallet instead of a drawer full of punch cards.
				{#if site.stores.live}On{:else}Coming soon to{/if} Google Play and the App Store.
			</p>
			<ul class="mt-5 flex flex-wrap gap-2">
				{#each ['Points wallet', 'Stamp cards', 'Campaigns', 'Vouchers', 'Member QR'] as chip (chip)}
					<li
						class="rounded-full border border-night-900/10 bg-cream-100 px-3 py-1 text-xs font-medium text-ink-700 dark:border-cream-50/10 dark:bg-night-700/60 dark:text-night-200"
					>
						{chip}
					</li>
				{/each}
			</ul>
			<div class="mt-7 flex flex-wrap items-center gap-x-6 gap-y-5 pt-1">
				<a
					href={resolve('/owl-reward')}
					class="rounded-full bg-night-900 px-6 py-2.5 font-display text-sm font-semibold text-cream-50 transition hover:bg-night-700 dark:bg-gold-500 dark:text-night-950 dark:hover:bg-gold-400"
				>
					See the app
				</a>
				<StoreBadges class="py-0.5" />
			</div>
		</article>
	</div>
</Section>

<!-- Motto -->
<Section
	eyebrow="Our motto"
	title="Silent. Swift. Smart."
	description="We take our inspiration from the owl — and build the same qualities into every screen and every ledger line."
>
	<div class="grid gap-6 md:grid-cols-3">
		{#each motto as trait (trait.title)}
			<FeatureCard title={trait.title} description={trait.description}>
				{#snippet icon()}
					{#if trait.title === 'Silent'}
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.8"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
							<path d="M16 8 2 22" />
							<path d="M17.5 15H9" />
						</svg>
					{:else if trait.title === 'Swift'}
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.8"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
						</svg>
					{:else}
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.8"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
							<circle cx="12" cy="12" r="3" />
						</svg>
					{/if}
				{/snippet}
			</FeatureCard>
		{/each}
	</div>
	<p class="mt-10 text-center font-display text-lg font-semibold text-gold-700 dark:text-gold-300">
		See what others miss.
	</p>
</Section>

<!-- Grows with you -->
<Section
	variant="night"
	eyebrow="Grows with you"
	title="Start with one module. Add the rest without starting over."
	description="Every Owlvyra plan runs on the same suite and the same data — a business never re-enters its history to climb to the next step."
>
	<div class="grid gap-6 md:grid-cols-3">
		{#each growSteps as step, i (step.title)}
			<FeatureCard variant="dark" title={step.title} description={step.description}>
				{#snippet icon()}
					<span class="font-display text-lg font-bold" aria-hidden="true">0{i + 1}</span>
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
		<OwlLogo size={96} wordmark={false} class="text-night-900 dark:text-cream-50" />
		<div>
			<div class="flex flex-wrap items-center gap-4">
				<h2
					class="font-display text-2xl font-bold tracking-tight text-night-900 sm:text-3xl dark:text-cream-50"
				>
					Built by {site.legalName}
				</h2>
				<JktLogo height={44} class="ml-1" />
			</div>
			<p class="mt-3 max-w-2xl leading-relaxed text-ink-500 dark:text-night-300">
				{site.legalName} is a technology company building the {site.brand} family — practical software
				for Myanmar's businesses and the people they serve. Every product is designed, developed and supported
				from Yangon.
			</p>
			<p class="mt-3 text-sm text-ink-500 dark:text-night-300">{addressLine}</p>
		</div>
		<a
			href={resolve('/about')}
			class="rounded-full border border-night-900/20 px-6 py-3 text-center font-display text-sm font-semibold text-night-900 transition hover:border-gold-500 hover:text-gold-700 dark:border-cream-50/20 dark:text-cream-50 dark:hover:border-gold-400 dark:hover:text-gold-300"
		>
			About J K T
		</a>
	</div>
</section>

<!-- Contact CTA -->
<section class="starfield relative overflow-hidden bg-night-950 text-cream-50">
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl"
		aria-hidden="true"
	></div>
	<div class="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
		<p class="mb-4 font-display text-sm font-semibold tracking-[0.22em] text-gold-300 uppercase">
			See what others miss
		</p>
		<h2 class="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
			From the first kyat <span class="text-gold-400">to the full ledger.</span>
		</h2>
		<p class="mx-auto mt-4 max-w-xl text-night-200">
			Want Owlvyra ERP for your business, or Owl Reward for your shop? Talk to us — we answer every
			message.
		</p>
		<div class="mt-10 flex flex-wrap justify-center gap-4">
			<a
				href="mailto:{site.email}?subject={encodeURIComponent('Owlvyra ERP — access request')}"
				class="rounded-full bg-gold-500 px-7 py-3 font-display font-semibold text-night-950 transition hover:bg-gold-400"
			>
				Request ERP access
			</a>
			<a
				href={resolve('/contact')}
				class="rounded-full border border-night-600 px-7 py-3 font-display font-semibold text-cream-50 transition hover:border-gold-400 hover:text-gold-300"
			>
				Contact us
			</a>
		</div>
	</div>
</section>
