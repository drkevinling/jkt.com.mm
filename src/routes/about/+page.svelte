<script lang="ts">
	import { resolve } from '$app/paths';
	import JktLogo from '$lib/components/JktLogo.svelte';
	import OwlLogo from '$lib/components/OwlLogo.svelte';
	import Section from '$lib/components/Section.svelte';
	import { addressLine, site } from '$lib/config/site';
</script>

<svelte:head>
	<title>About {site.legalName} — the company behind {site.brand}</title>
	<meta
		name="description"
		content="J K T Company Limited is a Yangon-based technology company building the Owlvyra product family: the Owlvyra ERP web suite and the Owl Reward loyalty app for Myanmar."
	/>
	<link rel="canonical" href="{site.url}/about" />
	<meta property="og:title" content="About {site.legalName} — the company behind {site.brand}" />
	<meta
		property="og:description"
		content="J K T Company Limited builds the Owlvyra ERP suite and the Owl Reward loyalty app from Yangon, Myanmar."
	/>
	<meta property="og:url" content="{site.url}/about" />
</svelte:head>

<!-- Intro -->
<section class="starfield bg-night-900 text-cream-50">
	<div class="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
		<p
			class="inline-flex items-center rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-gold-300 uppercase"
		>
			Who we are
		</p>
		<h1
			class="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl"
		>
			A Yangon company building software for the way Myanmar works and shops.
		</h1>
		<p class="mt-6 max-w-2xl text-lg leading-relaxed text-night-200">
			{site.legalName} is a technology company founded in {site.foundedYear}. We design, build and
			operate the <span class="font-semibold text-gold-300">{site.brand}</span> product family:
			<span class="font-semibold text-gold-300">Owlvyra ERP</span>, the web suite that runs
			accounting, stock, sales and payroll for growing businesses — and
			<span class="font-semibold text-gold-300">{site.appName}</span>, the loyalty app that rewards
			the customers who keep those businesses busy.
		</p>
		<p class="mt-5 max-w-2xl text-base leading-relaxed text-night-200">
			Like the owl that inspires the brand, we build
			<span class="font-semibold text-gold-300">silent</span> — quiet precision,
			<span class="font-semibold text-gold-300">swift</span> — excellent performance, and
			<span class="font-semibold text-gold-300">smart</span> — intelligent workflow. See what others miss.
		</p>
	</div>
</section>

<!-- Mission / Vision -->
<Section eyebrow="What drives us" title="Mission & vision">
	<div class="grid gap-6 md:grid-cols-2">
		<article
			class="rounded-card border border-cream-200 bg-white/80 p-8 shadow-card dark:border-night-700/60 dark:bg-night-800/70"
		>
			<h3 class="font-display text-xl font-semibold text-night-900 dark:text-cream-50">
				Our mission
			</h3>
			<p class="mt-3 leading-relaxed text-ink-500 dark:text-night-300">
				Give every business in Myanmar — from a single counter to a group of companies — software
				that starts simple, grows with them, and never asks them to re-enter their history. And give
				every shopper one trustworthy wallet for the loyalty they have already earned.
			</p>
		</article>
		<article
			class="rounded-card border border-cream-200 bg-white/80 p-8 shadow-card dark:border-night-700/60 dark:bg-night-800/70"
		>
			<h3 class="font-display text-xl font-semibold text-night-900 dark:text-cream-50">
				Our vision
			</h3>
			<p class="mt-3 leading-relaxed text-ink-500 dark:text-night-300">
				A Myanmar where running a serious back office is as easy as opening a till, and value flows
				back to loyal customers as naturally as change flows back from a cashier. We want
				{site.brand} to be the most trusted name in both.
			</p>
		</article>
	</div>
</Section>

<!-- Products -->
<Section
	variant="night"
	eyebrow="What we build"
	title="The Owlvyra product family"
	description="One brand from one team in Yangon — business software on the web, loyalty in the pocket."
>
	<div class="grid gap-6 md:grid-cols-2">
		<article class="rounded-card border border-night-700/60 bg-night-800/70 p-8 shadow-card">
			<h3 class="font-display text-xl font-semibold text-cream-50">Owlvyra ERP</h3>
			<p class="mt-3 leading-relaxed text-night-200">
				A web-based business suite: Owlvyra Accounting, Owlvyra Inventory, Owlvyra Sales &amp; POS,
				and Owlvyra HR &amp; Payroll. Every module works alone; together they post to each other.
				Enterprise capabilities — industry packs and multi-company groups — are in progress.
			</p>
			<a
				href={resolve('/erp')}
				class="mt-5 inline-block rounded-full bg-gold-500 px-6 py-2.5 font-display text-sm font-semibold text-night-950 transition hover:bg-gold-400"
			>
				Explore the suite
			</a>
		</article>
		<article class="rounded-card border border-night-700/60 bg-night-800/70 p-8 shadow-card">
			<h3 class="font-display text-xl font-semibold text-cream-50">{site.appName}</h3>
			<p class="mt-3 leading-relaxed text-night-200">
				The loyalty app for Myanmar shoppers: points, digital stamp cards, campaigns and vouchers
				from partner shops — one wallet instead of a drawer full of punch cards.
				{#if site.stores.live}Available on{:else}Coming soon to{/if} Google Play and the App Store.
			</p>
			<a
				href={resolve('/owl-reward')}
				class="mt-5 inline-block rounded-full bg-gold-500 px-6 py-2.5 font-display text-sm font-semibold text-night-950 transition hover:bg-gold-400"
			>
				See the app
			</a>
		</article>
	</div>
</Section>

<!-- Company facts -->
<Section
	variant="night"
	eyebrow="Company information"
	title="The details reviewers and partners ask for"
>
	<dl class="mx-auto grid max-w-3xl gap-x-10 gap-y-6 text-left sm:grid-cols-[auto_1fr]">
		<div class="col-span-full mb-2 flex sm:justify-self-start">
			<JktLogo height={48} />
		</div>
		<dt class="font-semibold text-gold-300">Legal entity</dt>
		<dd class="text-night-200">{site.legalName}</dd>
		<dt class="font-semibold text-gold-300">Head office</dt>
		<dd class="text-night-200">{addressLine}</dd>
		<dt class="font-semibold text-gold-300">Founded</dt>
		<dd class="text-night-200">{site.foundedYear}</dd>
		<dt class="font-semibold text-gold-300">Products</dt>
		<dd class="text-night-200">
			Owlvyra ERP — business software suite (web)<br />
			{site.appName} — loyalty &amp; rewards mobile application (iOS &amp; Android — coming soon)
		</dd>
		<dt class="font-semibold text-gold-300">Contact</dt>
		<dd class="text-night-200">
			<a
				href="mailto:{site.email}"
				class="underline decoration-gold-500/60 underline-offset-4 transition-colors hover:text-gold-300"
				rel="external">{site.email}</a
			>
			·
			<a
				href="tel:{site.phone}"
				class="underline decoration-gold-500/60 underline-offset-4 transition-colors hover:text-gold-300"
				rel="external">{site.phoneDisplay}</a
			>
		</dd>
	</dl>
	<div class="mt-12 flex flex-wrap items-center justify-center gap-6">
		<OwlLogo size={56} wordmark={false} class="text-cream-50" />
		<a
			href={resolve('/contact')}
			class="rounded-full bg-gold-500 px-7 py-3 font-display font-semibold text-night-950 transition hover:bg-gold-400"
		>
			Contact us
		</a>
	</div>
</Section>
