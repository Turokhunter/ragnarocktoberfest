<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<header>
	<Navbar>
		<NavBrand href="/">
			<img src="rag-logo-24.jpg" class="me-3 h-6 sm:h-9" alt="Ragnarocktoberfest logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>Ragnarocktoberfest</span
			>
		</NavBrand>
		<NavHamburger />
		<NavUl>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/redteam">Red Team</NavLi>
			<NavLi href="/blueteam">Blue Team</NavLi>
			<NavLi href="/yellowteam">Yellow Team</NavLi>
			<NavLi href="/undead">Undead</NavLi>
			<NavLi href="/info">Ingame Guide</NavLi>
			<NavLi href="/rules">Rules</NavLi>
			<NavLi href="/schedule">Schedule</NavLi>
		</NavUl>
	</Navbar>
</header>

<style>
</style>
