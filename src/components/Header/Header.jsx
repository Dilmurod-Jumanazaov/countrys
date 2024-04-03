import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="pt-6 pb-6 mb-12 shadow-lg">
        <div className="container flex items-center justify-between">
          <Link className="text-2xl font-bold" to="/">
            Where in the world?
          </Link>
          <button className="text-md font-semibold" type="button">
            Dark Mode
          </button>
        </div>
      </header>
    </>
  );
};
