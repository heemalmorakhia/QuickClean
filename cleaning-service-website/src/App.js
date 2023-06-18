import FaqPage from './pages/faqpage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route
            path='/faqs'
            element={<FaqPage />}
          />

          {/* set up pages for other routes similarly. home page is "/" */}

        </Routes>
      </Router>

    </div>
  );
}

export default App;

