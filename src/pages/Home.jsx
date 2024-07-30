import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import triangle from '../assets/bg-triangle.svg';
import rockIcon from '../assets/icon-rock.svg';
import paperIcon from '../assets/icon-paper.svg';
import scissorsIcon from '../assets/icon-scissors.svg';

function Home({ score, setShowRules }) {
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    navigate('/result', { state: { userChoice: choice, prevScore: score } });
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-900 to-gray-800 flex flex-col relative">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 border border-white rounded-lg mt-6 mx-4 md:mx-[25%]">
        <img src={logo} alt="Logo" className="h-auto w-24 md:w-auto" />
        <div className="bg-white text-center p-4 md:p-8 rounded-lg w-full md:w-[20%] mt-4 md:mt-0">
          <h1 className="text-black text-lg md:text-2xl font-semibold">SCORE</h1>
          <h1 className="text-black text-4xl md:text-5xl font-bold mt-1">{score}</h1>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
          <img src={triangle} alt="Triangle" className="absolute top-0 left-0 w-full h-full object-cover" />
          
          <button onClick={() => handleChoice(rockIcon)} className="absolute translate-x-28 md:translate-x-56 -translate-y-8 md:-translate-y-16">
            <div className="bg-white p-4 md:p-6 rounded-full border-[12px] md:border-[20px] border-red-600 flex items-center justify-center">
              <img src={rockIcon} className="w-8 md:w-16 h-8 md:h-16 object-contain" />
            </div>
          </button>
          <button onClick={() => handleChoice(paperIcon)} className="absolute -translate-x-7 md:-translate-x-14 -translate-y-8 md:-translate-y-16">
            <div className="bg-white p-4 md:p-6 rounded-full border-[12px] md:border-[20px] border-blue-600 flex items-center justify-center">
              <img src={paperIcon} className="w-8 md:w-16 h-8 md:h-16 object-contain" />
            </div>
          </button>
          <button onClick={() => handleChoice(scissorsIcon)} className="absolute translate-x-10 md:translate-x-20 translate-y-36 md:translate-y-56">
            <div className="bg-white p-4 md:p-6 rounded-full border-[12px] md:border-[20px] border-orange-600 flex items-center justify-center">
              <img src={scissorsIcon} className="w-8 md:w-16 h-8 md:h-16 object-contain" />
            </div>
          </button>
        </div>
      </div>
      <button
        onClick={() => setShowRules(true)}
        className="absolute bottom-4 md:bottom-8 right-4 md:right-8 bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-800 transition"
      >
        RULES
      </button>
    </div>
  );
}

export default Home;
