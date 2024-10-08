<script lang="ts">
	import Scoreboard from './scoreboard.svelte';
	import UndeadCount from './undeadCount.svelte';
	import Annoucement from '../Annoucement.svelte';
	import { dataSet } from '../store';
	$: scoreboard = $dataSet.scoreBoard;

	$: messages = $dataSet.messages.filter((message: Message) => {
		return message.team === 'Green';
	});
</script>

<div class="achievements">
	<Scoreboard achivement={'Act 1: Most Tags'} winner={scoreboard.act1.undead ?? '?'} />
	<Scoreboard achivement={'Act 2: Most Tags'} winner={scoreboard.act2.undead ?? '?'} />
	<Scoreboard achivement={'All Time Tag'} winner={scoreboard.all.undead ?? '?'} />
</div>

<!-- <UndeadCount data={data.data} /> -->
<Annoucement {messages} amount={-1} />

<style>
	.achievements {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
