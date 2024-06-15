
import React from 'react';
import { useLocation } from 'react-router-dom';
import QuizResult from '../components/Quiz/QuizResult';

const ResultPage: React.FC = () => {
  const location = useLocation();
  const { quiz, answers } = location.state;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz Result</h1>
      <QuizResult questions={quiz.questions} answers={answers} />
    </div>
  );
};

export default ResultPage;