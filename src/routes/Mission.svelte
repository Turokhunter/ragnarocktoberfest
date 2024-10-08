<script lang="ts">
	export let team: string = '';
	export let missionName: string = '';
	export let placement: Number = 0;
</script>

<div
	class="mission-border center h-20 min-w-32"
	style="background-color: var(--team-secondary-{team.toLowerCase()});"
>
	{#if missionName === ''}
		<h2 class="text-3xl font-bold">?</h2>
	{:else}
		<h5 class="mission center text-gray-900">{missionName}</h5>
		{#if placement === 0}
			<p>?</p>
		{:else if placement === 1}
			<p>1st</p>
		{:else if placement === 2}
			<p>2nd</p>
		{:else if placement === 3}
			<p>3st</p>
		{/if}
	{/if}
</div>

<style>
	.mission-border {
		border: 2px solid gray;
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
	}
	.mission {
		font-size: 20px;
		font-weight: bold;
	}
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
