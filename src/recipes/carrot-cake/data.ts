import type { RecipeData } from "../types";

const h = (ru: string, en: string) => ({ heading: { ru, en } });
const i = (ruQ: string, enQ: string, ru: string, en: string) => ({ qty: { ru: ruQ, en: enQ }, name: { ru, en } });

export const carrotCake: RecipeData = {
  slug: "carrot-cake",
  title: { ru: "Морковный торт", en: "Carrot cake" },
  subtitle: { ru: "", en: "" },
  meta: { ru: "150 °C · 50–60 минут · коржи отдыхают сутки", en: "300 °F / 150 °C · 50–60 minutes · layers rest a day" },
  ingredients: [
    h("Коржи", "Cake"),
    i("2 стакана (≈400 г)", "2 cups", "сахара", "granulated sugar"),
    i("1½ стакана (≈350 мл)", "1½ cups", "растительного масла", "vegetable oil"),
    i("4", "4", "яйца", "eggs"),
    i("2 стакана (≈250 г)", "2 cups", "муки (кондитерской)", "pastry flour"),
    i("2 ч. ложки", "2 tsp", "соды", "baking soda"),
    i("1 ч. ложка", "1 tsp", "соли", "salt"),
    i("2 ч. ложки", "2 tsp", "молотой корицы", "ground cinnamon"),
    i("3 стакана", "3 cups", "мелко натёртой сырой моркови", "finely grated raw carrot"),
    i("≈115 г", "4 oz", "мелко рубленых грецких орехов", "finely chopped walnuts"),
    h("Крем", "Frosting"),
    i("≈680 г", "1½ lb", "сахарной пудры", "powdered sugar"),
    i("≈340 г", "12 oz", "сливочного сыра комнатной температуры", "cream cheese, room temperature"),
    i("1 ст. ложка", "1 tbsp", "экстракта ванили", "vanilla extract"),
    i("≈55 г", "2 oz", "маргарина комнатной температуры", "margarine, room temperature"),
  ],
  steps: [
    h("Коржи", "Cake"),
    { ru: "Разогрейте духовку до 150 °C.", en: "Heat the oven to 300 °F (150 °C)." },
    {
      ru: "Смешайте сахар, масло и яйца. Отдельно просейте муку с содой, солью и корицей, вмешайте сухое в жидкое, затем морковь и орехи.",
      en: "Mix the sugar, oil and eggs. Sift the flour with the soda, salt and cinnamon separately, fold the dry into the wet, then fold in the carrot and walnuts.",
    },
    {
      ru: "Разделите тесто на три смазанные формы 23 см (≈600 г в каждую) и пеките 50–60 минут.",
      en: "Divide between three well-greased 9-inch pans (about 1 lb 5 oz each) and bake 50–60 minutes.",
    },
    {
      ru: "Остудите в формах около часа, затем переверните и оставьте закрытыми минимум на сутки, чтобы не подсохли.",
      en: "Cool in the pans for about an hour, then turn them upside down and keep covered for at least a day so they don’t dry out.",
    },
    h("Крем", "Frosting"),
    {
      ru: "Взбейте все ингредиенты миксером на средне-низкой скорости до однородности. Держите в холодильнике.",
      en: "Beat everything together on medium-low until smooth. Keep chilled.",
    },
    h("Сборка", "Assembly"),
    {
      ru: "Выньте коржи из форм. Промажьте каждый слой крема (≈100 г), второй и третий коржи кладите верхом вниз.",
      en: "Turn out the layers. Spread about 3½ oz of frosting on each, stacking the second and third layers top-side down.",
    },
    {
      ru: "Слегка прижмите слои ладонями, покройте верх и бока оставшимся кремом и уберите в холодильник.",
      en: "Press the layers gently together, cover the top and sides with the rest of the frosting, and refrigerate.",
    },
  ],
  source: {
    label: "Robert Clinton · Food Network",
    url: "https://www.foodnetwork.com/recipes/carrot-cake-recipe-recipe-2011777",
  },
};
