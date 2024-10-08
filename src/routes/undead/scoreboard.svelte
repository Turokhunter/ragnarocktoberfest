<script lang="ts">
	export let achivement: string = '';
	export let winner: string = '';
</script>

<div class="team-info">
	<div
		class="team-border team-card font-bold"
		style="background-color: var(--team-primary-undead);"
	>
		<h5 class="team center text-gray-800">{achivement}</h5>
		{#if winner === ''}
			<p class="center text-xl font-bold">?</p>
		{:else}
			<p class="center text-xl font-bold">{winner}</p>
		{/if}
	</div>
</div>

<style>
	.team-border {
		border: 3px solid gray;
		border-radius: 0.5rem;
	}
	.team-card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1rem;
		margin: 1rem;
		min-width: 15rem;
		min-height: 10rem;
	}
	.team-info {
		display: flex;
		flex-direction: column;
	}
	.team {
		font-size: 30px;
	}
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
