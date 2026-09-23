<script lang="ts">
	import { resolve } from '$app/paths';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import Section from '$lib/components/Section.svelte';
	import OwlMascot from '$lib/components/OwlMascot.svelte';
	import { site } from '$lib/config/site';

	const modules = [
		{
			name: 'Owlvyra Accounting',
			lead: 'Books that balance themselves into place.',
			body: 'Money in, money out and transfers on the everyday screen; chart, journals, parties and periods one bar down; aging, VAT/GST settlement, formal statements and bank reconciliation for the careful days.'
		},
		{
			name: 'Owlvyra Inventory',
			lead: 'Every item, every site, every layer of cost.',
			body: 'Item master with units and barcodes, receipts, counts and transfers across locations. FIFO or weighted-average costing, lots and expiry, reorder points and purchasing — built on an append-only stock ledger.'
		},
		{
			name: 'Owlvyra Sales & POS',
			lead: 'From a walk-up till to a full order chain.',
			body: 'A counter sale finishes in one motion — stock decrements, cost is taken, the journal posts. Unfold the bar for quotes, reservations, tax invoices and fulfilment across sites.'
		},
		{
			name: 'Owlvyra HR & Payroll',
			lead: 'People and pay, run to run.',
			body: 'Employee records, leave balances, draft-and-approve pay runs and pay history. Payroll journals post automatically when Accounting is on.'
		},
		{
			name: 'Owlvyra Loyalty',
			lead: 'Rewards wired into the sale.',
			body: 'Points, punch cards and coupons attached to the till — earning on a sale, redeeming at the counter, and a member wallet in the Owl Reward app.'
		},
		{
			name: 'Finance & assets',
			lead: 'Planning on top of the ledger.',
			body: 'Budgets, cost centers and cash forecasts; supplier bills and reimbursements; a fixed-asset register with depreciation and disposal. Planning reads the books — it never fights them.'
		}
	];

	const depths = [
		{
			title: 'Minimalist',
			description:
				'The screen everyone lands on: the work finishes in one step. A sale, a receipt, a money tile — no training required.'
		},
		{
			title: 'Advanced',
			description:
				'Open work and running balances: an order that waits for cash, a purchase received later, who owes whom, more locations.'
		},
		{
			title: 'Expert',
			description:
				'The rest of the same module: statements, tax settlement, three-way match, lots, quotes, bank reconciliation.'
		}
	];

	const plans = [
		{
			name: 'Entrepreneur',
			tag: 'One module',
			body: 'A business that wants one job done: books, stock, a till, payroll, or loyalty. It runs with the others off.'
		},
		{
			name: 'SME',
			tag: 'Books + stock + selling',
			body: 'Accounting, inventory and sales required and working together. The smallest real ERP — POS included as a channel of sales.'
		},
		{
			name: 'Merchant',
			tag: 'Full suite',
			body: 'The SME core plus finance, expenses, fixed assets, loyalty and payroll on together, on one plan.'
		},
		{
			name: 'Enterprise',
			tag: 'In progress',
			body: 'Merchant plus industry packs, integrations and a second legal company with consolidated statements — group features on the way.'
		}
	];
</script>

<svelte:head>
	<title>{site.brand} ERP — Accounting, Inventory, POS &amp; HR Web Suite | {site.legalName}</title>
	<meta
		name="description"
		content="Owlvyra ERP by JKT Co.,Ltd: web apps for accounting, inventory, sales & POS, HR & payroll and loyalty. Start with one module and grow to the full back office without re-entering data."
	/>
	<link rel="canonical" href="{site.url}/erp" />
	<meta property="og:title" content="{site.brand} ERP — the back office that grows with you" />
	<meta
		property="og:description"
		content="Accounting, inventory, sales & POS, HR & payroll and loyalty in one web suite from JKT Co.,Ltd, Yangon."
	/>
	<meta property="og:url" content="{site.url}/erp" />
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
		class="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-28"
	>
		<div>
			<p
				class="inline-flex items-center rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-gold-300 uppercase"
			>
				{site.brand} ERP
			</p>
			<h1
				class="mt-6 font-display text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-5xl"
			>
				The back office that <span class="text-gold-400">grows with you.</span>
			</h1>
			<p class="mt-6 max-w-xl text-lg leading-relaxed text-night-200">
				Owlvyra Accounting, Owlvyra Inventory, Owlvyra Sales &amp; POS, Owlvyra HR &amp; Payroll —
				web apps that work alone on day one and post to each other as you grow. Built and supported
				in Yangon by {site.legalName}.
			</p>
			<div class="mt-8 flex flex-wrap items-center gap-4">
				<a
					href="mailto:{site.email}?subject={encodeURIComponent('Owlvyra ERP — access request')}"
					class="rounded-full bg-gold-500 px-7 py-3.5 font-display font-semibold text-night-950 shadow-glow-gold transition hover:bg-gold-400"
				>
					Request access
				</a>
				<a
					href="#modules"
					class="rounded-full border border-night-600 px-7 py-3.5 font-display font-semibold text-cream-50 transition hover:border-gold-400 hover:text-gold-300"
				>
					See the modules
				</a>
			</div>
			<p class="mt-6 text-sm text-night-300">
				Access is provisioned by the {site.legalName} team — email
				<a
					href="mailto:{site.email}"
					class="underline decoration-gold-500/60 underline-offset-4 transition-colors hover:text-gold-300"
					rel="external">{site.email}</a
				>.
			</p>
		</div>
		<div class="hidden justify-end lg:flex">
			<OwlMascot class="w-64 xl:w-72" />
		</div>
	</div>
</section>

<!-- Modules -->
<Section
	id="modules"
	eyebrow="The suite"
	title="Every module a complete product"
	description="Buy one, or run them together — a module you own is complete at every level, and nothing you paid for is withheld for a higher plan."
>
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each modules as module (module.name)}
			<article
				class="flex flex-col rounded-card border border-cream-200 bg-white/80 p-6 shadow-card dark:border-night-700/60 dark:bg-night-800/70"
			>
				<h3 class="font-display text-lg font-semibold text-night-900 dark:text-cream-50">
					{module.name}
				</h3>
				<p class="mt-1 text-sm font-semibold text-gold-700 dark:text-gold-300">{module.lead}</p>
				<p class="mt-3 text-sm leading-relaxed text-ink-500 dark:text-night-300">{module.body}</p>
			</article>
		{/each}
	</div>
</Section>

<!-- Depth -->
<Section
	variant="night"
	eyebrow="Three depths, one screen"
	title="Opens simple. Unfolds when you are ready."
	description="Every page starts on its Minimalist fields. Two collapsible bars — Advanced and Expert — reveal more of the same module when a business needs it. No separate modes, no migrations."
>
	<div class="grid gap-6 md:grid-cols-3">
		{#each depths as depth, i (depth.title)}
			<FeatureCard variant="dark" title={depth.title} description={depth.description}>
				{#snippet icon()}
					<span class="font-display text-lg font-bold" aria-hidden="true">{i + 1}</span>
				{/snippet}
			</FeatureCard>
		{/each}
	</div>
</Section>

<!-- Plans -->
<Section
	eyebrow="Packages"
	title="From one module to the whole back office"
	description="A plan change, not a software change: upgrades turn modules on in the same account, with the same data and the same history."
>
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each plans as plan (plan.name)}
			<article
				class="flex flex-col rounded-card border border-cream-200 bg-white/80 p-6 shadow-card dark:border-night-700/60 dark:bg-night-800/70"
			>
				<h3 class="font-display text-lg font-semibold text-night-900 dark:text-cream-50">
					{plan.name}
				</h3>
				<p
					class="mt-1 text-xs font-semibold tracking-[0.14em] text-gold-700 uppercase dark:text-gold-300"
				>
					{plan.tag}
				</p>
				<p class="mt-3 text-sm leading-relaxed text-ink-500 dark:text-night-300">{plan.body}</p>
			</article>
		{/each}
	</div>
	<p class="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-500 dark:text-night-300">
		The ERP suite is live today. Enterprise additions — industry packs, vendor integrations and
		multi-company consolidation — are in progress.
	</p>
</Section>

<!-- CTA -->
<section
	class="starfield relative overflow-hidden bg-gradient-to-b from-night-900 to-night-950 text-cream-50"
>
	<div
		class="pointer-events-none absolute top-0 left-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/15 blur-3xl"
		aria-hidden="true"
	></div>
	<div class="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
		<h2 class="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
			Your books, stock and staff — <span class="text-gold-400">under one owl.</span>
		</h2>
		<p class="mx-auto mt-4 max-w-xl text-night-200">
			Tell us what your business runs today. We will set up the module that fits and you can unfold
			the rest from there.
		</p>
		<div class="mt-10 flex flex-wrap justify-center gap-4">
			<a
				href="mailto:{site.email}?subject={encodeURIComponent('Owlvyra ERP — access request')}"
				class="rounded-full bg-gold-500 px-7 py-3 font-display font-semibold text-night-950 transition hover:bg-gold-400"
			>
				Request access
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
