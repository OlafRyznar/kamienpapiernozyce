import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import ResultPage from './pages/ResultPage';
import Rules from './pages/Rules';
import Home from './pages/Home';

function App() {
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home score={score} setShowRules={setShowRules} />} />
        <Route path="/result" element={<ResultPage score={score} setScore={setScore} />} />
      </Routes>

      {showRules && <Rules onClose={() => setShowRules(false)} />}
    </Router>
  );
}

export default App;
