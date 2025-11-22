<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Recipe } from '$lib/types/recipe';
    import { stringify } from 'vitest/internal/browser'
  import type { PageData } from './$types';

  export let data: PageData;

  const today = new Date().toISOString().split('T')[0];

  let days: string[] = []

  for (const day of Object.keys(data.menu)) {
    console.log(day)
    days.push(day)
  }

  const upcomingRecipes = Object.entries(data.menu)
    .map(([date, slug]) => {
      const recipe = data.recipes.find((recipe: Recipe) => recipe.slug === slug);
      return { date, recipe };
    })
    .filter((item) => item.recipe);

  const todayRecipe = upcomingRecipes.find((item) => item.date === today);
  const otherRecipes = upcomingRecipes;
</script>

<h1>Meny</h1>

{#if todayRecipe}
  <p>
    Dagens: <a href={resolve(`/recipe/${todayRecipe.recipe?.slug}`)}>{todayRecipe.recipe?.title}</a
    >.
  </p>
{/if}

<h2>Planering</h2>
<ul>
  {#each days as day}
    {#if data.menu[day]}
      {#each data.menu[day] as recipe}
          {#if recipe}
            <li>
              <strong>{day}:</strong>
              <a href={resolve(`/recipe/${recipe.}`)}>{recipe.title}</a>
            </li>
          {/if}
      {/each}
    {/if}
  {/each}
</ul>
