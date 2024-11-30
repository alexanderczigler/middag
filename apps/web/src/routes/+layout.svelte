<script lang="ts">
	import '../app.css';
	const { children } = $props();
</script>

<ul>
	<li>
		<a href="/">Meny</a>
		<a href="/shoppingList">Inköpslista</a>
		<a href="/recipe">Recept</a>
	</li>
</ul>

<hr />

{@render children()}
