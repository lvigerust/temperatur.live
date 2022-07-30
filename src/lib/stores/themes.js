import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const darkTheme = 'forest';
export const lightTeme = 'cupcake';

export const theme = writable(browser && (localStorage.getItem('theme') || darkTheme));
theme.subscribe((val) => browser && localStorage.setItem('theme', val));