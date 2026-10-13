import { RecipePage } from "../../components/RecipePage";
import { useLang } from "../../lang";
import { koreanCarrots } from "./data";
import { PetrykivkaGarland, SeedBullet } from "./Petrykivka";
import "./korean-carrots.css";

export function KoreanCarrotsPage() {
  const { lang } = useLang();
  return (
    <RecipePage
      recipe={koreanCarrots}
      theme="r-carrots"
      hero={
        <div className="hero-inner">
          <PetrykivkaGarland />
          <h1>{koreanCarrots.title[lang]}</h1>
          {koreanCarrots.subtitle[lang] && <p className="sub">{koreanCarrots.subtitle[lang]}</p>}
        </div>
      }
      bullet={<SeedBullet />}
    />
  );
}
