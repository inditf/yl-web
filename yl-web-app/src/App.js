// import style from './style.less';
import './style.scss';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';

const router = createHashRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
