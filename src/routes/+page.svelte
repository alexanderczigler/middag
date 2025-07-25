<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  const today = new Date().toISOString().split('T')[0];

  const upcomingRecipes = Object.entries(data.menu)
    .map(([date, slug]) => {
      const recipe = data.recipes.find((recipe) => recipe.slug === slug);
      return { date, recipe };
    })
    .filter((item) => item.recipe);

  const todayRecipe = upcomingRecipes.find((item) => item.date === today);
  const otherRecipes = upcomingRecipes;
</script>

<h1>Meny</h1>

{#if todayRecipe}
  <p>
    Dagens: <a href={`/recipe/${todayRecipe.recipe?.slug}`}>{todayRecipe.recipe?.title}</a>.
  </p>
{/if}

<h2>Planering</h2>
<ul>
  {#each otherRecipes as { date, recipe }: { date: string, recipe: import('$lib/types').Recipe }}
    {#if recipe}
      <li>
        <strong>{date}:</strong>
        <a href={`/recipe/${recipe.slug}`}>{recipe.title}</a>
      </li>
    {/if}
  {/each}
</ul>
