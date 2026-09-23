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
	// Custom domain served by GitHub Pages — remember to configure the domain
	// in repo Settings → Pages (and DNS) when changing this value; canonical/OG
	// tags, sitemap and robots all derive from it
	url: 'https://jkt.com.mm',

	/** Registered legal entity name — must match company registration exactly. */
	// TODO: verify exact legal name as registered (punctuation, spacing)
	legalName: 'JKT Co.,Ltd',

	/** Brand under which all JKT products live. */
	brand: 'Owlvyra',

	/** Mobile app being showcased on the stores. */
	appName: 'Owl Reward',

	/** Registered business address shown in footer, About and Contact pages. */
	address: {
		street: 'Padonmar Street, No. B-6, Ward No. 24, Thingangyun Township',
		city: 'Yangon',
		region: 'Yangon Region',
		postalCode: '11072',
		country: 'Myanmar'
	},

	/** Customer service hotline (tel: links are generated from this). */
	phone: '+959977747333',
	/** Human-readable display form of the hotline. */
	phoneDisplay: '+959 9777-47-333',

	/** General contact email (mailto: links are generated from this). */
	email: 'contact@jkt.com.mm',

	/** Social profiles — set to null if a platform is not used. */
	social: {
		// TODO: replace with the real Facebook page URL or keep null
		facebook: null,
		// TODO: replace with the real Instagram profile URL or keep null
		instagram: null,
		// TODO: replace with the real X/Twitter profile URL or keep null
		x: null,
		// TODO: replace with the real LinkedIn page URL or keep null
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
	{ href: '/erp', label: 'Owlvyra ERP' },
	{ href: '/owl-reward', label: 'Owl Reward' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' }
] as const;
