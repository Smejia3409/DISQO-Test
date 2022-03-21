import "./style/app.css";
import MyNotes from "./components/MyNotes";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stats from "./components/Stats";

const App = () => {
  return (
    <div className="container">
      <p className="main-title">Notepad application</p>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyNotes />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
