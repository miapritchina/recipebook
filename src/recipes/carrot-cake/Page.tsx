import { RecipePage } from "../../components/RecipePage";
import { useLang } from "../../lang";
import { carrotCake } from "./data";
import { PysankaEgg, TriangleBullet } from "./Pysanka";
import "./carrot-cake.css";

export function CarrotCakePage() {
  const { lang } = useLang();
  return (
    <RecipePage
      recipe={carrotCake}
      theme="r-carrotcake"
      hero={
        <div className="egg-hero">
          <PysankaEgg />
          <h1>{carrotCake.title[lang]}</h1>
        </div>
      }
      bullet={<TriangleBullet />}
    />
  );
}
