import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.tsx';
import ErrorPage from './other/ErrorPage.tsx';
import Home from './pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
