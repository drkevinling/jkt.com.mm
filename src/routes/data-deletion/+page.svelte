<script lang="ts">
	import LegalSection from '$lib/components/LegalSection.svelte';
	import { addressLine, site } from '$lib/config/site';
	import { resolve } from '$app/paths';

	// Last-updated date shown on the page; bump it whenever the instructions change
	const lastUpdated = '27 September 2026';
</script>

<svelte:head>
	<title>Delete your data — {site.appName} | {site.legalName}</title>
	<meta
		name="description"
		content="How to request deletion of your Owl Reward account and personal data from J K T Company Limited, including what we delete, what we keep, and how long."
	/>
	<link rel="canonical" href="{site.url}/data-deletion" />
	<meta property="og:title" content="Delete your data — {site.appName} | {site.legalName}" />
	<meta
		property="og:description"
		content="Instructions for requesting deletion of your Owl Reward account and personal data from J K T Company Limited."
	/>
	<meta property="og:url" content="{site.url}/data-deletion" />
</svelte:head>

<section class="starfield bg-night-900 text-cream-50">
	<div class="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8">
		<p
			class="inline-flex items-center rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-gold-300 uppercase"
		>
			Legal
		</p>
		<h1 class="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
			Delete your {site.appName} data
		</h1>
		<p class="mt-4 text-night-200">
			{site.legalName} ("we") provides the {site.appName} app and the Owlvyra business web applications.
			This page explains how to ask us to delete your account and personal data. You do not need to be
			signed in to read these instructions.
		</p>
		<p class="mt-3 text-sm text-night-300">Last updated: {lastUpdated}</p>
	</div>
</section>

<div class="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8">
	<LegalSection id="how-to-request" title="How to request deletion">
		<p>
			To delete your <strong>{site.appName}</strong> account and the personal data tied to it, follow
			these steps:
		</p>
		<ol class="list-decimal space-y-2 pl-6">
			<li>
				From the email address registered on your {site.appName} account, email
				<a
					href="mailto:{site.email}?subject=Delete%20my%20{encodeURIComponent(
						site.appName
					)}%20account"
					class="text-gold-700 underline underline-offset-4 dark:text-gold-300"
					rel="external">{site.email}</a
				>
				with the subject <strong>Delete my {site.appName} account</strong>.
			</li>
			<li>
				In the message, include the email address on the account and your display name, if you use
				one, so we can find the right account.
			</li>
			<li>
				We confirm that we received the request, then complete the deletion within 30 days. We may
				email you if we need to confirm it is you.
			</li>
			<li>
				After deletion you cannot sign in. Points, stamps and unused vouchers on that account are
				removed and cannot be restored.
			</li>
		</ol>
		<p>
			You can also call
			<a
				href="tel:{site.phone}"
				class="text-gold-700 underline underline-offset-4 dark:text-gold-300"
				rel="external">{site.phoneDisplay}</a
			>
			and ask for account deletion. We still need the email address on the account so we delete the correct
			one.
		</p>
	</LegalSection>

	<LegalSection id="what-we-delete" title="What we delete">
		<p>When we delete an {site.appName} account, we delete:</p>
		<ul class="list-disc space-y-2 pl-6">
			<li>Your account email address, display name and profile photo.</li>
			<li>Reward activity tied to the account: points, stamps, vouchers, redemptions and tier.</li>
			<li>
				Messages you sent our support team about that account, except where we must keep a record.
			</li>
		</ul>
	</LegalSection>

	<LegalSection id="what-we-keep" title="What we keep, and for how long">
		<p>Some information is kept after the account is deleted:</p>
		<ul class="list-disc space-y-2 pl-6">
			<li>
				Records we must keep for legal, tax and fraud-prevention reasons, for up to 3 years after
				deletion.
			</li>
			<li>Server logs, which are purged after 90 days.</li>
			<li>De-identified statistics that cannot be used to identify you.</li>
		</ul>
		<p>
			This matches our
			<a
				href={resolve('/privacy-policy')}
				class="text-gold-700 underline underline-offset-4 dark:text-gold-300">privacy policy</a
			>.
		</p>
	</LegalSection>

	<LegalSection id="erp" title="Owlvyra ERP accounts">
		<p>
			Staff accounts in the Owlvyra business web applications are created by a business
			administrator. To remove a staff account, ask that administrator, or email
			<a
				href="mailto:{site.email}?subject=Delete%20my%20Owlvyra%20ERP%20account"
				class="text-gold-700 underline underline-offset-4 dark:text-gold-300"
				rel="external">{site.email}</a
			>
			from the email on the account. Business records your company entered (customers, suppliers, items
			and transactions) remain that business's data.
		</p>
	</LegalSection>

	<LegalSection id="children" title="Children">
		<p>
			If you believe a child under 13 has given us personal information, email
			<a
				href="mailto:{site.email}?subject=Delete%20a%20child%27s%20{encodeURIComponent(
					site.appName
				)}%20data"
				class="text-gold-700 underline underline-offset-4 dark:text-gold-300"
				rel="external">{site.email}</a
			>
			and we will delete it.
		</p>
	</LegalSection>

	<LegalSection id="contact" title="Contact">
		<p>
			{site.legalName}<br />
			{addressLine}<br />
			<a
				href="mailto:{site.email}"
				class="text-gold-700 underline underline-offset-4 dark:text-gold-300"
				rel="external">{site.email}</a
			>
			·
			<a
				href="tel:{site.phone}"
				class="text-gold-700 underline underline-offset-4 dark:text-gold-300"
				rel="external">{site.phoneDisplay}</a
			>
		</p>
		<p>
			See also our
			<a
				href={resolve('/privacy-policy')}
				class="text-gold-700 underline underline-offset-4 dark:text-gold-300">privacy policy</a
			>
			and
			<a
				href={resolve('/terms')}
				class="text-gold-700 underline underline-offset-4 dark:text-gold-300"
				>terms &amp; conditions</a
			>.
		</p>
	</LegalSection>
</div>
