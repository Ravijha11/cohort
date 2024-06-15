
import React from 'react';
import { QuestionType } from '../../data/quizzes';

interface QuizResultProps {
  questions: QuestionType[];
  answers: { [key: string]: string };
}

const QuizResult: React.FC<QuizResultProps> = ({ questions, answers }) => {
  const calculateScore = (): number => {
    let score = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Quiz Result</h2>
      <p className="mb-4">
        You scored {score} out of {questions.length}
      </p>
      {questions.map((question) => (
        <div key={question.id} className="mb-4">
          <h3 className="text-lg font-bold">{question.question}</h3>
          <p>
            Your answer: {answers[question.id] || 'No answer provided'}
          </p>
          <p className="text-green-500">
            Correct answer: {question.correctAnswer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuizResult