import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SinglePage = () => {
  
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { countryName } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha?codes=${countryName}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [countryName]);

  return (
    <>
      <div className="container">
        <button
          onClick={() => navigate("/")}
          className="max-w-[100px] w-full px-4 py-2 text-lg font-semibold border rounded-md bg-gray-400"
          type="button"
        >
          Back
        </button>
        {data.map((item) => {
          return (
            <div key={item.cca2} className="flex items-center gap-20 pt-20">
              <img
                src={item.flags.svg}
                alt={item?.flags?.alt}
                width={560}
                height={401}
              />
              <div className="grow">
                <div className="flex items-center justify-between grow">
                  <div>
                    <h3 className="text-3xl font-extrabold mb-6 ">
                      {item.name.common}
                    </h3>
                    <p>
                      Native name:{" "}
                      {
                        item.name.nativeName[
                          Object.keys(item.name.nativeName)[0]
                        ].common
                      }
                    </p>
                    <p>Population: {item.population}</p>
                    <p>Region: {item.region}</p>
                    <p>Sub Region: {item.subregion}</p>
                    <p>Capital: {item.capital}</p>
                  </div>
                  <div>
                    <p>Top Level Domain: {item.tld}</p>
                    <p>
                      Currencies:{" "}
                      {item.currencies[Object.keys(item.currencies)[0]].name}
                    </p>
                    <p>Language: {[Object.values(item.languages)].join("")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 pt-4">
                  <p className="font-bold">Borders:</p>
                  <div className="flex items-center flex-wrap gap-3">
                    {item?.borders?.map((border) => (
                      <Link
                        key={border}
                        className="px-3 border rounded-md border-gray-600"
                        to={"/singlePage/" + border}
                      >
                        {border}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
