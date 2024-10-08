import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Dataset } from './types';

export const dataSet: Writable<Dataset> = writable({
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
});
