export const Search = ({ searchedCountry, filteredCountry }) => {
  return (
    <>
      <div className="container flex items-center justify-between">
        <input
          onChange={searchedCountry}
          className="max-w-[480px] w-full p-4 pl-[72px] rounded-md"
          type="search"
          aria-label="Search any country"
          placeholder="Search for a country..."
          required
        />
        <select
          onChange={filteredCountry}
          className="max-w-[200px] w-full p-4 appearance-none rounded-md"
          name="region"
        >
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </>
  );
};
