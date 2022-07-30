<script>
	let message =
		'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.';
	let typedChars = '';
	let index = 0;
	let typewriter;

	const typeChar = () => {
		if (index < message.length) {
			typedChars += message[index];
			index += 1;
		} else {
			clearInterval(typewriter);
		}
	};

	const typing = () => (typewriter = setInterval(typeChar, 15));

	typing();
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Hello there</h1>
			<p class="py-6">
				{typedChars}
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>
