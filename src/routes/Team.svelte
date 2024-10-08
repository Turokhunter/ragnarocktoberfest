<script lang="ts">
	import Mission from './Mission.svelte';
	export let name: string = '';
	export let score: number = 0;
	export let order: 'grid' | 'row' = 'grid';
</script>

<div class="team-info {order === 'grid' ? 'flex-grow' : 'pb-4'}">
	<div
		class="team-border team-card font-bold"
		style="background-color: var(--team-primary-{name.toLowerCase()});"
	>
		<h5 class="team center text-gray-800">{name}</h5>
		<p class="center text-xl font-bold">VP: {score}</p>
	</div>
	<div class={order === 'row' ? 'row' : 'grid'}>
		<Mission team={name} />
		<Mission team={name} missionName="Mission 2" />
		<Mission team={name} missionName="Mission 3" placement={1} />
		<Mission team={name} missionName="Mission 4" placement={2} />
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
		padding-bottom: 1rem;
	}
	.team-info {
		display: flex;
		flex-direction: column;
	}
	.flex-grow {
		flex-grow: 1;
	}

	.team {
		font-size: 30px;
	}
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.row {
		padding-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.grid {
		padding-top: 15px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 0.5rem 0.5rem;
	}
</style>
