<!-- generated-by: Claude | source: recipe book request | purpose: project README -->
# Семейные рецепты · Family recipes

Family recipes, each on its own hand-designed page, in Russian and English.

Live: https://miapritchina.github.io/recipebook/

| Recipe | Look |
|---|---|
| Шарлотка | Khokhloma — gold travka and rowan berries on black lacquer |
| Творожная запеканка | Rushnyk — red/black cross-stitch on linen |
| Морковь по-корейски | Petrykivka — flame-orange blooms on carrot-top green |
| Квашеная капуста | Don Cossack — the Don flag's sky, steppe and earth |

Home page: Gzhel cobalt on porcelain.

## Develop

```
npm install
npm run dev
```

Pushing to `main` builds and deploys to GitHub Pages (`.github/workflows/pages.yml`).

## Add a recipe

1. `src/recipes/<slug>/data.ts` — the recipe in `ru` + `en`.
2. `src/recipes/<slug>/Page.tsx` + CSS — its own art and palette, wrapped in `RecipePage`.
3. Register it in `src/recipes/index.ts` and give it a tile style in `src/pages/home.css`.
