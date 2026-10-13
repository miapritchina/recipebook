import { RecipePage } from "../../components/RecipePage";
import { useLang } from "../../lang";
import { hasselback } from "./data";
import { DotBullet, DymkovoBand, GarmoshkaPotato } from "./Garmoshka";
import "./hasselback.css";

export function HasselbackPage() {
  const { lang } = useLang();
  return (
    <RecipePage
      recipe={hasselback}
      theme="r-hasselback"
      hero={
        <>
          <DymkovoBand />
          <div className="title-block">
            <h1>{hasselback.title[lang]}</h1>
            <p>{hasselback.subtitle[lang]}</p>
          </div>
          <GarmoshkaPotato />
        </>
      }
      bullet={<DotBullet />}
      divider={<DymkovoBand />}
    />
  );
}
