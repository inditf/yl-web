import './style.less';
import {
  createHashRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from "./pages/Home/Home";
import Foot from "./compoent/Footer/Footer"
import TokenProvider from "./provider/tokenProvider";
import Routes from './routes/Routes';

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
        element: < Navigate to='/login' />,
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
      <TokenProvider >
        {/* <RouterProvider router={router} /> */}
        <Routes />
      </TokenProvider>
    </div>
  );
}

export default App;
