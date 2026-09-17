/**
 * Central site configuration — the single source of truth for every
 * user-editable value on the website.
 *
 * Every field marked with `// TODO:` is a deliberate placeholder that MUST be
 * replaced with real JKT Co.,Ltd information before submitting the Owl Reward
 * app to Apple App Store / Google Play review. Apple and Google verify that
 * this website's company information matches the legal registration.
 */
export const site = {
	/** Canonical production origin (no trailing slash). */
	// TODO: if the site later moves to a custom domain (e.g. https://jkt.com.mm),
	// update this value — canonical/OG tags, sitemap and robots all derive from it
	url: 'https://drkevinling.github.io/jkt.com.mm',

	/** Registered legal entity name — must match company registration exactly. */
	// TODO: verify exact legal name as registered (punctuation, spacing)
	legalName: 'JKT Co.,Ltd',

	/** App being showcased. */
	appName: 'Owl Reward',

	/** Registered business address shown in footer, About and Contact pages. */
	address: {
		// TODO: replace with real street address
		street: 'No. 00, Example Street, Bahan Township',
		// TODO: replace with real city
		city: 'Yangon',
		// TODO: replace with real state/region
		region: 'Yangon Region',
		// TODO: replace with real postal code
		postalCode: '11201',
		// TODO: replace with real country
		country: 'Myanmar'
	},

	/** Customer service hotline (tel: links are generated from this). */
	// TODO: replace with real hotline number (E.164 digits only, no spaces)
	phone: '+959000000000',
	/** Human-readable display form of the hotline. */
	// TODO: replace to match the real hotline formatting
	phoneDisplay: '+95 9 000 000 000',

	/** General contact email (mailto: links are generated from this). */
	// TODO: replace with real contact mailbox
	email: 'contact@jkt.com.mm',

	/** Social profiles — set to null if a platform is not used. */
	social: {
		// TODO: replace with real Facebook page URL or null
		facebook: 'https://facebook.com/owlreward',
		// TODO: replace with real Instagram profile URL or null
		instagram: 'https://instagram.com/owlreward',
		// TODO: replace with real X/Twitter profile URL or null
		x: null,
		// TODO: replace with real LinkedIn page URL or null
		linkedin: null
	},

	/** Store listing URLs for the Owl Reward app. */
	stores: {
		/** Google Play listing — placeholder until the listing is live. */
		// TODO: replace with the real Google Play listing URL
		playStore: 'https://play.google.com/store/apps/details?id=mm.com.jkt.owlreward',
		/** Apple App Store listing — placeholder until the listing is live. */
		// TODO: replace with the real App Store listing URL
		appStore: 'https://apps.apple.com/app/owl-reward/id0000000000'
	},

	/** Year the company was established (About page copy). */
	// TODO: replace with real founding year
	foundedYear: 2020
} as const;

export type Site = typeof site;

/** Full one-line postal address for footer/legal blocks. */
export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.region}, ${site.address.postalCode}, ${site.address.country}`;

/** Primary navigation shared by header and footer. */
export const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/owl-reward', label: 'Owl Reward' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' }
] as const;
