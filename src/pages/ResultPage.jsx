import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import rockIcon from '../assets/icon-rock.svg';
import paperIcon from '../assets/icon-paper.svg';
import scissorsIcon from '../assets/icon-scissors.svg';
import logo from '../assets/logo.svg';

function ResultPage({ score, setScore }) {
  const location = useLocation();
  const { userChoice, prevScore } = location.state || {};

  const getRandomChoice = () => {
    const choices = [rockIcon, paperIcon, scissorsIcon];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const houseChoice = getRandomChoice();

  const determineWinner = () => {
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

  const result = determineWinner();

  useEffect(() => {
    if (result === 'win') {
      setScore(prevScore => prevScore + 1);
    } else if (result === 'lose') {
      setScore(0);
    }
  }, [result, setScore, prevScore]);

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-900 to-gray-800 flex flex-col relative">
      <div className="flex justify-between items-center p-4 border border-white rounded-lg mt-6 mx-[25%]">
        <img src={logo} className="h-auto" />
        <div className="bg-white text-center p-8 rounded-lg w-[20%]">
          <div className="text-black text-2xl font-semibold">SCORE</div>
          <div className="text-black text-5xl font-bold mt-1">{score}</div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center justify-between w-[80%]">
          <div className="text-center">
            <div className="text-white text-xl font-semibold mb-4">YOU PICKED</div>
            <div className="bg-white p-12 rounded-full flex items-center justify-center border-[20px] border-blue-600">
              <img src={userChoice} className="w-48 h-48 object-contain" />
            </div>
          </div>

          <div className="text-center mx-8">
            <div className={`text-white text-4xl font-bold mb-4 ${result === 'win' ? 'text-green-500' : result === 'lose' ? 'text-red-500' : 'text-gray-400'}`}>
              {result === 'win' ? 'YOU WIN' : result === 'lose' ? 'YOU LOSE' : 'YOU DRAW'}
            </div>
            <Link to="/" className="inline-block bg-white text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
              PLAY AGAIN
            </Link>
          </div>

          <div className="text-center">
            <div className="text-white text-xl font-semibold mb-4">THE HOUSE PICKED</div>
            <div className="bg-white p-12 rounded-full flex items-center justify-center border-[20px] border-red-600">
              <img src={houseChoice} alt="House Choice" className="w-48 h-48 object-contain" />
            </div>
          </div>
        </div>
      </div>

      <Link to="/" className="absolute bottom-8 right-8 bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-800 transition text-center">
        BACK TO HOME
      </Link>
    </div>
  );
}

export default ResultPage;
