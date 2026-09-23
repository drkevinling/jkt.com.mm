<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();

	const stamps = [true, true, true, true, true, false, false, false] as const;
</script>

<div class="{className} relative w-[300px] select-none" aria-hidden="true">
	<div
		class="animate-owl-float rounded-[2.75rem] bg-night-950 p-2.5 shadow-[0_40px_80px_-30px_rgb(11_16_38/0.7)] ring-1 ring-white/10 dark:ring-white/25"
	>
		<div class="relative overflow-hidden rounded-[2.2rem] bg-cream-50">
			<!-- status bar -->
			<div
				class="flex items-center justify-between px-6 pt-3.5 pb-1 text-[0.65rem] font-semibold text-night-900"
			>
				<span>9:41 PM</span>
				<span class="absolute top-2.5 left-1/2 h-5 w-20 -translate-x-1/2 rounded-full bg-night-950"
				></span>
				<span class="flex items-center gap-1">
					<span class="inline-block h-2 w-3.5 rounded-[0.2rem] bg-night-900"></span>
				</span>
			</div>

			<!-- app header -->
			<div class="flex items-center gap-3 px-5 pt-3 pb-4">
				<span
					class="flex size-10 items-center justify-center rounded-2xl bg-night-900 font-display text-sm font-bold text-gold-400"
				>
					OW
				</span>
				<span class="flex flex-col leading-tight">
					<span class="text-[0.6rem] font-medium text-ink-500">Good evening</span>
					<span class="font-display text-sm font-semibold text-night-900">Aung Ko Ko</span>
				</span>
				<span
					class="relative ml-auto flex size-8 items-center justify-center rounded-full bg-cream-100"
				>
					<svg
						width="15"
						height="15"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#2c3050"
						stroke-width="2"
					>
						<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
						<path d="M13.7 21a2 2 0 0 1-3.4 0" />
					</svg>
					<span class="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-gold-500"></span>
				</span>
			</div>

			<!-- points card -->
			<div
				class="relative mx-4 overflow-hidden rounded-3xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 p-4 text-night-950"
			>
				<div class="absolute -top-8 -right-8 size-24 rounded-full bg-white/25 blur-xl"></div>
				<div class="flex items-center justify-between">
					<span class="text-[0.6rem] font-bold tracking-[0.18em] uppercase">Owl Points</span>
					<span
						class="rounded-full bg-night-950/85 px-2.5 py-1 text-[0.55rem] font-bold tracking-wide text-gold-300 uppercase"
					>
						Gold Owl Tier
					</span>
				</div>
				<p class="mt-1.5 font-display text-[1.7rem] leading-none font-bold">2,450</p>
				<p class="mt-1 text-[0.6rem] font-semibold opacity-80">550 points to Gold Owl Elite</p>
				<div class="mt-3 h-1.5 rounded-full bg-night-950/25">
					<div class="h-1.5 w-[82%] rounded-full bg-night-950/80"></div>
				</div>
			</div>

			<!-- stamp card -->
			<div class="mx-4 mt-3 rounded-3xl border border-cream-200 bg-white/80 p-4">
				<div class="flex items-center justify-between">
					<span class="font-display text-xs font-semibold text-night-900">Moonleaf Coffee</span>
					<span class="text-[0.6rem] font-semibold text-gold-700">3 more = free latte</span>
				</div>
				<div class="mt-3 grid grid-cols-8 gap-1.5">
					{#each stamps as filled, i (i)}
						<span
							class="flex aspect-square items-center justify-center rounded-full border text-night-900 {filled
								? 'border-gold-500 bg-gold-100'
								: 'border-dashed border-ink-400/40 bg-cream-50'}"
						>
							{#if filled}
								<svg width="10" height="10" viewBox="0 0 96 96">
									<circle cx="34" cy="44" r="13" fill="#fff" />
									<circle cx="62" cy="44" r="13" fill="#fff" />
									<circle cx="34" cy="44" r="6" fill="#e8a33d" />
									<circle cx="62" cy="44" r="6" fill="#e8a33d" />
								</svg>
							{/if}
						</span>
					{/each}
				</div>
			</div>

			<!-- rewards list -->
			<div class="mx-4 mt-3 mb-4 space-y-2">
				<div class="flex items-center gap-3 rounded-2xl border border-cream-200 bg-white/80 p-2.5">
					<span
						class="flex size-9 items-center justify-center rounded-xl bg-night-900 text-[0.7rem] font-bold text-gold-400"
						>20%</span
					>
					<span class="flex flex-col leading-tight">
						<span class="text-[0.68rem] font-semibold text-night-900">Weekend dine-in voucher</span>
						<span class="text-[0.55rem] text-ink-500">500 pts · expires in 5 days</span>
					</span>
					<span
						class="ml-auto rounded-full bg-gold-100 px-2.5 py-1 text-[0.55rem] font-bold text-night-900"
						>Redeem</span
					>
				</div>
				<div class="flex items-center gap-3 rounded-2xl border border-cream-200 bg-white/80 p-2.5">
					<span
						class="flex size-9 items-center justify-center rounded-xl bg-night-900 text-[0.7rem] font-bold text-gold-400"
						>2x</span
					>
					<span class="flex flex-col leading-tight">
						<span class="text-[0.68rem] font-semibold text-night-900"
							>Double points at Café Aroma</span
						>
						<span class="text-[0.55rem] text-ink-500">Campaign · this week only</span>
					</span>
					<span
						class="ml-auto rounded-full bg-night-900 px-2.5 py-1 text-[0.55rem] font-bold text-gold-300"
						>Join</span
					>
				</div>
			</div>

			<!-- bottom nav -->
			<nav class="flex items-start justify-around border-t border-cream-200 px-4 pt-2.5 pb-2">
				<div class="flex flex-col items-center gap-0.5">
					<svg
						class="text-gold-600"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M3 10 12 3l9 7" />
						<path d="M5 9.5V21h14V9.5" />
						<path d="M10 21v-6h4v6" />
					</svg>
					<span class="text-[0.5rem] font-semibold text-gold-600">Home</span>
				</div>
				<div class="flex flex-col items-center gap-0.5">
					<svg
						class="text-ink-400"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
						<rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
						<rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
						<rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
					</svg>
					<span class="text-[0.5rem] font-medium text-ink-400">Cards</span>
				</div>
				<div class="flex flex-col items-center gap-0.5">
					<svg
						class="text-ink-400"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M3 7V5a2 2 0 0 1 2-2h2" />
						<path d="M17 3h2a2 2 0 0 1 2 2v2" />
						<path d="M21 17v2a2 2 0 0 1-2 2h-2" />
						<path d="M7 21H5a2 2 0 0 1-2-2v-2" />
						<path d="M7 12h10" />
					</svg>
					<span class="text-[0.5rem] font-medium text-ink-400">Scan</span>
				</div>
				<div class="flex flex-col items-center gap-0.5">
					<svg
						class="text-ink-400"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect x="3" y="8" width="18" height="4" rx="1" />
						<path d="M12 8v13" />
						<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
						<path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
					</svg>
					<span class="text-[0.5rem] font-medium text-ink-400">Rewards</span>
				</div>
				<div class="flex flex-col items-center gap-0.5">
					<svg
						class="text-ink-400"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="12" cy="8" r="4" />
						<path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
					</svg>
					<span class="text-[0.5rem] font-medium text-ink-400">Profile</span>
				</div>
			</nav>
			<div class="mx-auto mt-1 mb-2.5 h-1 w-24 rounded-full bg-night-950/20"></div>
		</div>
	</div>
</div>
