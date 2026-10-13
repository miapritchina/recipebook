import type { ReactNode } from "react";
import { LangToggle, useLang } from "../lang";
import { isHeading, type Heading, type RecipeData } from "../recipes/types";

const LABELS = {
  back: { ru: "← Все рецепты", en: "← All recipes" },
  ingredients: { ru: "Состав", en: "Ingredients" },
  method: { ru: "Приготовление", en: "Method" },
  family: { ru: "Семейный рецепт", en: "A family recipe" },
  source: { ru: "По рецепту", en: "Adapted from" },
};

function sections<T extends object>(items: (T | Heading)[]) {
  const out: { heading?: Heading["heading"]; items: T[] }[] = [{ items: [] }];
  for (const it of items) {
    if (isHeading(it)) out.push({ heading: it.heading, items: [] });
    else out[out.length - 1].items.push(it);
  }
  return out.filter((s) => s.heading || s.items.length);
}

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
          {sections(recipe.ingredients).map((sec, k) => (
            <div key={k} className="section">
              {sec.heading && <h3>{sec.heading[lang]}</h3>}
              <ul>
                {sec.items.map((ing, i) => (
                  <li key={i}>
                    <span className="bullet" aria-hidden="true">{bullet}</span>
                    <span className="qty">{ing.qty?.[lang] ?? ""}</span>
                    <span className="name">{ing.name[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        {hasSteps && (
          <section className="method">
            <h2>{LABELS.method[lang]}</h2>
            {sections(recipe.steps).map((sec, k) => (
              <div key={k} className="section">
                {sec.heading && <h3>{sec.heading[lang]}</h3>}
                <ol>
                  {sec.items.map((s, i) => (
                    <li key={i}>{s[lang]}</li>
                  ))}
                </ol>
              </div>
            ))}
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
        {recipe.source ? (
          <p>
            {LABELS.source[lang]} <a href={recipe.source.url} target="_blank" rel="noreferrer">{recipe.source.label}</a>
          </p>
        ) : (
          <p>{LABELS.family[lang]}</p>
        )}
      </footer>
    </div>
  );
}
