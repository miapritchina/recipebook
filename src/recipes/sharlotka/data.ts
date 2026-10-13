import type { RecipeData } from "../types";

export const sharlotka: RecipeData = {
  slug: "sharlotka",
  title: { ru: "Шарлотка", en: "Sharlotka" },
  subtitle: { ru: "яблочный пирог", en: "apple sponge cake" },
  meta: { ru: "160 °C · 65–70 минут", en: "160 °C / 320 °F · 65–70 minutes" },
  ingredients: [
    { qty: { ru: "3", en: "3" }, name: { ru: "яйца", en: "eggs" } },
    { qty: { ru: "1 стакан", en: "1 cup" }, name: { ru: "муки", en: "flour" } },
    { qty: { ru: "¾ стакана", en: "¾ cup" }, name: { ru: "сахара", en: "sugar" } },
    { name: { ru: "разрыхлитель", en: "baking powder" } },
    { name: { ru: "ваниль", en: "vanilla" } },
    { name: { ru: "яблоки", en: "apples" } },
  ],
  steps: [
    {
      ru: "На дно формы уложить очищенные яблоки, порезанные тонкими дольками, залить тестом.",
      en: "Line the bottom of the pan with peeled apples cut into thin slices, and pour the batter over them.",
    },
    {
      ru: "Выпекать при температуре 160 °C — 65–70 минут.",
      en: "Bake at 160 °C (320 °F) for 65–70 minutes.",
    },
  ],
  notes: [
    {
      ru: "",
      en: "“Cup” here is a Russian стакан, a drinking glass. Measure the flour and sugar with the same glass so the proportions stay right.",
    },
  ],
};
