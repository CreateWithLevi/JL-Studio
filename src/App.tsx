import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import LeviPortfolio from "./components/LeviPortfolio";
import JiufangPortfolio from "./components/JiufangPortfolio";
import TestPage from "./components/TestPage";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Levi" element={<LeviPortfolio />} />
          <Route path="/Jiufang" element={<JiufangPortfolio />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
