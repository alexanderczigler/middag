<script lang="ts">
  import type { Ingredient } from '$lib/types/ingredient';
  import type { PageData } from './$types';

  export let data: PageData;
  const ingredients = data.ingredients as Ingredient[];
  const pantry = data.pantry as string[];
  const sides = data.sides as string[];

  // Lokal state för avkryssade ingredienser i inköpslistan
  let checkedItems: Set<string> = new Set();

  // Funktion för att toggla avkryssning
  function toggleChecked(itemName: string) {
    if (checkedItems.has(itemName)) {
      checkedItems.delete(itemName);
    } else {
      checkedItems.add(itemName);
    }
  }
</script>

<h1>Veckohandling</h1>

<h2>Recept</h2>
{#if ingredients.length > 0}
  <ul class="shopping-list">
    {#each ingredients as { name, quantity, unit }}
      <li class="shopping-item">
        <label>
          <input type="checkbox" on:change={() => toggleChecked(name)} />
          <span class:checked={checkedItems.has(name)}>
            {name}
            ({quantity}
            {unit})
          </span>
        </label>
      </li>
    {/each}
  </ul>
{:else}
  <p>Inga ingredienser hittades för veckomenyn.</p>
{/if}

<h2>Tillbehör</h2>
<ul class="sides">
  {#each sides as item}
    <li class="sides-item">
      <label>
        <input type="checkbox" on:change={() => toggleChecked(item)} />
        {item}
      </label>
    </li>
  {/each}
</ul>

<h2>Skafferi</h2>
<ul class="pantry">
  {#each pantry as item}
    <li class="pantry-item">
      <label>
        <input type="checkbox" on:change={() => toggleChecked(item)} />
        {item}
      </label>
    </li>
  {/each}
</ul>

<style>
  .pantry {
    text-transform: capitalize;
  }
</style>
