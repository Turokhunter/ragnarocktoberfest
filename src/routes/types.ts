export type Messages = Array<Message>;

export type Message = {
	team: 'Red' | 'Blue' | 'Yellow' | 'Green' | '';
	time: string;
	timestamp: Date;
	type: 'Major' | 'Minor';
	message: string;
};

export type dataSource = {
	[index: string]: object;
};

export type Dataset = {
	teamPoints: { red: number; blue: number; yellow: number };
	messages: Messages;
	scoreBoard: {
		act1: {
			undead: string;
		};
		act2: {
			undead: string;
		};
		all: {
			undead: string;
		};
	};
};

export type Players = {
	[index: number]: Player;
};

export type Player = {
	human: number;
	lives: number;
	playerId: number;
	teamId: number;
	timestamp: string;
};

export type Items = {
	[index: number]: Item;
};

export type Item = {
	description: string;
	itemId: number;
	name: string;
	points: number;
};

export type Teams = {
	[index: number]: Team;
};

export type Team = {
	teamId: number;
	name: string;
};
