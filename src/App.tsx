import { useEffect, useState } from "react";
import { LangProvider, useLang } from "./lang";
import { Home } from "./pages/Home";
import { recipes } from "./recipes";

function useRoute() {
  const read = () => window.location.hash.replace(/^#\/?/, "");
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const onHash = () => {
      setRoute(read());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

function Router() {
  const route = useRoute();
  const { lang } = useLang();
  const recipe = recipes.find((r) => r.slug === route);

  useEffect(() => {
    document.title = recipe
      ? `${recipe.title[lang]} · ${lang === "ru" ? "Семейные рецепты" : "Family recipes"}`
      : lang === "ru" ? "Семейные рецепты" : "Family recipes";
  }, [recipe, lang]);

  if (!recipe) return <Home />;
  const Page = recipe.Page;
  return <Page />;
}

export function App() {
  return (
    <LangProvider>
      <Router />
    </LangProvider>
  );
}
