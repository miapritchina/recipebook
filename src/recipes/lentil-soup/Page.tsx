import { RecipePage } from "../../components/RecipePage";
import { useLang } from "../../lang";
import { lentilSoup } from "./data";
import { CrossBullet, LozengeBand, MezenFrieze } from "./Mezen";
import "./lentil-soup.css";

export function LentilSoupPage() {
  const { lang } = useLang();
  return (
    <RecipePage
      recipe={lentilSoup}
      theme="r-lentil"
      hero={
        <div className="board">
          <MezenFrieze />
          <h1>{lentilSoup.title[lang]}</h1>
          <LozengeBand />
        </div>
      }
      bullet={<CrossBullet />}
      divider={<LozengeBand />}
    />
  );
}
