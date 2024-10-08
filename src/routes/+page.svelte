<script lang="ts">
	import TeamPage from './Team.svelte';
	import Annoucement from './Annoucement.svelte';
	import type { Message } from './types';
	import { dataSet } from './store';

	// Team points -- Done
	// Each mission completiness
	// General Message information
	// Per Team
	// Team points
	// Each mission completiness
	// Information on the this specific team
	// Award winners
	// Type of each undead
	$: messages = $dataSet.messages.filter((message: Message) => {
		return message.type === 'Major';
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="General Info on teams" />
</svelte:head>

<section>
	<!-- Victory Points -->
	<div class="row">
		<TeamPage name={'Red'} score={$dataSet.teamPoints['red']} />
		<TeamPage name={'Blue'} score={$dataSet.teamPoints['blue']} />
		<TeamPage name={'Yellow'} score={$dataSet.teamPoints['yellow']} />
	</div>
	<!-- Annoucments -->
	<Annoucement {messages} />
	<!-- Zombie breakout -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.row {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
</style>
