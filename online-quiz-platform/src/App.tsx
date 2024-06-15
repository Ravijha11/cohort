tsx
Copy
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/quiz">Take Quiz</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;