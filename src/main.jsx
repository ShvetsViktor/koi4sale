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
import PLP from './pages/PLP.jsx';
import PDP from './pages/PDP.jsx';
import Delivery from './pages/Delivery.jsx';

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
      { path: "shop", element: <PLP /> },
      { path: "shop/:id", element: <PDP /> },
      { path: "delivery", element: <Delivery /> },
    ],
  },
],
  {
    basename: import.meta.env.BASE_URL,
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)