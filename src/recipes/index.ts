import type { RecipeEntry } from "./types";
import { sharlotka } from "./sharlotka/data";
import { SharlotkaPage } from "./sharlotka/Page";
import { zapekanka } from "./zapekanka/data";
import { ZapekankaPage } from "./zapekanka/Page";
import { koreanCarrots } from "./korean-carrots/data";
import { KoreanCarrotsPage } from "./korean-carrots/Page";
import { sauerkraut } from "./sauerkraut/data";
import { SauerkrautPage } from "./sauerkraut/Page";

export const recipes: RecipeEntry[] = [
  { ...sharlotka, Page: SharlotkaPage },
  { ...zapekanka, Page: ZapekankaPage },
  { ...koreanCarrots, Page: KoreanCarrotsPage },
  { ...sauerkraut, Page: SauerkrautPage },
];
