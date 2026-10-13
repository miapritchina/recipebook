import type { RecipeData } from "../types";

export const koreanCarrots: RecipeData = {
  slug: "korean-carrots",
  title: { ru: "Морковь по-корейски", en: "Korean-style carrots" },
  subtitle: { ru: "", en: "morkovcha" },
  ingredients: [
    { qty: { ru: "1 кг", en: "1 kg" }, name: { ru: "моркови (8–10 средних)", en: "carrots (8–10 medium)" } },
    { qty: { ru: "3 ч. ложки+", en: "3 tsp+" }, name: { ru: "приправы для моркови по-корейски", en: "Korean carrot seasoning" } },
    { qty: { ru: "по вкусу", en: "to taste" }, name: { ru: "соль", en: "salt" } },
    { qty: { ru: "немного", en: "a little" }, name: { ru: "сахара", en: "sugar" } },
    { qty: { ru: "немного", en: "a little" }, name: { ru: "уксуса", en: "vinegar" } },
    { qty: { ru: "чуток", en: "a pinch" }, name: { ru: "адзиномото", en: "Ajinomoto (MSG)" } },
    { name: { ru: "лук репчатый", en: "onion" } },
    { name: { ru: "чеснок", en: "garlic" } },
    { name: { ru: "масло кунжутное и подсолнечное", en: "sesame oil and sunflower oil" } },
    { name: { ru: "семена кунжута", en: "sesame seeds" } },
  ],
  steps: [
    {
      ru: "Морковь нарезать соломкой, посолить по вкусу, добавить немного сахара, 3 ч. ложки приправы или больше по вкусу, немного уксуса и чуток адзиномото. Всё перемешать и оставить. Минут через пять попробовать на остроту, кислоту, соль. Если чего-то не хватает — добавить, если нормально — идём дальше.",
      en: "Cut the carrots into thin matchsticks. Add salt to taste, a little sugar, 3 tsp of the seasoning (or more, to taste), a little vinegar and a pinch of Ajinomoto. Mix everything and leave it. After about five minutes, taste for heat, sourness and salt. If something is missing, add it; if it’s right, move on.",
    },
    {
      ru: "Лук и чеснок мелко нарезать. В сковороде разогреть масло — немного кунжутного и подсолнечного, так чтобы масло покрыло весь лук с избытком. Жарить лук до бледно-золотистого цвета, добавить чеснок и семена кунжута, дожарить до румяного цвета.",
      en: "Finely chop the onion and garlic. Heat oil in a frying pan — a little sesame oil plus sunflower oil, enough to cover the onion generously. Fry the onion until pale golden, then add the garlic and sesame seeds and fry until nicely browned.",
    },
    {
      ru: "Всем этим быстро залить морковь, перемешать и убрать в холодильник настаиваться.",
      en: "Quickly pour it all over the carrots, mix, and put them in the fridge to marinate.",
    },
  ],
};
