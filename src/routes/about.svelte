<script>
	import { transitions } from '$lib/stores/transitions';
	import { fly } from 'svelte/transition';
</script>

<div
	in:fly={{ x: $transitions.dir, delay: $transitions.dur }}
	out:fly={{ x: $transitions.dir, duration: $transitions.dur }}
/>
