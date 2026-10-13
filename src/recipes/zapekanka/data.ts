import type { RecipeData } from "../types";

export const zapekanka: RecipeData = {
  slug: "zapekanka",
  title: { ru: "Творожная запеканка", en: "Zapekanka" },
  subtitle: { ru: "", en: "baked tvorog pudding" },
  ingredients: [
    { qty: { ru: "0,5 кг", en: "500 g" }, name: { ru: "творог", en: "tvorog (farmer’s cheese)" } },
    { qty: { ru: "75 г (2 ст. ложки)", en: "75 g (2 tbsp)" }, name: { ru: "крахмала", en: "starch" } },
    { qty: { ru: "4", en: "4" }, name: { ru: "яйца", en: "eggs" } },
    {
      qty: { ru: "100 г (3 ст. ложки)", en: "100 g (3 tbsp)" },
      name: { ru: "сахарного песка или заменитель сахара", en: "granulated sugar or a sugar substitute" },
    },
    { qty: { ru: "80 г (2 ст. ложки)", en: "80 g (2 tbsp)" }, name: { ru: "сметаны", en: "sour cream" } },
    { name: { ru: "ваниль", en: "vanilla" } },
    { name: { ru: "лимонная цедра", en: "lemon zest" } },
    { qty: { ru: "щепотка", en: "a pinch" }, name: { ru: "соли", en: "salt" } },
  ],
  steps: [],
  notes: [
    {
      ru: "«Я готовлю запеканку по этому рецепту, и сахар заменяю на стевию.»",
      en: "“I make zapekanka with this recipe, and I swap the sugar for stevia.”",
    },
  ],
};
