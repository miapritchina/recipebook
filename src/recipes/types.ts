import type { ComponentType } from "react";
import type { L } from "../lang";

export interface Ingredient {
  qty?: L;
  name: L;
}

export interface Heading {
  heading: L;
}

export interface RecipeData {
  slug: string;
  title: L;
  subtitle: L;
  meta?: L;
  ingredients: (Ingredient | Heading)[];
  steps: (L | Heading)[];
  notes?: L[];
  source?: { label: string; url: string };
}

export interface RecipeEntry extends RecipeData {
  Page: ComponentType;
}

export const isHeading = (x: object): x is Heading => "heading" in x;
