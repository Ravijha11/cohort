
import React from 'react';
import { QuestionType } from '../../data/quizzes';

interface QuestionCardProps {
  question: QuestionType;
  selectedOption: string;
  onOptionChange: (option: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  onOptionChange,
}) => {
  const handleOptionChange = (option: string) => {
    onOptionChange(option);
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <h3 className="text-lg font-bold">{question.question}</h3>
      </div>
      <div>
        {question.options.map((option) => (
          <div key={option} className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name={`question-${question.id}`}
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;