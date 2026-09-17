import { site } from '$lib/config/site';

export const prerender = true;

export async function GET() {
	const body = `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
}
