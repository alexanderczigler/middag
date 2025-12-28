<script lang="ts">
  import { resolve } from '$app/paths'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<h1>Recept</h1>
{#if data.recipes && data.recipes.length > 0}
  <ul class="">
    {#each data.recipes as recipe (recipe)}
      <li><a href={resolve(`/recipe/${recipe.slug}`)}>{recipe.title}</a></li>
    {/each}
  </ul>
{:else}
  <p>No recipes found.</p>
{/if}
