# Middag

TLDR; Recipe collection + weekly dinner planner + grocery shopping list generator.

I used to plan my weekly grocery shopping in Google Sheets. I started working on this because I wanted a simple way to collect my family's favourite recipes and keep them close to where we have our weekly dinner menu planned. In addition to this, I thought it would be nice to also get an automatic grocery shopping list generated from the planned menu.

The dinner menu is hard coded in `./src/getMenu.ts`. So there is really little magic going on.

If you want to use it, feel free to fork the project. A tip is to host it in GitHub Pages, Vercel or similar.

## Running

```shell
nvm install && npm use
npm install
npm run dev -- --open
```

## Recipes

When you have modified the recipe collection, run `npm run generate` to update the Recipe type.
