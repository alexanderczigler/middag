<script lang="ts">
  import { resolve } from '$app/paths'
  import type { Recipe } from '$lib/types/recipe'
  import type { PageData } from './$types'

  export let data: PageData

  const today = new Date().toISOString().split('T')[0]

  function resolveRecipes(slugs: string[]) {
    const countMap = new Map<string, number>()
    for (const slug of slugs) {
      countMap.set(slug, (countMap.get(slug) ?? 0) + 1)
    }
    return [...countMap.entries()]
      .map(([slug, count]) => {
        const recipe = data.recipes.find((r: Recipe) => r.slug === slug)
        return recipe ? { recipe, count } : null
      })
      .filter(Boolean) as { recipe: Recipe; count: number }[]
  }

  const upcomingRecipes = Object.entries(data.menu)
    .map(([date, slugs]) => ({ date, recipes: resolveRecipes(slugs) }))
    .filter((item) => item.recipes.length > 0)

  const todayRecipes = upcomingRecipes.find((item) => item.date === today)
  const otherRecipes = upcomingRecipes
</script>

<h1>Meny</h1>

{#if todayRecipes}
  <p>
    Dagens:
    {#each todayRecipes.recipes as { recipe, count }, i (recipe.slug)}
      {#if i > 0},
      {/if}<a href={resolve(`/recipe/${recipe.slug}`)}>{recipe.title}</a>
      {#if count > 1}
        ({count}x){/if}
    {/each}.
  </p>
{/if}

<h2>Planering</h2>
<ul>
  {#each otherRecipes as { date, recipes } (date)}
    <li>
      <strong>{date}</strong>
      <ul>
        {#each recipes as { recipe, count } (recipe.slug)}
          <li>
            <a href={resolve(`/recipe/${recipe.slug}`)}>{recipe.title}</a>
            {#if count > 1}
              ({count}x){/if}
          </li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>

<style>
  ul ul li::before {
    content: '›';
    margin-right: 0.4em;
    opacity: 0.4;
  }
</style>
