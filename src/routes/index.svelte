<script>
	import { user } from '$lib/database//sessionStore';
	import { supabase } from '$lib/database//supabaseClient';
	import Auth from '$lib/database//Auth.svelte';
	import Profile from '$lib/database//Profile.svelte';
	import FillerCards from '../components/filler/FillerCards.svelte';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

{#if $user}
	<Profile />
{:else}
	<Auth />
{/if}
<FillerCards />
