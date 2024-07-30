import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './index.css';
import logo from './assets/logo.svg';
import triangle from './assets/bg-triangle.svg';
import rockIcon from './assets/icon-rock.svg';
import paperIcon from './assets/icon-paper.svg';
import scissorsIcon from './assets/icon-scissors.svg';
import ResultPage from './pages/ResultPage';

function Home({ score }) {
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    navigate('/result', { state: { userChoice: choice, prevScore: score } });
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-900 to-gray-800 flex flex-col relative">
      <div className="flex justify-between items-center p-4 border border-white rounded-lg mt-6 mx-[25%]">
        <img src={logo} alt="Logo" className="h-auto" />
        <div className="bg-white text-center p-8 rounded-lg w-[20%]">
          <h1 className="text-black text-2xl font-semibold">SCORE</h1>
          <h1 className="text-black text-5xl font-bold mt-1">{score}</h1>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-[300px] h-[300px]">
          <img src={triangle} alt="Triangle" className="absolute top-0 left-0 w-full h-full object-cover" />
          
          <button onClick={() => handleChoice(rockIcon)} className="absolute translate-x-56 -translate-y-16">
            <div className="bg-white p-6 rounded-full border-[20px] border-red-600 flex items-center justify-center">
              <img src={rockIcon} className="w-16 h-16 object-contain" />
            </div>
          </button>
          <button onClick={() => handleChoice(paperIcon)} className="absolute -translate-x-14 -translate-y-16">
            <div className="bg-white p-6 rounded-full border-[20px] border-blue-600 flex items-center justify-center">
              <img src={paperIcon} className="w-16 h-16 object-contain" />
            </div>
          </button>
          <button onClick={() => handleChoice(scissorsIcon)} className="absolute translate-x-20 translate-y-56">
            <div className="bg-white p-6 rounded-full border-[20px] border-orange-600 flex items-center justify-center">
              <img src={scissorsIcon} className="w-16 h-16 object-contain" />
            </div>
          </button>
        </div>
      </div>
      <button className="absolute bottom-8 right-8 bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-800 transition">
        RULES
      </button>
    </div>
  );
}

function App() {
  const [score, setScore] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home score={score} />} />
        <Route path="/result" element={<ResultPage score={score} setScore={setScore} />} />
      </Routes>
    </Router>
  );
}

export default App;
