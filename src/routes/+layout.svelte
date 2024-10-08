<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	import { dataSet } from './store';
	import type {
		Dataset,
		Message,
		Players,
		Player,
		Teams,
		Team,
		Items,
		Item,
		dataSource
	} from './types';
	/** @type {import('./$types').PageData} */
	export let data;

	function getTeam(team: Team) {
		switch (team.name) {
			case 'Team blue':
				return 'Blue';
			case 'Team yellow':
				return 'Yellow';
			case 'Team red':
				return 'Red';
			case 'Team green':
				return 'Green';
			default:
				return '';
		}
	}

	function getTimeStr(timestamp: string) {
		const timeStamp = new Date(timestamp);
		const pstDate = new Date(
			timeStamp.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
		);
		const hours = pstDate.getHours();
		const minutes = pstDate.getMinutes().toString().padStart(2, '0');
		return `${hours}:${minutes} PST`;
	}

	function processData(data: dataSource) {
		let dataSet: Dataset = {
			teamPoints: { red: 0, blue: 0, yellow: 0 },
			messages: [],
			scoreBoard: {
				act1: {
					undead: ''
				},
				act2: {
					undead: ''
				},
				all: {
					undead: ''
				}
			}
		};
		if (data === undefined) {
			return dataSet;
		}

		Object.entries(data.pointsPerTeam).forEach(([, elem]) => {
			switch (elem.name) {
				case 'blue':
					dataSet.teamPoints.blue = elem.points;
					return;
				case 'yellow':
					dataSet.teamPoints.yellow = elem.points;
					return;
				case 'red':
					dataSet.teamPoints.red = elem.points;
					return;
			}
		});
		const players: Players = {};
		const items: Items = {};
		const teams: Teams = {};
		// convert players into dict
		Object.values(data.players).forEach((player: Player) => {
			players[player.playerId] = player;
		});
		// convert items into dict
		Object.values(data.items).forEach((item: Item) => {
			items[item.itemId] = item;
		});

		Object.values(data.teams).forEach((team: Team) => {
			teams[team.teamId] = team;
		});

		Object.values(data.acquired).forEach((elem) => {
			let newMessage: Message = {};
			// {
			// 	message: '',
			// 	team: '',
			// 	time: '',
			// 	timestamp: new Date(),
			// 	type: 'Major'
			// };
			const player = players[elem.playerId];
			const item = items[elem.itemId];
			if (player === undefined || item === undefined) {
				return;
			}
			newMessage.timestamp = new Date(elem.timestamp);
			newMessage.time = getTimeStr(elem.timestamp);
			newMessage.team = getTeam(teams[player.teamId]);
			newMessage.message = `${player.name} acquired ${item.points} points from ${item.name}`;
			newMessage.type = 'Minor';
			dataSet.messages.push(newMessage);
		});

		Object.values(data.tag).forEach((elem) => {
			let newMessage: Message = {};
			const player = players[elem.playerId];
			const taggedPlayer = players[elem.taggedPlayerId];
			newMessage.timestamp = new Date(elem.tagTime);
			newMessage.time = getTimeStr(elem.tagTime);
			newMessage.team = 'Green';
			newMessage.message = `${player.name} tagged ${taggedPlayer.name}.`;
			newMessage.type = 'Minor';
			dataSet.messages.push(newMessage);
		});
		const mostTags = { act1: {}, act2: {}, all: {} };
		Object.values(data.tag).forEach((elem) => {
			const time = new Date(elem.tagTime);
			const pstDate = new Date(time.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
			const hours = pstDate.getHours();
			if (hours < 16) {
				if (elem.playerId in mostTags.act1) {
					mostTags.act1[elem.playerId] += 1;
				} else {
					mostTags.act1[elem.playerId] = 1;
				}
			} else {
				if (elem.playerId in mostTags.act2) {
					mostTags.act2[elem.playerId] += 1;
				} else {
					mostTags.act2[elem.playerId] = 1;
				}
			}
			if (elem.playerId in mostTags.all) {
				mostTags.all[elem.playerId] += 1;
			} else {
				mostTags.all[elem.playerId] = 1;
			}
		});
		dataSet.scoreBoard.act1.undead =
			players[Object.entries(mostTags.act1).reduce((a, b) => (a[1] > b[1] ? a : b))[0]].name;
		dataSet.scoreBoard.act1.undead =
			players[Object.entries(mostTags.act2).reduce((a, b) => (a[1] > b[1] ? a : b))[0]].name;
		dataSet.scoreBoard.act1.undead =
			players[Object.entries(mostTags.all).reduce((a, b) => (a[1] > b[1] ? a : b))[0]].name;

		dataSet.messages.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
		// Get Best Taggers
		return dataSet;
	}

	console.log(data);
	$dataSet = processData(data.data);
</script>

<div class="app">
	<Header></Header>

	<main>
		<slot></slot>
	</main>

	<footer>
		<p class="text-gray-400">
			visit <a href="https://www.ragnarocktoberfest.com/">www.ragnarocktoberfest.com</a> to learn about
			Ragnarocktoberfest
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
