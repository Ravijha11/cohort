tsx
Copy
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AdminPage from './pages/AdminPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="admin" element={<AdminPage />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="result" element={<ResultPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);