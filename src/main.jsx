import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './components/app/App.jsx';
import HomePage from '/src/pages/HomePage';
import AboutPage from '/src/pages/AboutPage';
import ErrorPage from '/src/pages/ErrorPage';
import ContactPage from './pages/ContactPage.jsx';
import Blog from './pages/Blog.jsx';

import './style/style.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "blog", element: <Blog /> },
    ],
  },
  {
    basename: import.meta.env.BASE_URL, // ← ключевая строчка!
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)