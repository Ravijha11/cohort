
import React, { useState } from 'react';
import { QuestionType } from '../data/quizzes';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import { createQuiz } from '../services/quizService';

const AdminPage: React.FC = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { id: questions.length.toString(), question: '', options: ['', '', '', ''], correctAnswer: '' }]);
  };

  const handleQuestionChange = (questionIndex: number, field: string, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex: number, optionIndex: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    const quiz = {
      title: quizTitle,
      questions,
    };
    createQuiz(quiz);
    // Reset form after submission
    setQuizTitle('');
    setQuestions([]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Quiz</h1>
      <Input
        id="quizTitle"
        label="Quiz Title"
        value={quizTitle}
        onChange={(e) => setQuizTitle(e.target.value)}
      />
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <Input
            id={`question-${questionIndex}`}
            label={`Question ${questionIndex + 1}`}
            value={question.question}
            onChange={(e) => handleQuestionChange(questionIndex, 'question', e.target.value)}
          />
          {question.options.map((option, optionIndex) => (
            <Input
              key={optionIndex}
              id={`option-${questionIndex}-${optionIndex}`}
              label={`Option ${optionIndex + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
            />
          ))}
          <Input
            id={`correctAnswer-${questionIndex}`}
            label="Correct Answer"
            value={question.correctAnswer}
            onChange={(e) => handleQuestionChange(questionIndex, 'correctAnswer', e.target.value)}
          />
        </div>
      ))}
      <Button onClick={handleAddQuestion}>Add Question</Button>
      <Button onClick={handleSubmit}>Create Quiz</Button>
    </div>
  );
};

export default AdminPage;