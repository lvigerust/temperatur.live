<script>
	import { user } from '$lib/database//sessionStore';
	import { supabase } from '$lib/database//supabaseClient';
	import Auth from '$lib/database//Auth.svelte';
	import Profile from '$lib/database//Profile.svelte';
	import FillerCards from '../components/fillers/FillerCards.svelte';
	import { fly } from 'svelte/transition';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

<div in:fly={{ x: -500, delay: 400 }} out:fly={{ x: -500 }}>
	{#if $user}
		<Profile />
	{:else}
		<Auth />
	{/if}
	<FillerCards />
</div>
