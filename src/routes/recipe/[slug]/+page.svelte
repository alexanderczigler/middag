<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { recipe } = data;
</script>

<h1>{recipe.title}</h1>

<h2>Ingredienser</h2>
<ul>
  {#each recipe.ingredients as { name, quantity, unit }}
    <li>{name} ({quantity} {unit})</li>
  {/each}
</ul>

{#if recipe.pantry}
  <h3>Från skafferiet</h3>
  <ul>
    {#each recipe.pantry as item}
      <li>{item}</li>
    {/each}
  </ul>
{/if}

{#if recipe.sides}
  <h3>Passande tillbehör</h3>
  <ul>
    {#each recipe.sides as side}
      <li>{side}</li>
    {/each}
  </ul>
{/if}

<h2>Instruktioner</h2>
<ol>
  {#each recipe.instructions as step}
    <li>{step}</li>
  {/each}
</ol>

<style>
  ul {
    list-style-type: none;
    padding: 0;
    @apply ml-4 mr-4;
  }

  li {
    margin: 0.5em 0;
  }

  ol {
    list-style: none;
    counter-reset: item;
    @apply ml-4 mr-4;
  }
  ol li {
    counter-increment: item;
    margin-bottom: 5px;
  }
  ol li:before {
    margin-right: 10px;
    content: counter(item);
    background: lightblue;
    border-radius: 100%;
    color: white;
    width: 1.2em;
    text-align: center;
    display: inline-block;
  }
</style>
