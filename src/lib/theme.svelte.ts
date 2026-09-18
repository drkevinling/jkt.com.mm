import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function initialTheme(): Theme {
	if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
		return 'dark';
	}
	return 'light';
}

const theme = $state({ current: initialTheme() });

export function isDark(): boolean {
	return theme.current === 'dark';
}

function apply(next: Theme): void {
	document.documentElement.classList.toggle('dark', next === 'dark');
}

function savedTheme(): Theme | null {
	try {
		const saved = localStorage.getItem(STORAGE_KEY);
		return saved === 'dark' || saved === 'light' ? saved : null;
	} catch {
		return null;
	}
}

export function toggle(): void {
	theme.current = theme.current === 'dark' ? 'light' : 'dark';
	apply(theme.current);
	try {
		localStorage.setItem(STORAGE_KEY, theme.current);
	} catch {
		// storage unavailable — keep the choice for this session only
	}
}

if (browser) {
	matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
		if (savedTheme() !== null) return;
		theme.current = event.matches ? 'dark' : 'light';
		apply(theme.current);
	});
}
