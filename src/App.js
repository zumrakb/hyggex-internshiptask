import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Chapter from "./pages/Chapter";
import Subject from "./pages/Subject";
import Flashcard from "./pages/Flashcard";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:pageName/:subject/:chapter" element={<Chapter />} />
          <Route path="/:pageName/:subject" element={<Subject />} />
          <Route path="/:pageName" element={<Flashcard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
