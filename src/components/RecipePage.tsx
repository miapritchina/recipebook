import type { ReactNode } from "react";
import { LangToggle, useLang } from "../lang";
import type { RecipeData } from "../recipes/types";

const LABELS = {
  back: { ru: "← Все рецепты", en: "← All recipes" },
  ingredients: { ru: "Состав", en: "Ingredients" },
  method: { ru: "Приготовление", en: "Method" },
  family: { ru: "Семейный рецепт", en: "A family recipe" },
};

interface Props {
  recipe: RecipeData;
  theme: string;
  hero: ReactNode;
  bullet: ReactNode;
  divider?: ReactNode;
}

export function RecipePage({ recipe, theme, hero, bullet, divider }: Props) {
  const { lang } = useLang();
  const hasSteps = recipe.steps.length > 0;
  const notes = recipe.notes?.filter((n) => n[lang]);
  return (
    <div className={`recipe ${theme}`}>
      <header className="topbar">
        <a className="back" href="#/">{LABELS.back[lang]}</a>
        <LangToggle />
      </header>

      <section className="hero">{hero}</section>
      {recipe.meta && <p className="meta">{recipe.meta[lang]}</p>}

      <div className={`body${hasSteps ? " two" : ""}`}>
        <section className="ingredients">
          <h2>{LABELS.ingredients[lang]}</h2>
          <ul>
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>
                <span className="bullet" aria-hidden="true">{bullet}</span>
                <span className="qty">{ing.qty?.[lang] ?? ""}</span>
                <span className="name">{ing.name[lang]}</span>
              </li>
            ))}
          </ul>
        </section>
        {hasSteps && (
          <section className="method">
            <h2>{LABELS.method[lang]}</h2>
            <ol>
              {recipe.steps.map((s, i) => (
                <li key={i}>{s[lang]}</li>
              ))}
            </ol>
          </section>
        )}
      </div>

      {notes && notes.length > 0 && (
        <aside className="notes">
          {notes.map((n, i) => (
            <p key={i}>{n[lang]}</p>
          ))}
        </aside>
      )}

      <footer>
        {divider}
        <p>{LABELS.family[lang]}</p>
      </footer>
    </div>
  );
}
