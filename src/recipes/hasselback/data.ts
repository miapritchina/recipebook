import type { RecipeData } from "../types";

export const hasselback: RecipeData = {
  slug: "hasselback",
  title: { ru: "Картошка-гармошка", en: "Hasselback potatoes" },
  subtitle: { ru: "с сыром и беконом", en: "with cheese and bacon" },
  meta: { ru: "200–210 °C · 30 + 15 + 5 минут", en: "200–210 °C / 390–410 °F · 30 + 15 + 5 minutes" },
  ingredients: [
    { name: { ru: "картофель", en: "potatoes" } },
    { name: { ru: "масло со специями", en: "oil mixed with spices" } },
    { name: { ru: "сыр", en: "cheese" } },
    { name: { ru: "бекон", en: "bacon" } },
  ],
  steps: [
    {
      ru: "Надрезать картошку. С двух сторон положить палочки для суши, чтобы нож не доставал до доски.",
      en: "Slice the potato thinly, with sushi chopsticks on either side so the knife stops before it reaches the board.",
    },
    {
      ru: "Перед духовкой смазать маслом со специями, чтобы лепестки не сгорели.",
      en: "Before it goes in the oven, brush with oil and spices so the slices don’t burn.",
    },
    { ru: "Запекать при 200–210 °C 30 минут.", en: "Bake at 200–210 °C (390–410 °F) for 30 minutes." },
    {
      ru: "Расправить лепесточки ножом, если картошка не раскрылась сама.",
      en: "Fan the slices open with a knife if the potato hasn’t opened up on its own.",
    },
    { ru: "Ещё 15 минут в духовке.", en: "Another 15 minutes in the oven." },
    { ru: "Ножом вставить сыр и бекон между лепестками.", en: "Use a knife to tuck cheese and bacon between the slices." },
    { ru: "И ещё минут на 5 в духовку.", en: "And about 5 more minutes in the oven." },
  ],
};
