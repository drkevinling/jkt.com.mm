<script lang="ts">
	import LegalSection from '$lib/components/LegalSection.svelte';
	import { addressLine, site } from '$lib/config/site';

	// TODO: set the real policy effective date before store submission
	const effectiveDate = 'TODO — effective date';
</script>

<svelte:head>
	<title>Privacy Policy — {site.legalName} | {site.brand} &amp; {site.appName}</title>
	<meta
		name="description"
		content="Privacy policy of JKT Co.,Ltd covering the jkt.com.mm website, the Owlvyra ERP web applications and the Owl Reward mobile application: what we collect, why, and the rights you have."
	/>
	<link rel="canonical" href="{site.url}/privacy-policy" />
	<meta
		property="og:title"
		content="Privacy Policy — {site.legalName} | {site.brand} & {site.appName}"
	/>
	<meta
		property="og:description"
		content="How JKT Co.,Ltd collects, uses and protects your information on this website, in the Owlvyra ERP web apps and in the Owl Reward app."
	/>
	<meta property="og:url" content="{site.url}/privacy-policy" />
</svelte:head>

<section class="starfield bg-night-900 text-cream-50">
	<div class="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8">
		<p
			class="inline-flex items-center rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-gold-300 uppercase"
		>
			Legal
		</p>
		<h1 class="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
		<p class="mt-4 text-night-200">
			This policy explains how {site.legalName} ("we", "us", "our") handles personal information on this
			website, in the Owlvyra business web applications (including Owlvyra ERP) and in the Owl Reward
			mobile application (together, the "Services"). It applies to all of them.
		</p>
		<p class="mt-3 text-sm text-night-300">Effective date: {effectiveDate}</p>
	</div>
</section>

<div class="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8">
	<LegalSection id="who-we-are" title="1. Who we are">
		<p>
			The data controller for the Services is <strong>{site.legalName}</strong>, a company
			registered in Myanmar with its head office at {addressLine}. You can reach our privacy contact
			at
			<a
				href="mailto:{site.email}"
				class="text-gold-700 underline underline-offset-4 dark:text-gold-300"
				rel="external">{site.email}</a
			>
			or by phone at
			<a
				href="tel:{site.phone}"
				class="text-gold-700 underline underline-offset-4 dark:text-gold-300"
				rel="external">{site.phoneDisplay}</a
			>.
		</p>
	</LegalSection>

	<LegalSection id="what-we-collect" title="2. Information we collect">
		<p><strong>2.1 Information you give us (Owl Reward app).</strong></p>
		<ul class="list-disc space-y-2 pl-6">
			<li>
				Account details: your mobile phone number, display name and, if you choose, a profile photo.
			</li>
			<li>
				<!-- TODO: confirm the exact registration data fields with the app team before submission -->
				Verification data: the one-time password sent to your phone number to verify your account.
			</li>
			<li>Reward activity: points, stamps, vouchers, redemptions and tier status.</li>
			<li>Communications: messages you send to our support team.</li>
		</ul>
		<p><strong>2.2 Business customers (Owlvyra ERP).</strong></p>
		<ul class="list-disc space-y-2 pl-6">
			<li>
				Business contact details: the company name, address and contact person you provide when you
				request or are provisioned access.
			</li>
			<li>
				<!-- TODO: confirm staff-account data handling with the ERP team before submission -->
				Staff user accounts: names, phone numbers and role assignments created for your team by your business
				administrator.
			</li>
			<li>
				Business records: the customers, suppliers, items and transactions your business enters into
				its own Owlvyra ERP account, which remain your business's data.
			</li>
		</ul>
		<p><strong>2.3 Information collected automatically.</strong></p>
		<ul class="list-disc space-y-2 pl-6">
			<li>
				App and device data: device model, operating system version, app version and language
				settings.
			</li>
			<li>
				<!-- TODO: confirm whether the app collects precise/coarse location for "shops near me"; remove or keep accordingly -->
				Location data: only if you grant permission, and only to show partner shops near you.
			</li>
			<li>
				<!-- TODO: name the analytics SDK(s) actually used (e.g. Firebase Analytics) before submission -->
				Usage data: interactions with app features, collected through our analytics provider(s).
			</li>
		</ul>
		<p><strong>2.4 Website visitors.</strong></p>
		<ul class="list-disc space-y-2 pl-6">
			<li>
				<!-- TODO: confirm hosting/CDN logging details (GitHub Pages) and list any analytics used on the website -->
				Server logs: your browser requests our pages, and standard technical data (IP address, browser
				type, timestamp) may be processed by our hosting provider for security and delivery.
			</li>
			<li>
				This website has no accounts, no forms and sets no advertising cookies. Contact happens by
				email or phone only.
			</li>
		</ul>
	</LegalSection>

	<LegalSection id="how-we-use" title="3. How we use information">
		<ul class="list-disc space-y-2 pl-6">
			<li>To create and secure your Owl Reward account and verify your phone number.</li>
			<li>
				To record points, stamps and vouchers you earn and redeem, and keep an accurate balance.
			</li>
			<li>To provide customer support and respond to your questions.</li>
			<li>To show you relevant campaigns and partner offers in the app.</li>
			<li>To diagnose faults, prevent fraud and abuse, and keep the Services secure.</li>
			<li>
				<!-- TODO: list any marketing consent (SMS/push) options offered in the app -->
				To send you service notifications about your rewards; marketing messages are sent only with your
				consent, which you can withdraw at any time.
			</li>
		</ul>
	</LegalSection>

	<LegalSection id="legal-basis" title="4. Why we may process (legal basis)">
		<p>
			We process personal information because it is necessary to perform our contract with you
			(running your loyalty account), because you have given consent (for example for location or
			marketing), or because we have a legitimate interest in operating secure, fraud-free Services.
		</p>
	</LegalSection>

	<LegalSection id="sharing" title="5. Sharing with others">
		<p>We do not sell your personal information. We share it only as needed to run the Services:</p>
		<ul class="list-disc space-y-2 pl-6">
			<li>
				<strong>Partner merchants</strong> see only what is necessary to award and redeem your rewards
				(for example that a scan succeeded) — not your full profile.
			</li>
			<li>
				<!-- TODO: list actual service providers (hosting, SMS/OTP gateway, push notifications, analytics) before submission -->
				<strong>Service providers</strong> that help us operate the Services, under instructions and appropriate
				safeguards.
			</li>
			<li>
				<strong>Authorities</strong>, where we are legally required to disclose information.
			</li>
		</ul>
	</LegalSection>

	<LegalSection id="retention" title="6. How long we keep information">
		<p>
			<!-- TODO: set the real retention periods (account records, transaction history, logs) before submission -->
			We keep account and reward records while your account is active and for a period afterwards for
			accounting, dispute and fraud-prevention purposes. Website server logs are kept for a limited security
			period. De-identified statistics may be kept longer.
		</p>
	</LegalSection>

	<LegalSection id="security" title="7. Security">
		<p>
			We use encryption in transit (HTTPS/TLS), access controls and least-privilege practices to
			protect your information. No method of transmission or storage is perfectly secure, but we
			work to protect your data against unauthorised access, alteration and destruction.
		</p>
	</LegalSection>

	<LegalSection id="your-rights" title="8. Your rights and choices">
		<ul class="list-disc space-y-2 pl-6">
			<li>
				<strong>Access and copy:</strong> you can ask what personal information we hold about you.
			</li>
			<li>
				<strong>Correct:</strong> you can fix inaccurate details in your profile or by contacting us.
			</li>
			<li>
				<strong>Delete:</strong> you can request deletion of your account; we keep what we must for legal
				or fraud-prevention reasons.
			</li>
			<li>
				<strong>Withdraw consent:</strong> you can withdraw consent for location or marketing at any time
				in your phone settings or in the app.
			</li>
			<li>
				<strong>Complain:</strong> you can raise a concern with us at
				<a
					href="mailto:{site.email}"
					class="text-gold-700 underline underline-offset-4 dark:text-gold-300"
					rel="external">{site.email}</a
				>.
			</li>
		</ul>
		<!-- TODO: reference applicable Myanmar data protection rules or notification requirements, if any apply -->
	</LegalSection>

	<LegalSection id="children" title="9. Children">
		<p>
			<!-- TODO: confirm the minimum age policy (13 or 16) and parental-consent approach before submission -->
			The Services are not directed to children, and we do not knowingly collect personal information
			from children. If you believe a child has provided us information, contact us and we will delete
			it.
		</p>
	</LegalSection>

	<LegalSection id="transfers" title="10. International transfers">
		<p>
			<!-- TODO: list countries/regions where data is stored or processed (e.g. app backend region) before submission -->
			Some of our service providers may process information outside Myanmar. Where that happens, we use
			appropriate safeguards such as contractual data protection terms.
		</p>
	</LegalSection>

	<LegalSection id="changes" title="11. Changes to this policy">
		<p>
			We may update this policy as the Services evolve. We will post the new version here with a new
			effective date and, for significant changes, notify you inside the app.
		</p>
	</LegalSection>

	<LegalSection id="contact" title="12. Contact us">
		<p>
			Questions about this policy or your information:
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
			><br />
			{site.legalName}, {addressLine}
		</p>
	</LegalSection>
</div>
