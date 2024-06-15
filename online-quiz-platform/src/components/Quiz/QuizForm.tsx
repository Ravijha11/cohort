
import React, { useState } from 'react';
import { QuestionType } from '../../data/quizzes';
import QuestionCard from './QuestionCard';
import Button from '../UI/Button';

interface QuizFormProps {
  questions: QuestionType[];
  onSubmit: (answers: { [key: string]: string }) => void;
}

const QuizForm: React.FC<QuizFormProps> = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleOptionChange = (questionId: string, option: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          selectedOption={answers[question.id] || ''}
          onOptionChange={(option) => handleOptionChange(question.id, option)}
        />
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default QuizForm;