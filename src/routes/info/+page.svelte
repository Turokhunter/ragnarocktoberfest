<script lang="ts">
	import { Card, Badge } from 'flowbite-svelte';
	import items from '$lib/data/gameItems.json';
	const tagColor = {
		Permanent: 'green',
		'One Time Use': 'red',
		Upgradable: 'purple',
		'Chapter Long': 'yellow'
	};
</script>

<h2 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Undead Upgrades</h2>

{#each items.undeadUpgrades as upgrade}
	<Card padding="xl" img="">
		<div class="card">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{upgrade.name}
			</h5>
			<div class="tags">
				{#each upgrade.tags as tag}
					<Badge color={tagColor[tag]}>{tag}</Badge>
				{/each}
			</div>
			<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
				{upgrade.description}
			</p>
		</div>
	</Card>
{/each}

<h2 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Human Upgrades</h2>
<div class="cards">
	{#each items.humanUpgrades as upgrade}
		<Card img="">
			<div class="card">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{upgrade.name}
				</h5>
				<div class="tags">
					{#each upgrade.tags as tag}
						<Badge color={tagColor[tag]}>{tag}</Badge>
					{/each}
				</div>
				<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
					{upgrade.description}
				</p>
			</div>
		</Card>
	{/each}
</div>
<h2 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Items</h2>
<div class="cards">
	{#each items.items as item}
		<Card img="">
			<div class="card">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{item.name}
				</h5>
				<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
					{item.description}
				</p>
			</div>
		</Card>
	{/each}
</div>

<style>
	.cards {
		display: flex;
		flex-wrap: wrap;
		/* display: grid;
		grid-template-columns: 1fr 1fr 1fr; */
		gap: 1em;
	}
	.card {
		min-width: 300px;
		min-height: 200px;
	}

	.tags {
		display: flex;
		gap: 0.4em;
	}
</style>
