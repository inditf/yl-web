import { RouterProvider, createHashRouter, Navigate, Outlet } from "react-router-dom";
import { useToken } from "../provider/tokenProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Foot from "../compoent/Footer/Footer";

const Routes = () => {
    const { token } = useToken();
    // 路由配置
    const routesForPublic = [
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
    ];
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/home",
                    element: <Home />,
                },
                {
                    path: "/profile",
                    element: <div>routes For Token</div>,
                },
            ],
        },
    ];
    const routesForNotAuthenticatedOnly = [
        {
            path: "/profile",
            element: <div>routes For Not Token</div>,
        },
    ];
    //页面结构
    const Layout = () => {
        return (
            <>
                <Outlet />
                <Foot />
            </>
        );
    };
    const LayoutForToken = [
        {
            path: "/",
            element: <Layout />,
            children: [
                ...routesForPublic,
                ...(!token ? routesForNotAuthenticatedOnly : []),
                ...routesForAuthenticatedOnly,
            ]
        }
    ];

    const router = createHashRouter(LayoutForToken);

    return <RouterProvider router={router} />;

};


export default Routes;

