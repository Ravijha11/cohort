
import React, { useState } from 'react';
import { getQuiz } from '../services/quizService';
import QuizForm from '../components/Quiz/QuizForm';
import { useNavigate } from 'react-router-dom';

const QuizPage: React.FC = () => {
  const [quiz, setQuiz] = useState(getQuiz());
  const navigate = useNavigate();

  const handleSubmit = (answers: { [key: string]: string }) => {
    navigate('/result', { state: { quiz, answers } });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
      <QuizForm questions={quiz.questions} onSubmit={handleSubmit} />
    </div>
  );
};

export default QuizPage;