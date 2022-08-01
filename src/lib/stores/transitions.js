import { writable } from 'svelte/store';

export const transitions = writable({
	dir: 250,

	dur: 350,
	dur1: 350 + 150,
	dur2: 350 + 150 + 150,
	dur3: 350 + 150 + 150 + 150
});
