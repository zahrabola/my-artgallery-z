
import "./App.css";
import Gallery from "./Components/Main/Gallery";
import Page from "./Components/Pages/Page";

import { Routes, Route } from "react-router-dom";
import QuizGame from "./Components/Quiz/QuizGame";
import ArtworkDeatil from "./Components/Main/ArtworkDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quiz" element={<QuizGame/>} />
        <Route path="/gallery/:id" element={<  ArtworkDeatil />} />

     
      </Routes>
    </div>
  );
}

export default App;
/*    {<Route /*path="/details/:search" path="/gallery/artworks/:id" element={<ArtworkDeatil />} /> */