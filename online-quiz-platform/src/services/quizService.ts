
import { QuizType } from '../data/quizzes';

let quizzes: QuizType[] = [];

export const getQuiz = (): QuizType => {
  // Fetch quiz data from local storage or API
  return quizzes[0];
};

export const createQuiz = (quiz: QuizType): void => {
  // Save quiz data to local storage or API
  quizzes.push(quiz);
};
typescript
Copy
import { QuizType } from '../data/quizzes';

const QUIZ_KEY = 'quizzes';

export const getQuiz = (): QuizType | null => {
  const quizData = localStorage.getItem(QUIZ_KEY);
  return quizData ? JSON.parse(quizData)[0] : null;
};

export const createQuiz = (quiz: QuizType): void => {
  const quizzes = JSON.parse(localStorage.getItem(QUIZ_KEY) || '[]');
  quizzes.push(quiz);
  localStorage.setItem(QUIZ_KEY, JSON.stringify(quizzes));
};

// Add more functions for updating, deleting, and retrieving quizzes as needed