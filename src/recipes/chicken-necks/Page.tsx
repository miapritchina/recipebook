/* generated-by: Claude | source: Куриные шейки recipe page | purpose: Opishnya-styled recipe page */
import { RecipePage } from "../../components/RecipePage";
import { useLang } from "../../lang";
import { chickenNecks } from "./data";
import { Makitra, OpishnyaBand, SpiralBullet } from "./Opishnya";
import "./chicken-necks.css";

export function ChickenNecksPage() {
  const { lang } = useLang();
  return (
    <RecipePage
      recipe={chickenNecks}
      theme="r-necks"
      hero={
        <>
          <OpishnyaBand />
          <div className="title-block">
            <h1>{chickenNecks.title[lang]}</h1>
            <p>{chickenNecks.subtitle[lang]}</p>
          </div>
          <Makitra />
        </>
      }
      bullet={<SpiralBullet />}
      divider={<OpishnyaBand />}
    />
  );
}
