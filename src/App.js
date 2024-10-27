import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home, Layout, ErrorPage, Service } from './pages';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/services',
          element: <Service />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
