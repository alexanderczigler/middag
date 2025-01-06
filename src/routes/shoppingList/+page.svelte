<script lang="ts">
  import type { Ingredient } from '$lib/types/ingredient';
  import type { PageData } from './$types';

  export let data: PageData;
  const ingredients = data.ingredients as Ingredient[];

  // Lokal state för avkryssade ingredienser
  let checkedItems: Set<string> = new Set();

  // Funktion för att toggla avkryssningsstatus
  function toggleChecked(itemName: string) {
    if (checkedItems.has(itemName)) {
      checkedItems.delete(itemName);
    } else {
      checkedItems.add(itemName);
    }
  }
</script>

<h1>Inköpslista</h1>

{#if ingredients.length > 0}
  <ul>
    {#each ingredients as { name, quantity, unit }}
      <li>
        <label>
          <input type="checkbox" on:change={() => toggleChecked(name)} />
          <span
            style="text-decoration: {checkedItems.has(name)
              ? 'line-through'
              : 'none'}; color: {checkedItems.has(name) ? 'gray' : 'inherit'};"
          >
            {quantity}
            {unit}
            {name}
          </span>
        </label>
      </li>
    {/each}
  </ul>
{:else}
  <p>Inga ingredienser hittades för veckomenyn.</p>
{/if}
