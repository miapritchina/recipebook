import { RecipePage } from "../../components/RecipePage";
import { useLang } from "../../lang";
import { sauerkraut } from "./data";
import { CrockScene, RhombBullet } from "./Crock";
import "./sauerkraut.css";

export function SauerkrautPage() {
  const { lang } = useLang();
  return (
    <RecipePage
      recipe={sauerkraut}
      theme="r-sauerkraut"
      hero={
        <>
          <div className="title-block">
            <h1>{sauerkraut.title[lang]}</h1>
            {sauerkraut.subtitle[lang] && <p>{sauerkraut.subtitle[lang]}</p>}
          </div>
          <div className="steppe">
            <CrockScene />
          </div>
        </>
      }
      bullet={<RhombBullet />}
    />
  );
}
