<script>
	import '../app.css';
	import FillerCards from '../components/fillers/FillerCards.svelte';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<main class="container mx-auto px-4">
	<slot />
</main>
<Footer />
