import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { MainComp } from "./components/MainComp/MainComp";
import { SinglePage } from "./pages/SinglePage/SinglePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainComp />} />
        <Route path="/singlePage/:countryName" element={<SinglePage />} />
      </Routes>
    </>
  );
}

export default App;
