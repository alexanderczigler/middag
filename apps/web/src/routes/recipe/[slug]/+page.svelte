<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { recipe } = data;
</script>

<main>
  <h1>{recipe.title}</h1>

  <h2>Ingredients</h2>
  <ul>
    {#each recipe.ingredients as ingredient}
      <li>{ingredient.quantity} {ingredient.unit} {ingredient.name}</li>
    {/each}
  </ul>

  <h2>Instructions</h2>
  <ol>
    {#each recipe.instructions as step}
      <li>{step}</li>
    {/each}
  </ol>

  {#if recipe.sides}
    <h3>Sides</h3>
    <ul>
      {#each recipe.sides as side}
        <li>{side}</li>
      {/each}
    </ul>
  {/if}
</main>
