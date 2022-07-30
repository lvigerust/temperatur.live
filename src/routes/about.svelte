<script>
	import FillerHero from '../components/fillers/FillerHero.svelte';
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ x: 500, delay: 400 }} out:fly={{ x: 500 }}>
	<FillerHero />
</div>
