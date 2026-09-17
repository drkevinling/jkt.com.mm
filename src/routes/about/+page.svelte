<script lang="ts">
	import { resolve } from '$app/paths';
	import OwlLogo from '$lib/components/OwlLogo.svelte';
	import Section from '$lib/components/Section.svelte';
	import { addressLine, site } from '$lib/config/site';
</script>

<svelte:head>
	<title>About JKT Co.,Ltd — Company behind Owl Reward</title>
	<meta
		name="description"
		content="JKT Co.,Ltd is a Yangon-based technology company building Owl Reward, the loyalty app that connects Myanmar shoppers with local businesses."
	/>
	<link rel="canonical" href="{site.url}/about" />
	<meta property="og:title" content="About JKT Co.,Ltd — Company behind Owl Reward" />
	<meta
		property="og:description"
		content="JKT Co.,Ltd is a Yangon-based technology company building Owl Reward, the loyalty app for Myanmar."
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
			A Yangon company building products for the way Myanmar lives and shops.
		</h1>
		<p class="mt-6 max-w-2xl text-lg leading-relaxed text-night-200">
			{site.legalName} is a technology company founded in {site.foundedYear}. We design and operate
			<span class="font-semibold text-gold-300">Owl Reward</span>, a loyalty platform that helps
			local businesses reward the customers who keep coming back — and helps shoppers get more from
			every purchase.
		</p>
	</div>
</section>

<!-- Mission / Vision -->
<Section eyebrow="What drives us" title="Mission & vision">
	<div class="grid gap-6 md:grid-cols-2">
		<article class="rounded-card border border-cream-200 bg-white/80 p-8 shadow-card">
			<h3 class="font-display text-xl font-semibold text-night-900">Our mission</h3>
			<p class="mt-3 leading-relaxed text-ink-500">
				Make loyalty simple, fair and rewarding for everyone — giving every shop, café and clinic in
				Myanmar the tools of a modern rewards programme, and every shopper one trustworthy wallet
				for all of them.
			</p>
		</article>
		<article class="rounded-card border border-cream-200 bg-white/80 p-8 shadow-card">
			<h3 class="font-display text-xl font-semibold text-night-900">Our vision</h3>
			<p class="mt-3 leading-relaxed text-ink-500">
				A Myanmar where value flows back to loyal customers as naturally as change flows back from a
				cashier — visible, instant and earned. We want Owl Reward to be the most trusted name in
				everyday rewards.
			</p>
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
		<dt class="font-semibold text-gold-300">Legal entity</dt>
		<dd class="text-night-200">{site.legalName}</dd>
		<dt class="font-semibold text-gold-300">Head office</dt>
		<dd class="text-night-200">{addressLine}</dd>
		<dt class="font-semibold text-gold-300">Founded</dt>
		<dd class="text-night-200">{site.foundedYear}</dd>
		<dt class="font-semibold text-gold-300">Product</dt>
		<dd class="text-night-200">Owl Reward — loyalty &amp; rewards mobile application</dd>
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
			href={resolve('/owl-reward')}
			class="rounded-full bg-gold-500 px-7 py-3 font-display font-semibold text-night-950 transition hover:bg-gold-400"
		>
			Explore Owl Reward
		</a>
	</div>
</Section>
