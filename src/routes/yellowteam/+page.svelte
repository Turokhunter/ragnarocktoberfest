<script lang="ts">
	import Team from '../Team.svelte';
	import Annoucement from '../Annoucement.svelte';
	import type { Message } from './../types';
	import { dataSet } from '../store';
	$: messages = $dataSet.messages.filter((message: Message) => {
		return message.team === 'Yellow';
	});
</script>

<Team name="Yellow" score={$dataSet.teamPoints.yellow} order="row" />
<Annoucement {messages} amount={-1} />

<style>
</style>
