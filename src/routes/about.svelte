<script>
	import { transitions } from '$lib/stores/transitions';
	import { fly } from 'svelte/transition';
	import FillerHero from '../components/fillers/FillerHero.svelte';
</script>

<div
	class="test"
	in:fly={{ x: $transitions.dir, delay: $transitions.dur }}
	out:fly={{ x: $transitions.dir, duration: $transitions.dur }}
>
	<FillerHero />
</div>
