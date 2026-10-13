import type { RecipeData } from "../types";

export const sauerkraut: RecipeData = {
  slug: "sauerkraut",
  title: { ru: "Квашеная капуста", en: "Sauerkraut" },
  subtitle: { ru: "", en: "kvashenaya kapusta" },
  meta: { ru: "2–3 дня под гнётом", en: "2–3 days under a weight" },
  ingredients: [
    { qty: { ru: "1 кг", en: "1 kg" }, name: { ru: "капусты поздних сортов", en: "late-season cabbage" } },
    { qty: { ru: "20 г", en: "20 g" }, name: { ru: "соли", en: "salt" } },
    { name: { ru: "морковь", en: "carrot" } },
  ],
  steps: [
    { ru: "Нашинковать капусту, натереть морковь.", en: "Shred the cabbage and grate the carrot." },
    { ru: "Пересыпать солью и поставить под гнёт.", en: "Layer with the salt and put it under a weight." },
    {
      ru: "Должен выделиться сок, и капуста заквасится — дня через 2\u2060–\u20603.",
      en: "The juice should come out, and the cabbage ferments in about 2\u2060–\u20603 days.",
    },
  ],
  notes: [
    {
      ru: "Капусту нужно выбирать поздних сортов — молодая не очень.",
      en: "Pick a late-season cabbage — young cabbage doesn’t work as well.",
    },
    {
      ru: "20 г соли на каждый килограмм капусты.",
      en: "20 g of salt for every kilogram of cabbage.",
    },
  ],
};
