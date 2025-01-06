<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  // Skapa en lista av kommande recept baserat på menyn
  let upcomingRecipes = Object.entries(data.menu)
    .map(([date, slug]) => {
      const recipe = data.recipes.find((recipe) => recipe.slug === slug);
      return { date, recipe };
    })
    .filter((item) => item.recipe); // Filtrera bort eventuella saknade recept
</script>

<h1>Meny</h1>

<ul>
  {#each upcomingRecipes as { date, recipe }: { date: string, recipe: Recipe }}
    {#if recipe}
      <li>
        <strong>{date}:</strong>
        <a href={`/recipe/${recipe.slug}`}>{recipe.title}</a>
      </li>
    {/if}
  {/each}
</ul>
