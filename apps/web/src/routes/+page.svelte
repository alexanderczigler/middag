<script lang="ts">
  import type { Recipe } from '$lib/types';
  import type { PageData } from './$types';

  export let data: PageData;

  let todayRecipe: Recipe | undefined = undefined;

  if (data.menu[data.date]) {
    todayRecipe = data.recipes.find((recipe) => recipe.slug === data.menu[data.date]);
  }
</script>

<h1>{data.date}</h1>
{#if todayRecipe}
  <h2>Dagens</h2>
  <a href={`/recipe/${todayRecipe.slug}`}>{todayRecipe.title}</a>
{/if}
