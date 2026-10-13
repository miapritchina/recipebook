import type { RecipeData } from "../types";

const h = (ru: string, en: string) => ({ heading: { ru, en } });
const i = (ruQ: string, enQ: string, ru: string, en: string) => ({ qty: { ru: ruQ, en: enQ }, name: { ru, en } });

export const redVelvet: RecipeData = {
  slug: "red-velvet",
  title: { ru: "Красный бархат", en: "Red velvet" },
  subtitle: { ru: "торт", en: "layer cake" },
  meta: { ru: "3 коржа · кольца 16 см · 130 °C", en: "3 layers · 16 cm rings · 130 °C / 265 °F" },
  ingredients: [
    h("Коржи", "Sponge"),
    i("3 шт", "3", "яйца", "eggs"),
    i("250 г", "250 g", "сахар", "sugar"),
    i("280 г", "280 g", "пахта или кефир", "buttermilk or kefir"),
    i("220 г", "220 g", "масло растительное (50–60 г можно заменить сливочным)", "neutral oil (swap 50–60 g for melted butter if you like)"),
    i("3 г", "3 g", "сода", "baking soda"),
    i("5 г", "5 g", "разрыхлитель", "baking powder"),
    i("3 г", "3 g", "соль", "salt"),
    i("340 г", "340 g", "мука", "flour"),
    i("7 г", "7 g", "какао-порошок", "cocoa powder"),
    { name: { ru: "красный краситель — до яркого цвета", en: "red food colouring — until vivid" } },
    h("Крем", "Cream"),
    i("250 г", "250 g", "масло сливочное 82,5%", "butter (82.5% fat)"),
    i("180 г", "180 g", "сахарная пудра", "powdered sugar"),
    i("10 г", "10 g", "экстракт ванили", "vanilla extract"),
    i("800 г", "800 g", "творожный сыр", "cream cheese"),
    i("50 г", "50 g", "сок лимона", "lemon juice"),
  ],
  steps: [
    h("Коржи", "Sponge"),
    {
      ru: "Заранее достаньте все продукты — особенно важно, чтобы яйца были тёплыми. Точно отвесьте соду, разрыхлитель и соль.",
      en: "Take everything out ahead of time — warm eggs matter most. Weigh the soda, baking powder and salt precisely.",
    },
    { ru: "Взбейте яйца с сахаром в пену.", en: "Whisk the eggs and sugar until foamy." },
    {
      ru: "Добавьте пахту, затем муку с какао. Понемногу вводите краситель до насыщенного красного цвета, потом влейте масло.",
      en: "Add the buttermilk, then the flour and cocoa. Add colouring a little at a time until deep red, then pour in the oil.",
    },
    {
      ru: "В самом конце — соду, разрыхлитель и соль, и сразу выпекать: тесто не ждёт.",
      en: "Add the soda, baking powder and salt last, and bake right away — the batter won’t wait.",
    },
    {
      ru: "Разделите тесто на три кольца по 16 см, обёрнутых фольгой (≈400 г в каждое). Пеките при 130 °C, пока коржи не начнут пружинить.",
      en: "Divide between three 16 cm rings wrapped in foil (≈400 g each). Bake at 130 °C until the layers spring back.",
    },
    {
      ru: "Сразу накройте плёнкой в контакт, остудите и уберите в холодильник на ночь.",
      en: "Cover straight away with cling film touching the surface, cool, and chill overnight.",
    },
    h("Крем", "Cream"),
    {
      ru: "Взбейте холодное сливочное масло с пудрой и ванилью, пока масса не побелеет.",
      en: "Beat the cold butter with the powdered sugar and vanilla until it turns pale.",
    },
    { ru: "Добавьте творожный сыр, а последним — лимонный сок.", en: "Add the cream cheese, and the lemon juice last." },
    h("Сборка", "Assembly"),
    {
      ru: "Отложите примерно половину крема. Остальным промажьте и соберите коржи ровной стопкой.",
      en: "Set aside about half the cream. Use the rest to fill and stack the layers in a straight tower.",
    },
    {
      ru: "Тонко обмажьте бока и верх, чтобы закрыть крошку, и уберите в морозилку на 1–1,5 часа.",
      en: "Give the sides and top a thin crumb coat and freeze for 1–1½ hours.",
    },
    {
      ru: "Покройте торт оставшимся кремом и выровняйте.",
      en: "Cover with the remaining cream and smooth it out.",
    },
  ],
  notes: [
    {
      ru: "Коржи хранятся 2–3 дня в холодильнике или 3 недели в морозилке. У автора торт украшен воротником из белого шоколада и красным велюром — это по желанию.",
      en: "The layers keep 2–3 days in the fridge or 3 weeks frozen. The original is finished with a white-chocolate collar and red velour spray — optional.",
    },
  ],
  source: { label: "Andy Chef", url: "https://andychef.ru/recipes/red-velvet/" },
};
