import HomePage from "./pages/HomePage";
import { useParams } from "react-router-dom";
import InfoPage from "./pages/InfoPage";
import CatPage from "./pages/CatPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const test = useParams();
  return (
    <div>
      {/* Navigare */}
      <Routes>
        <Route path="/cat/:idCat" element={<CatPage/>}/>
        <Route path="/cats" element={<HomePage />} />
        <Route path="/" element={<InfoPage />} />
        <Route path="*" element={<h1>NOT FOUND 404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
