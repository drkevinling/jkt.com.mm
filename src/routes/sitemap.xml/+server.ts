import { site } from '$lib/config/site';

export const prerender = true;

const routes = ['', '/owl-reward', '/about', '/contact', '/privacy-policy', '/terms'] as const;

export async function GET() {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
	.map(
		(route) =>
			`\t<url>\n\t\t<loc>${site.url}${route}</loc>\n\t\t<changefreq>monthly</changefreq>\n\t</url>`
	)
	.join('\n')}
</urlset>
`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
