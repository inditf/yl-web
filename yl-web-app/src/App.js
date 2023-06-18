import './style.less';
import {
  createHashRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from "./pages/Home/Home";

import Foot from "./compoent/Footer/Footer"

const Layout = () => {//
  return (
    <>
      <Outlet />
      <Foot />
    </>
  );
};
const router = createHashRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
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
      {
        path: "/home",
        element: <Home />,
      },
    ]
  }
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
