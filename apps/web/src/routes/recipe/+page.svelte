<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData; // Data från load-funktionen
</script>

<h1>Receptsamling</h1>
{#if data.recipes && data.recipes.length > 0}
  <ul class="m-10">
    {#each data.recipes as recipe}
      <li>- <a href={`/recipe/${recipe.slug}`}>{recipe.title}</a></li>
    {/each}
  </ul>
{:else}
  <p>No recipes found.</p>
{/if}

<style>
  ul {
    list-style-type: none;
    padding: 10;
  }

  ul li {
    margin: 1em 0;
  }

  ul li a {
    text-decoration: none;
    border-bottom: 1px #303030 dotted;
  }
</style>
