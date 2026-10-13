import type { RecipeData } from "../types";

export const lentilSoup: RecipeData = {
  slug: "lentil-soup",
  title: { ru: "Чечевичный суп", en: "Red lentil soup" },
  subtitle: { ru: "", en: "" },
  ingredients: [
    { name: { ru: "красная чечевица", en: "red lentils" } },
    { name: { ru: "томатный сок", en: "tomato juice" } },
    { name: { ru: "лук репчатый", en: "onion" } },
    { name: { ru: "чеснок", en: "garlic" } },
    { name: { ru: "копчёное мясо — грудинка, бекон", en: "something smoked — pork belly, bacon" } },
  ],
  steps: [
    { ru: "Сварить красную чечевицу в томатном соке.", en: "Cook the red lentils in tomato juice." },
    {
      ru: "Отдельно сделать зажарку: лук мелко нарезать и обжарить, ближе к концу добавить чеснок.",
      en: "Separately, make the fry-up: finely chop the onion and fry it, adding the garlic towards the end.",
    },
    {
      ru: "Отдельно обжарить что-нибудь мясное, копчёное — грудинку, бекон.",
      en: "Separately, fry something smoky and meaty — pork belly or bacon.",
    },
    {
      ru: "Когда чечевица почти готова, добавить в неё зажарку и мясо. И всё!",
      en: "When the lentils are almost done, add the fry-up and the meat. That’s it!",
    },
  ],
  notes: [
    {
      ru: "Томатный сок подойдёт любой — можно развести томатную пасту. А я делаю из своего пюре.",
      en: "Any tomato juice works — or thin down some tomato paste. I make mine from my own tomato purée.",
    },
  ],
};
