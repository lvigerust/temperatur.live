<script>
	import { user } from '$lib/database//sessionStore';
	import { supabase } from '$lib/database//supabaseClient';
	import { transitions } from '$lib/stores/transitions';
	import { fly } from 'svelte/transition';
	import Auth from '$lib/database//Auth.svelte';
	import Profile from '$lib/database//Profile.svelte';
	import FillerCards from '../components/fillers/FillerCards.svelte';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

<div
	class="test"
	in:fly={{ x: -$transitions.dir, delay: $transitions.dur }}
	out:fly={{ x: -$transitions.dir, duration: $transitions.dur }}
>
	{#if $user}
		<Profile />
	{:else}
		<Auth />
	{/if}
	<FillerCards />
</div>
