<script lang="ts">
  import { page } from '$app/stores';
  import '../app.css';

  const { children } = $props();
</script>

<ul class="menu">
  <li>
    <a href="/" class:active={$page.url.pathname === '/'}>Meny</a>
  </li>
  <li>
    <a href="/shoppingList" class:active={$page.url.pathname === '/shoppingList'}>Inköpslista</a>
  </li>
  <li>
    <a href="/recipe" class:active={$page.url.pathname.startsWith('/recipe')}>Recept</a>
  </li>
</ul>

<hr />

{@render children()}

<style>
  ul.menu {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: baseline;
    align-content: stretch;
  }

  ul.menu li {
    list-style-type: none;
    margin: 1em 0;
  }

  ul.menu a.active {
    font-weight: bold;
  }
</style>
