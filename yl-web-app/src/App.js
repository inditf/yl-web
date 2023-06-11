// import style from './style.less';
import './style.scss';
import {
  createHashRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Footer } from 'antd/lib/layout/layout';
import Login from './pages/Login';
import Register from './pages/Register';
const Layout = () => {//
  return (
    <>
      <Outlet />
      <Footer className="footer">React + Ant Design ©2023 Created by Ant UED</Footer>
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
      },]
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
