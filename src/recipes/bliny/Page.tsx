/* generated-by: Claude | source: Блины тонкие recipe page | purpose: Gorodets-styled recipe page */
import { RecipePage } from "../../components/RecipePage";
import { useLang } from "../../lang";
import { bliny } from "./data";
import { BlinStack, GorodetsBand, KupavkaBullet } from "./Gorodets";
import "./bliny.css";

export function BlinyPage() {
  const { lang } = useLang();
  return (
    <RecipePage
      recipe={bliny}
      theme="r-bliny"
      hero={
        <>
          <GorodetsBand />
          <div className="title-block">
            <h1>{bliny.title[lang]}</h1>
            {bliny.subtitle[lang] && <p>{bliny.subtitle[lang]}</p>}
          </div>
          <BlinStack />
        </>
      }
      bullet={<KupavkaBullet />}
      divider={<GorodetsBand />}
    />
  );
}
