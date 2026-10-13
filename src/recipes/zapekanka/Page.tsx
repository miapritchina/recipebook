import { RecipePage } from "../../components/RecipePage";
import { useLang } from "../../lang";
import { zapekanka } from "./data";
import { RushnykBand, StitchBullet } from "./Rushnyk";
import "./zapekanka.css";

export function ZapekankaPage() {
  const { lang } = useLang();
  return (
    <RecipePage
      recipe={zapekanka}
      theme="r-zapekanka"
      hero={
        <>
          <RushnykBand id="rk-top" />
          <div className="title-block">
            <h1>{zapekanka.title[lang]}</h1>
            {zapekanka.subtitle[lang] && <p>{zapekanka.subtitle[lang]}</p>}
          </div>
        </>
      }
      bullet={<StitchBullet />}
      divider={<RushnykBand id="rk-bottom" />}
    />
  );
}
