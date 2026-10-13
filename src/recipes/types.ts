import type { ComponentType } from "react";
import type { L } from "../lang";

export interface Ingredient {
  qty?: L;
  name: L;
}

export interface RecipeData {
  slug: string;
  title: L;
  subtitle: L;
  meta?: L;
  ingredients: Ingredient[];
  steps: L[];
  notes?: L[];
}

export interface RecipeEntry extends RecipeData {
  Page: ComponentType;
}
