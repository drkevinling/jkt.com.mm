<script lang="ts">
	import LegalSection from '$lib/components/LegalSection.svelte';
	import { addressLine, site } from '$lib/config/site';

	// TODO: set the real effective date before store submission
	const effectiveDate = 'TODO — effective date';
</script>

<svelte:head>
	<title>Terms &amp; Conditions — JKT Co.,Ltd &amp; Owl Reward</title>
	<meta
		name="description"
		content="Terms and conditions governing use of the jkt.com.mm website and the Owl Reward mobile application provided by JKT Co.,Ltd."
	/>
	<link rel="canonical" href="{site.url}/terms" />
	<meta property="og:title" content="Terms & Conditions — JKT Co.,Ltd & Owl Reward" />
	<meta
		property="og:description"
		content="Terms governing use of the jkt.com.mm website and the Owl Reward app by JKT Co.,Ltd."
	/>
	<meta property="og:url" content="{site.url}/terms" />
</svelte:head>

<section class="starfield bg-night-900 text-cream-50">
	<div class="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8">
		<p
			class="inline-flex items-center rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-gold-300 uppercase"
		>
			Legal
		</p>
		<h1 class="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
			Terms &amp; Conditions
		</h1>
		<p class="mt-4 text-night-200">
			These terms govern your use of the jkt.com.mm website and the Owl Reward mobile application
			(the "Services") provided by {site.legalName}.
		</p>
		<p class="mt-3 text-sm text-night-300">Effective date: {effectiveDate}</p>
	</div>
</section>

<div class="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8">
	<LegalSection id="agreement" title="1. Agreement">
		<p>
			By using the Services you agree to these terms. If you do not agree, please do not use the
			Services. We may update these terms from time to time; continued use after we post changes
			means you accept the updated terms.
		</p>
	</LegalSection>

	<LegalSection id="eligibility" title="2. Eligibility">
		<p>
			<!-- TODO: confirm minimum age for membership (13/16/18) before submission -->
			You may use Owl Reward if you are old enough to form a binding contract under Myanmar law and are
			not barred from using the Services under applicable sanctions or other laws.
		</p>
	</LegalSection>

	<LegalSection id="accounts" title="3. Your account">
		<ul class="list-disc space-y-2 pl-6">
			<li>You register with your mobile phone number and verify it with a one-time password.</li>
			<li>
				Keep your device and account secure. Activity through your account is presumed to be yours.
			</li>
			<li>
				One person, one account. Duplicate or fraudulent accounts may be suspended and their
				balances forfeited.
			</li>
			<li>Tell us promptly at {site.email} if you suspect unauthorised use of your account.</li>
		</ul>
	</LegalSection>

	<LegalSection id="rewards" title="4. Points, stamps and vouchers">
		<ul class="list-disc space-y-2 pl-6">
			<li>
				Points, stamps, tiers and vouchers are promotional benefits. They have no cash value, cannot
				be sold, transferred or exchanged for money, and remain our property until redeemed.
			</li>
			<li>
				Rewards are earned per the rules displayed at the time of purchase. Reward balances and
				expiry dates shown in the app are the authoritative record.
			</li>
			<li>
				Points and vouchers may expire according to the terms displayed for each reward. Expired
				rewards cannot be restored.
			</li>
			<li>
				We may adjust earn rates, tiers, catalogues and campaign rules. Material changes to earning
				or redeeming will be communicated in the app.
			</li>
			<li>
				Abuse — including fake transactions, self-scanning, exploiting bugs, or reselling rewards —
				may lead to balance forfeiture and account termination.
			</li>
		</ul>
	</LegalSection>

	<LegalSection id="merchants" title="5. Partner merchants">
		<p>
			Owl Reward is a loyalty platform. Goods and services you buy from partner merchants are sold
			by those merchants, who are responsible for their quality, availability, pricing and legal
			obligations. Voucher descriptions and campaign rules are set with the merchant and displayed
			in the app before you redeem.
		</p>
	</LegalSection>

	<LegalSection id="acceptable-use" title="6. Acceptable use">
		<p>You agree not to:</p>
		<ul class="list-disc space-y-2 pl-6">
			<li>use the Services for unlawful purposes or in violation of these terms;</li>
			<li>
				interfere with, reverse engineer, or attempt to gain unauthorised access to the Services;
			</li>
			<li>scrape, harvest or mass-download content or data from the Services;</li>
			<li>misrepresent your identity or your transactions to earn rewards.</li>
		</ul>
	</LegalSection>

	<LegalSection id="ip" title="7. Intellectual property">
		<p>
			The Services, including the Owl Reward name, logo, design and software, are owned by
			{site.legalName} or its licensors and are protected by intellectual property laws. You receive a
			limited, revocable, non-exclusive licence to use the app for its intended purpose.
		</p>
	</LegalSection>

	<LegalSection id="availability" title="8. Availability and changes">
		<p>
			We aim to keep the Services available but do not guarantee uninterrupted access. We may
			modify, suspend or discontinue features. Where a change materially reduces core functionality,
			we will provide notice in the app where practicable.
		</p>
	</LegalSection>

	<LegalSection id="disclaimer" title="9. Disclaimers">
		<p>
			The Services are provided "as is" and "as available", without warranties of any kind, express
			or implied, to the fullest extent permitted by law.
		</p>
	</LegalSection>

	<LegalSection id="liability" title="10. Limitation of liability">
		<p>
			To the maximum extent permitted by law, {site.legalName} is not liable for indirect, incidental,
			special or consequential damages, or for lost profits or lost rewards arising from misuse of the
			Services. Our aggregate liability for direct damages is limited to the greater of the amounts you
			paid us in the six months before the claim or the maximum value of rewards in your account.
		</p>
	</LegalSection>

	<LegalSection id="termination" title="11. Termination">
		<p>
			You may stop using the Services and request account deletion at any time. We may suspend or
			terminate accounts that violate these terms, the law, or the rights of others.
		</p>
	</LegalSection>

	<LegalSection id="law" title="12. Governing law and disputes">
		<p>
			<!-- TODO: confirm governing law/jurisdiction wording with JKT legal counsel before submission -->
			These terms are governed by the laws of Myanmar. Disputes will first be addressed by good-faith
			negotiation with us at {site.email}; unresolved disputes are subject to the courts of Yangon,
			Myanmar.
		</p>
	</LegalSection>

	<LegalSection id="contact" title="13. Contact">
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
	</LegalSection>
</div>
