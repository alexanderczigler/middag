<script lang="ts">
  import type { Ingredient } from '$lib/types/ingredient';
  import type { PageData } from './$types';

  export let data: PageData;
  const ingredients = data.ingredients as Ingredient[];

  // Lokal state för avkryssade ingredienser i inköpslistan
  let checkedItems: Set<string> = new Set();

  // "Alltid hemma"-ingredienser
  const alwaysAtHome = [
    'salt',
    'peppar',
    'olivolja',
    'socker',
    'mjöl',
    'jasminris',
    'äpplen',
    'bananer',
    'duschtvål',
    'schampo',
    'kleenex'
  ];

  // Funktion för att toggla avkryssning
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
  <ul class="shopping-list">
    {#each ingredients as { name, quantity, unit }}
      <li class="shopping-item">
        <label>
          <input type="checkbox" on:change={() => toggleChecked(name)} />
          <span class:checked={checkedItems.has(name)}>
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

<h2>Alltid hemma</h2>
<ul class="always-home-list">
  {#each alwaysAtHome as item}
    <li class="always-home-item">{item}</li>
  {/each}
</ul>
