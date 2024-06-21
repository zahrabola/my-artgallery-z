
import "./App.css";
import Gallery from "./Components/Main/Gallery";
import Page from "./Components/Pages/Page";

import { Routes, Route } from "react-router-dom";
import QuizGame from "./Components/Quiz/QuizGame";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quiz" element={<QuizGame/>} />
      </Routes>
    </div>
  );
}

export default App;
