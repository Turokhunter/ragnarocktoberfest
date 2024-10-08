<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data = [];
	import { Tooltip, Button } from 'flowbite-svelte';
</script>

<div class="undead-class">
	{#each data as zombie, id}
		<div
			id="tool-{id}"
			class="undead-border center h-20 min-w-32"
			style="background-color: var(--team-secondary-undead);"
		>
			<h5 class="undead text-gray-900">{zombie.name}</h5>
			<p class="text-bold">{zombie.count}</p>
		</div>
		<Tooltip triggeredBy="#tool-{id}">{zombie.description}</Tooltip>
	{/each}
</div>

<style>
	.undead-class {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.undead-border {
		border: 2px solid gray;
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		width: 40px;
	}
	.undead {
		font-size: 15px;
		font-weight: bold;
		text-align: center;
	}
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
