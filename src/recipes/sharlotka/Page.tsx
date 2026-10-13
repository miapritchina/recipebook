import { RecipePage } from "../../components/RecipePage";
import { useLang } from "../../lang";
import { sharlotka } from "./data";
import { Berry, KhokhlomaPlate, TravkaDivider } from "./Khokhloma";
import "./sharlotka.css";

export function SharlotkaPage() {
  const { lang } = useLang();
  return (
    <RecipePage
      recipe={sharlotka}
      theme="r-sharlotka"
      hero={
        <div className="plate">
          <KhokhlomaPlate />
          <div className="plate-title">
            <h1>{sharlotka.title[lang]}</h1>
            <p>{sharlotka.subtitle[lang]}</p>
          </div>
        </div>
      }
      bullet={
        <svg viewBox="0 0 20 20">
          <Berry x={10} y={10} r={6} />
        </svg>
      }
      divider={<TravkaDivider />}
    />
  );
}
