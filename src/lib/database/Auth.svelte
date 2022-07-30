<script>
	import { supabase } from '$lib/database/supabaseClient';

	let loading = false;
	let email;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<form on:submit|preventDefault={handleLogin} class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left lg:ml-6">
			<h1 class="text-5xl font-bold">Login now!</h1>
			<p class="py-6">Sign in via magic link with your email below</p>
		</div>
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<div class="form-control">
					<label class="label" for="email">
						<span class="label-text">Email</span>
					</label>
					<input type="email" placeholder="email" class="input input-bordered" bind:value={email} />
				</div>

				<div class="form-control mt-6">
					<input
						type="submit"
						class="btn btn-primary"
						value={loading ? 'Loading' : 'Send magic link'}
						disabled={loading}
					/>
				</div>
			</div>
		</div>
	</div>
</form>
