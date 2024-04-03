import { Link } from "react-router-dom";
import "../Card/card.css";

export const Card = ({ img, country, population, region, capital, cca2 }) => {
  return (
    <>
      <li className="w-[267px] shadow-lg">
        <Link to={"/singlePage/" + cca2}>
          <div>
            <img
              className="img"
              src={img}
              alt={country}
              width={267}
              height={160}
            />
            <div className="p-5">
              <h3 className="m-0 mb-4 text-lg font-bold">{country}</h3>
              <div>
                <p className="font-bold text-base">Population: {population}</p>
                <p className="font-bold text-base">Region: {region}</p>
                <p className="font-bold text-base">Capital: {capital}</p>
              </div>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};
