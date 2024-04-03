import { Card } from "../Card/Card";

export const List = ({ countryArr }) => {
  return (
    <>
      <div className="container">
        <ul className="flex flex-wrap justify-between gap-8 m-0 pl-0 list-none pt-12 pb-12">
          {countryArr.length && countryArr.map((item) => {
            return (
              <Card
                key={item.name.common}
                img={item.flags.svg}
                country={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital}
                cca2={item.cca2}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
