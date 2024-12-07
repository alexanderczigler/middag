<script lang="ts">
  import '../app.css';
  const { children } = $props();
</script>

<ul class="menu">
  <li>
    <a href="/">Meny</a>
  </li>
  <li>
    <a href="/shoppingList">Inköpslista</a>
  </li>
  <li>
    <a href="/recipe">Recept</a>
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
</style>
