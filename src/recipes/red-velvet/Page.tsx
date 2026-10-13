import { RecipePage } from "../../components/RecipePage";
import { useLang } from "../../lang";
import { redVelvet } from "./data";
import { RoseBullet, ShawlBouquet } from "./Shawl";
import "./red-velvet.css";

export function RedVelvetPage() {
  const { lang } = useLang();
  return (
    <RecipePage
      recipe={redVelvet}
      theme="r-velvet"
      hero={
        <div className="shawl">
          <ShawlBouquet />
          <h1>{redVelvet.title[lang]}</h1>
          <p>{redVelvet.subtitle[lang]}</p>
          <div className="fringe" aria-hidden="true" />
        </div>
      }
      bullet={<RoseBullet />}
    />
  );
}
