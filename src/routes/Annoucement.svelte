<script lang="ts">
	import type { Messages } from './types';
	export let messages: Messages;
	export let amount: number = 5;
	if (amount !== -1) {
		messages = messages.slice(0, amount);
	}
</script>

<div class="annouc-page bg-gray-900 text-gray-400">
	<h2>Annoucements:</h2>
	{#each messages as message}
		<div class="mess-info">
			<div class="mess-time">
				{message.time}:
			</div>
			<div>
				{message.message}
			</div>
		</div>
	{/each}
</div>

<style>
	.annouc-page {
		width: 100%;
		min-height: 1rem;
		/* background-color: gray; */
		padding-left: 0.5rem;
		border-radius: 0.25rem;
	}
	.mess-info {
		display: flex;
	}
	.mess-time {
		display: flex;
		padding-right: 4px;
		/* justify-content: center; */
		/* align-items: center; */
	}
</style>
