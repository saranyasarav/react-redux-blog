import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './app/store';
import { fetchUsers } from './features/users/usersSlice';
import App from './App';

store.dispatch(fetchUsers());

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
