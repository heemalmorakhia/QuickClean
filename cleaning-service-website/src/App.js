import FaqPage from "./pages/faqpage";
import "./App.css";
import Contact from "./pages/contact.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/faqs" element={<FaqPage />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />

          {/* set up pages for other routes similarly. home page is "/" */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
