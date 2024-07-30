import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import rockIcon from '../assets/icon-rock.svg';
import paperIcon from '../assets/icon-paper.svg';
import scissorsIcon from '../assets/icon-scissors.svg';
import logo from '../assets/logo.svg';

function ResultPage({ score, setScore }) {
  const location = useLocation();
  const { userChoice, prevScore } = location.state || {};
  const [houseChoice, setHouseChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [scoreUpdated, setScoreUpdated] = useState(false);
  const [showHouseChoice, setShowHouseChoice] = useState(false);

  const getRandomChoice = () => {
    const choices = [rockIcon, paperIcon, scissorsIcon];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  useEffect(() => {
    const choice = getRandomChoice();
    setTimeout(() => {
      setHouseChoice(choice);
      setShowHouseChoice(true);
      const winner = determineWinner(userChoice, choice);
      setResult(winner);
    }, 1000);
  }, [userChoice]);

  useEffect(() => {
    if (result !== null && !scoreUpdated) {
      if (result === 'win') {
        setScore(prevScore => prevScore + 1);
      } else if (result === 'lose') {
        setScore(0);
      }
      setScoreUpdated(true);
    }
  }, [result, setScore, prevScore, scoreUpdated]);

  const determineWinner = (userChoice, houseChoice) => {
    if (userChoice === houseChoice) return 'draw';
    if (
      (userChoice === rockIcon && houseChoice === scissorsIcon) ||
      (userChoice === paperIcon && houseChoice === rockIcon) ||
      (userChoice === scissorsIcon && houseChoice === paperIcon)
    ) {
      return 'win';
    }
    return 'lose';
  };

  return (
    <div className="w-full min-h-screen  bg-gradient-to-br from-blue-900 to-gray-800 flex flex-col relative">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 border border-white rounded-lg mt-6 mx-4 md:mx-[25%]">
        <img src={logo} className="h-auto w-24 md:w-auto" />
        <div className="bg-white text-center p-4 md:p-8 rounded-lg w-full md:w-[20%] mt-4 md:mt-0">
          <div className="text-black text-lg md:text-2xl font-semibold">SCORE</div>
          <div className="text-black text-4xl md:text-5xl font-bold mt-1">{score}</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col items-center md:items-start justify-between w-full md:w-[80%] md:flex-row">
          <div className="text-center">
            <div className="text-white text-lg md:text-xl font-semibold mb-4">YOU PICKED</div>
            <div className="bg-white p-8 md:p-12 rounded-full flex items-center justify-center border-[12px] md:border-[20px] border-blue-600">
              <img src={userChoice} className="w-32 md:w-48 h-32 md:h-48 object-contain" />
            </div>
          </div>

          <div className="text-center mx-0 md:mx-8 mt-8 md:mt-0">
            {showHouseChoice && (
              <>
                <div className={`text-white text-3xl md:text-4xl font-bold mb-4 ${result === 'win' ? 'text-green-500' : result === 'lose' ? 'text-red-500' : 'text-gray-400'}`}>
                  {result === 'win' ? 'YOU WIN' : result === 'lose' ? 'YOU LOSE' : 'YOU DRAW'}
                </div>
                <Link to="/" className="inline-block bg-white text-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-md font-semibold hover:bg-gray-200 transition">
                  PLAY AGAIN
                </Link>
              </>
            )}
          </div>

          <div className="text-center mt-8 md:mt-0">
            <div className="text-white text-lg md:text-xl font-semibold mb-4">THE HOUSE PICKED</div>
            <div className={`bg-white p-8 md:p-12 rounded-full flex items-center justify-center border-[12px] md:border-[20px] border-red-600 ${showHouseChoice ? 'visible' : 'invisible'}`}>
              {houseChoice && <img src={houseChoice} alt="House Choice" className="w-32 md:w-48 h-32 md:h-48 object-contain" />}
            </div>
          </div>
        </div>
      </div>

      <Link to="/" className="absolute bottom-4 md:bottom-8 right-4 md:right-8 bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-800 transition text-center">
        BACK TO HOME
      </Link>
    </div>
  );
}

export default ResultPage;
