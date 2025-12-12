import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./Lists";

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three-cols">
      {
        seriesData.map((curElem) => (
          <SeriesCard key={curElem.id} data={curElem} sub='JavaScript' />
        ))
      }
    </ul>
  );
};
export default NetflixSeries;
