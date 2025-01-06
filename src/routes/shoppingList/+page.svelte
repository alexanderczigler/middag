<script lang="ts">
  import type { Ingredient } from '$lib/types/ingredient';
  import type { PageData } from './$types';

  export let data: PageData;
  const ingredients = data.ingredients as Ingredient[];
</script>

<h1>Inköpslista</h1>

{#if ingredients.length > 0}
  <ul>
    {#each ingredients as { name, quantity, unit }}
      <li>{quantity} {unit} {name}</li>
    {/each}
  </ul>
{:else}
  <p>Inga ingredienser hittades för veckomenyn.</p>
{/if}
